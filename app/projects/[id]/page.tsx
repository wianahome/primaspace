'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useParams } from 'next/navigation';
import ScheduleChart from '../ScheduleChart';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function ProjectDashboard() {
  const params = useParams();
  const projectId = params?.id as string;

  // State Bawaan Project
  const [items, setItems] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);

  // --- 1. STATE BARU UNTUK AI SUMOPOD DATA CLEANER ---
  const [teksMentah, setTeksMentah] = useState('');
  const [rabItems, setRabItems] = useState<any[]>([]);
  const [cleaning, setCleaning] = useState(false);
  const [kategoriName, setKategoriName] = useState('');
  const [showCleaner, setShowCleaner] = useState(false);

  const fetchSchedule = async () => {
    if (!projectId || projectId === 'undefined' || projectId === '1') return;

    const { data } = await supabase
      .from('schedule_items')
      .select('*')
      .eq('project_id', projectId)
      .order('plan_start_date', { ascending: true });
    if (data) setItems(data);
  };

  useEffect(() => {
    fetchSchedule();
  }, [projectId]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    if (!projectId || projectId === 'undefined' || projectId === '1') {
      alert('Error: ID Proyek tidak terbaca dengan benar dari URL.');
      return;
    }

    setUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('projectId', projectId);

    try {
      const res = await fetch('/api/upload-pdf', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        alert('AI Agent berhasil mem-breakdown dokumen!');
        fetchSchedule();
      } else {
        alert(`Gagal: ${result.error}`);
      }
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat mengunggah file.');
    } finally {
      setUploading(false);
    }
  };

  // --- 2. FUNGSI HANDLER UNTUK AI SUMOPOD ---
  const handleCleanData = async () => {
    if (!teksMentah.trim()) return;
    
    setCleaning(true);
    try {
      const res = await fetch('/api/clean-rab', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teksMentahOCR: teksMentah })
      });
      
      if (!res.ok) throw new Error('Gagal memproses RAB');
      
      const dataBersih = await res.json();
      
      setKategoriName(dataBersih.nama_kategori);
      setRabItems(dataBersih.items);
    } catch (err) {
      console.error("Error:", err);
      alert("Terjadi kesalahan saat merapikan data dengan AI Sumopod.");
    } finally {
      setCleaning(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 pt-25">
      <div className="flex justify-between items-center bg-slate-900 p-6 rounded-2xl text-white">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Time Schedule</h1>
          <p className="text-slate-400 text-sm">Unggah RAB / PDF Jadwal kerja Anda untuk dianalisis oleh AI</p>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Tombol Toggle Menu Pembersih Teks */}
          <button
            onClick={() => setShowCleaner(!showCleaner)}
            className="px-4 py-2 border border-slate-700 hover:bg-slate-800 rounded-xl font-medium text-sm transition duration-200"
          >
            {showCleaner ? '✦ Sembunyikan Text Cleaner' : '✦ AI Text Cleaner'}
          </button>

          <label className="flex flex-col items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl cursor-pointer font-medium text-sm transition duration-200">
            <span>{uploading ? 'AI sedang membaca PDF...' : '✦ Upload PDF Jadwal'}</span>
            <input type="file" accept=".pdf" onChange={handleFileUpload} className="hidden" disabled={uploading} />
          </label>
        </div>
      </div>

      {/* --- 3. UI BARU: AREA AI SUMOPOD TEXT CLEANER --- */}
      {showCleaner && (
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">AI Sumopod Data Auditor</h3>
            <p className="text-sm text-slate-500">Tempelkan teks hasil ekstraksi/OCR yang berantakan atau penuh typo untuk dirapikan secara otomatis.</p>
          </div>
          
          <textarea 
            className="w-full p-4 border border-slate-300 rounded-xl text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            rows={5}
            placeholder="Contoh: Pekerjaan Bongkaran \n 1. Bongkar Dinding | Vol: 3:00 | Harga: Rp29.747,600"
            value={teksMentah}
            onChange={(e) => setTeksMentah(e.target.value)}
          />
          
          <button 
            onClick={handleCleanData}
            disabled={cleaning || !teksMentah.trim()}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm disabled:bg-slate-300 transition duration-200"
          >
            {cleaning ? 'Sedang Memproses & Menghitung Ulang...' : 'Audit & Perbaiki Data'}
          </button>

          {/* Tabel Hasil Ekstraksi AI Sumopod */}
          {rabItems.length > 0 && (
            <div className="mt-4 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 bg-emerald-50 border-b border-emerald-100">
                <h4 className="font-bold text-emerald-900">Hasil Audit AI: {kategoriName}</h4>
              </div>
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                    <th className="p-3">No</th>
                    <th className="p-3">Uraian Pekerjaan</th>
                    <th className="p-3 text-center">Vol</th>
                    <th className="p-3 text-center">Satuan</th>
                    <th className="p-3 text-right">Harga Satuan</th>
                    <th className="p-3 text-right">Jumlah Harga (Bersih)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {rabItems.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50/80">
                      <td className="p-3 text-center font-medium">{item.no}</td>
                      <td className="p-3 font-medium text-slate-900">{item.uraian_pekerjaan}</td>
                      <td className="p-3 text-center text-emerald-600 font-semibold">{item.volume}</td>
                      <td className="p-3 text-center">{item.satuan}</td>
                      <td className="p-3 text-right">Rp {item.harga_satuan.toLocaleString('id-ID')}</td>
                      <td className="p-3 text-right font-bold text-slate-900">Rp {item.jumlah_harga.toLocaleString('id-ID')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Grafik */}
      <ScheduleChart items={items} />

      {/* Tabel Utama Time Schedule */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-600 text-sm font-semibold">
              <th className="p-4">Item Pekerjaan</th>
              <th className="p-4">Bobot</th>
              <th className="p-4">Rencana (Mulai - Selesai)</th>
              <th className="p-4">Progres</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-medium text-slate-900">{item.item_name}</td>
                <td className="p-4">{item.weight}%</td>
                <td className="p-4 text-slate-500">
                  {item.plan_start_date} s/d {item.plan_end_date}
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    {item.progress}%
                  </span>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400">
                  Belum ada data pekerjaan. Silakan unggah PDF untuk memulai breakdown otomatis.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}