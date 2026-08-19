import { supabase } from '@/app/utils/supabase';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';


const sumopod = new OpenAI({
  baseURL: 'https://ai.sumopod.com/v1',
  apiKey: process.env.SUMOPOD_API_KEY || '',
});

function cleanJsonString(rawInput: string): string {
  let cleaned = rawInput.trim();
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, '');
  cleaned = cleaned.replace(/\s*```$/, '');
  const firstOpen = cleaned.indexOf('{');
  const lastClose = cleaned.lastIndexOf('}');
  if (firstOpen !== -1 && lastClose !== -1) {
    cleaned = cleaned.substring(firstOpen, lastClose + 1);
  }
  return cleaned;
}

export async function POST(req: Request) {
  try {
    const { keyword, category, selectedMediaId } = await req.json();

    if (!keyword || !category) {
      return NextResponse.json({ success: false, message: 'Keyword dan Kategori wajib diisi' }, { status: 400 });
    }

    // =========================================================
    // 1. DYNAMIC INTERNAL LINK: Ambil artikel yang sudah ada di Supabase
    // =========================================================
    const { data: existingBlogs } = await supabase
      .from('psp_articles')
      .select('title, slug')
      .eq('category', category)
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .limit(5); // Ambil 5 artikel terbaru di kategori yang sama

    // Format daftar artikel menjadi referensi untuk AI
    let existingBlogsListText = '';
    if (existingBlogs && existingBlogs.length > 0) {
      existingBlogsListText = existingBlogs
        .map((b) => `- Judul: "${b.title}" -> Link: /blog/${b.slug}`)
        .join('\n');
    }

    // =========================================================
    // 2. Ambil Featured Image
    // =========================================================
    let featuredImage = { url: '', alt: '' };
    if (selectedMediaId) {
      const { data } = await supabase.from('psp_media').select('*').eq('id', selectedMediaId).single();
      if (data) featuredImage = { url: data.url, alt: data.alt_text };
    } else {
      const { data: mediaList } = await supabase.from('psp_media').select('*').eq('category', category);
      if (mediaList && mediaList.length > 0) {
        const randomIndex = Math.floor(Math.random() * mediaList.length);
        featuredImage = { url: mediaList[randomIndex].url, alt: mediaList[randomIndex].alt_text };
      }
    }

    // =========================================================
    // 3. Prompt AI Dengan Data Blog Real-Time dari Supabase
    // =========================================================
    const prompt = `
      Anda adalah SEO Copywriter profesional untuk brand primaspace.id di Bali.
      Buatlah artikel SEO-friendly mendalam berdasarkan keyword: "${keyword}" (Kategori: ${category}).

      ATURAN INTERNAL LINKING STRATEGIS:
      1. LINK LAYANAN UTAMA (Money Page):
         Sertakan 1-2 link ke layanan utama sesuai relevansi:
         - /kanopi-bali (Jasa Kanopi)
         - /acp-bali (Jasa ACP)
         - /jasa-arsitek-bali (Jasa Arsitek)
         - /kontraktor-bali (Jasa Kontraktor)
         - /kontraktor-interior-bali (Jasa Interior)

      2. LINK BLOG TERKAIT (Topical Cluster):
         Berikut adalah daftar artikel blog yang SUDAH TERBIT di website kami pada kategori ${category}:
         ${existingBlogsListText || 'Belum ada artikel blog lain di kategori ini.'}

         *Instruksi:* Jika daftar artikel di atas ada, pilih 1-2 artikel yang paling relevan dengan pembahasan "${keyword}" dan sisipkan link-nya secara alami di dalam artikel menggunakan markdown link [Anchor Text yang Alami](/blog/slug-artikel).

      PENTING: Kembalikan LANGSUNG objek JSON murni TANPA pembungkus markdown (tanpa \`\`\`json).

      Struktur JSON wajib:
      {
        "title": "Judul artikel menarik (max 60 karakter)",
        "slug": "slug-url-seo-friendly",
        "metaTitle": "Meta Title SEO",
        "metaDescription": "Meta Description singkat + CTA",
        "excerpt": "Ringkasan artikel 2-3 kalimat",
        "readingTimeMinutes": 5,
        "content": "Isi artikel lengkap dalam format Markdown (H2, H3, bullet points, internal link alami, FAQ)."
      }
    `;

    const aiResponse = await sumopod.chat.completions.create({
      model: 'claude-sonnet-5',
      messages: [{ role: 'user', content: prompt }],
    });

    const rawContent = aiResponse.choices[0]?.message?.content || '{}';
    const cleanedJson = cleanJsonString(rawContent);
    const parsedData = JSON.parse(cleanedJson);

    // =========================================================
    // 4. Simpan Artikel Baru ke Supabase
    // =========================================================
    const { data: newArticle, error: dbError } = await supabase
      .from('psp_articles')
      .insert({
        title: parsedData.title,
        slug: parsedData.slug,
        primary_keyword: keyword,
        category: category,
        meta_title: parsedData.metaTitle,
        meta_description: parsedData.metaDescription,
        excerpt: parsedData.excerpt,
        content: parsedData.content,
        reading_time_minutes: parsedData.readingTimeMinutes || 5,
        featured_image_url: featuredImage.url,
        featured_image_alt: featuredImage.alt || parsedData.title,
        is_published: true,
      })
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({ success: true, data: newArticle });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}