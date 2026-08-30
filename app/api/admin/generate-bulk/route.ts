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

// Fallback gambar default berdasarkan kategori jika butuh gambar lokal
const CATEGORY_IMAGES: Record<string, string> = {
  kontraktor: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
  arsitek: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'desain-interior': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  kanopi: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  'kitchen-set': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  acp: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  alumunium: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
};

export async function POST(req: Request) {
  try {
    const { keywords, category } = await req.json();

    if (!keywords || !Array.isArray(keywords) || keywords.length === 0) {
      return NextResponse.json({ success: false, message: 'Daftar keyword wajib diisi' }, { status: 400 });
    }

    const POSTS_PER_DAY = 5;
    const now = new Date();
    const createdArticles = [];

    // Process setiap keyword dalam array
    for (let i = 0; i < keywords.length; i++) {
      const keyword = keywords[i].trim();
      if (!keyword) continue;

      // HITUNG TANGGAL RILIS JADWAL (5 POST PER HARI)
      const dayOffset = Math.floor(i / POSTS_PER_DAY);
      
      const scheduledDate = new Date(now);
      scheduledDate.setDate(now.getDate() + dayOffset);
      const randomHour = 8 + Math.floor(Math.random() * 10);
      const randomMinute = Math.floor(Math.random() * 60);
      scheduledDate.setHours(randomHour, randomMinute, 0, 0);

      // Fetch artikel yang sudah terbit di Supabase untuk Internal Linking
      const { data: existingBlogs } = await supabase
        .from('psp_articles')
        .select('title, slug')
        .eq('category', category)
        .limit(5);

      let existingBlogsText = '';
      if (existingBlogs && existingBlogs.length > 0) {
        existingBlogsText = existingBlogs.map((b) => `- ${b.title} (/blog/${b.slug})`).join('\n');
      }

      // Prompt AI Generate Artikel
      const prompt = `
        Anda adalah SEO Copywriter profesional untuk brand primaspace.id di Bali.
        Buat artikel SEO mendalam berdasarkan keyword: "${keyword}" (Kategori: ${category}).

        INTERNAL LINKING:
        1. Money Page: Link ke /kanopi-bali, /acp-bali, /jasa-arsitek-bali, /kontraktor-bali, atau /kontraktor-interior-bali.
        2. Blog Terkait: 
        ${existingBlogsText || 'Belum ada blog terkait.'}

        Kembalikan JSON murni (tanpa markdown wrapper):
        {
          "title": "Judul artikel",
          "slug": "slug-seo-friendly",
          "metaTitle": "Meta Title SEO",
          "metaDescription": "Meta Description singkat + CTA",
          "excerpt": "Ringkasan 2-3 kalimat",
          "readingTimeMinutes": 5,
          "imageSearchTerm": "english search term for architectural/construction photo (contoh: modern canopy villa, luxury interior kitchen)",
          "content": "Isi artikel lengkap dalam format Markdown (H2, H3, bullet points, internal link alami)."
        }
      `;

      const aiResponse = await sumopod.chat.completions.create({
        model: 'claude-sonnet-5',
        messages: [{ role: 'user', content: prompt }],
      });

      const rawContent = aiResponse.choices[0]?.message?.content || '{}';
      const parsedData = JSON.parse(cleanJsonString(rawContent));

      // PENANGANAN GAMBAR DYNAMIC (Unsplash / Fallback)
      const searchTerm = encodeURIComponent(parsedData.imageSearchTerm || category || 'architecture');
      const featuredImageUrl = CATEGORY_IMAGES[category] || `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80`;

      // Simpan ke Supabase dengan tanggal `published_at` terjadwal & gambar
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
          featured_image_url: featuredImageUrl,
          featured_image_alt: parsedData.title,
          reading_time_minutes: parsedData.readingTimeMinutes || 5,
          is_published: true,
          published_at: scheduledDate.toISOString(), // TANGGAL RILIS OTOMATIS BERTAHAP
        })
        .select('id, title, slug, published_at')
        .single();

      if (!dbError && newArticle) {
        createdArticles.push(newArticle);
      }
    }

    return NextResponse.json({
      success: true,
      totalGenerated: createdArticles.length,
      data: createdArticles,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}