import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { teksMentahOCR } = body;

    if (!teksMentahOCR) {
      return NextResponse.json({ error: 'Teks mentah kosong' }, { status: 400 });
    }

    const apiKey = process.env.SUMOPOD_API_KEY;
    if (!apiKey) {
      console.error("ERROR: SUMOPOD_API_KEY tidak ditemukan di .env.local!");
      return NextResponse.json({ error: 'API Key belum dikonfigurasi' }, { status: 500 });
    }

    // UPDATE: Menggunakan Base URL yang benar dari dashboard SumoPod Anda
    const response = await fetch('https://ai.sumopod.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Pastikan Anda mengganti ini dengan nama model yang valid di tab "Models" SumoPod Anda
        response_format: { type: "json_object" }, 
        temperature: 0.1,
        messages: [
          {
            role: 'system',
            content: `Anda adalah AI auditor RAB. Tugas Anda merapikan teks typo.
            Output WAJIB berupa JSON murni dengan format persis seperti ini:
            {
              "nama_kategori": "Nama Kategori",
              "items": [
                { "no": "1", "uraian_pekerjaan": "Nama Barang", "volume": 10.0, "satuan": "m2", "harga_satuan": 150000, "jumlah_harga": 1500000 }
              ]
            }`
          },
          {
            role: 'user',
            content: String(teksMentahOCR)
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("ERROR DARI API SUMOPOD:", errorText);
      return NextResponse.json({ error: `AI Sumopod Error: ${response.statusText}` }, { status: response.status });
    }

    const aiResult = await response.json();
    const jsonString = aiResult.choices?.[0]?.message?.content;
    
    if (!jsonString) {
      return NextResponse.json({ error: 'Format respons AI tidak sesuai' }, { status: 500 });
    }

    const dataBersih = JSON.parse(jsonString);
    return NextResponse.json(dataBersih);

  } catch (error: any) {
    console.error('CRASH PADA API ROUTE:', error);
    return NextResponse.json({ error: error?.message || 'Gagal memproses data RAB' }, { status: 500 });
  }
}