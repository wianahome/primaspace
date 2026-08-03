import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const pdf = require('pdf-parse-fork');

const openai = new OpenAI({
  apiKey: process.env.SUMOPOD_API_KEY,
  baseURL: 'https://ai.sumopod.com/v1',
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Fungsi pembantu untuk memvalidasi tanggal sebelum masuk database Supabase
const parseValidDate = (dateStr: any) => {
  if (!dateStr) return null;
  
  const cleanDate = String(dateStr).trim();
  
  // Jika AI memberikan "0000-00-00", string kosong tersembunyi, atau teks tidak valid
  if (cleanDate === "0000-00-00" || cleanDate === "" || cleanDate.includes("0000")) {
    return null;
  }
  
  return cleanDate;
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const rawProjectId = formData.get('projectId') as string;

    if (!file || !rawProjectId) {
      return NextResponse.json({ error: 'File atau Project ID tidak ditemukan' }, { status: 400 });
    }

    // Pembersihan UUID Project ID dari tanda kutip atau spasi liar bawaan frontend
    const projectId = String(rawProjectId).replace(/[^a-zA-Z0-9-]/g, '').trim();

    // 1. Konversi file PDF ke Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. Ekstrak teks mentah dari dalam PDF
    const pdfData = await pdf(buffer);
    const extractedText = pdfData.text;

    if (!extractedText || extractedText.trim().length === 0) {
      throw new Error("Gagal membaca teks dari PDF. Pastikan PDF bukan hasil scan gambar.");
    }

    // 3. Kirim teks hasil ekstrak ke Gemini melalui SumoPod
    const response = await openai.chat.completions.create({
      model: 'gemini/gemini-2.5-flash',
      response_format: { type: "json_object" }, // Memaksa output berupa JSON Object yang valid
      temperature: 0.1,
      messages: [
        {
          role: 'system',
          content: `Anda adalah AI auditor RAB. Analisis teks jadwal proyek di bawah ini.
          Ekstrak seluruh item pekerjaan, bobot (weight) dalam angka tanpa simbol %, tanggal mulai rencana (plan_start_date), dan tanggal selesai rencana (plan_end_date).
          Jika tanggal mulai atau selesai tidak ditemukan pada teks, WAJIB isi nilainya dengan null (bukan "0000-00-00").

          Format tanggal WAJIB YYYY-MM-DD.
          Output WAJIB berupa JSON Object dengan properti "tasks" yang berisi array dari item-item tersebut.

          Format JSON yang diwajibkan:
          {
            "tasks": [
              {
                "item_name": "Pekerjaan Pondasi",
                "weight": 12.5,
                "plan_start_date": "2026-07-01",
                "plan_end_date": "2026-07-15"
              }
            ]
          }

          Teks Proyek:
          ${extractedText}`
        },
      ],
    });

    const rawText = response.choices[0].message.content?.trim();
    if (!rawText) throw new Error("Gagal mendapatkan respons dari AI Agent");

    // Bersihkan teks dari format markdown block jika ada, lalu parse
    const cleanedJson = rawText.replace(/```json|```/g, '').trim();
    const parsedData = JSON.parse(cleanedJson);
    
    // Ambil array dari properti "tasks" yang dibuat oleh AI
    const items = parsedData.tasks || [];

    if (!Array.isArray(items) || items.length === 0) {
      throw new Error("AI tidak menghasilkan struktur daftar pekerjaan yang sesuai.");
    }

    // 4. Mapping data untuk dimasukkan ke database Supabase
    const insertedItems = items.map((item: any) => ({
      project_id: projectId,
      item_name: item.item_name || 'Tanpa Nama Pekerjaan',
      weight: isNaN(Number(item.weight)) ? 0 : Number(item.weight),
      plan_start_date: parseValidDate(item.plan_start_date),
      plan_end_date: parseValidDate(item.plan_end_date),
      progress: 0
    }));

    // Simpan ke tabel schedule_items
    const { data, error } = await supabase
      .from('schedule_items')
      .insert(insertedItems)
      .select();
      
    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Backend Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}