'use client';

import { useState } from 'react';

export default function ControlPanelPage() {
  const [keywordsText, setKeywordsText] = useState('');
  const [category, setCategory] = useState('kontraktor');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  const CATEGORIES = [
    { label: 'Kontraktor', value: 'kontraktor' },
    { label: 'Arsitek', value: 'arsitek' },
    { label: 'Desain Interior', value: 'desain-interior' },
    { label: 'Kanopi', value: 'kanopi' },
    { label: 'Kitchen Set', value: 'kitchen-set' },
    { label: 'ACP', value: 'acp' },
    { label: 'Alumunium', value: 'alumunium' },
  ];

  const handleBulkGenerate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Split keyword berdasarkan baris baru
    const keywordList = keywordsText
      .split('\n')
      .map((k) => k.trim())
      .filter((k) => k.length > 0);

    if (keywordList.length === 0) {
      alert('Masukkan minimal 1 keyword!');
      return;
    }

    setLoading(true);
    setLogs([]);
    setProgress({ current: 0, total: keywordList.length });

    try {
      // Mengirim keyword ke API Bulk Generator
      const response = await fetch('/api/admin/generate-bulk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keywords: keywordList,
          category: category,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setLogs((prev) => [
          ...prev,
          `✅ Berhasil memproses ${result.totalGenerated} artikel! Artikel telah dijadwalkan (5 post/hari).`,
        ]);
        setKeywordsText('');
      } else {
        setLogs((prev) => [...prev, `❌ Gagal: ${result.error || result.message}`]);
      }
    } catch (err: any) {
      setLogs((prev) => [...prev, `❌ Error System: ${err.message}`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* HEADER */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">
            PrimaSpace - AI Bulk Article Generator & Scheduler
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Input hingga 200 keyword. Sistem akan men-generate konten via AI dan menjadwalkannya secara otomatis 5 post per hari di Supabase.
          </p>
        </div>

        {/* FORM BULK GENERATE */}
        <form onSubmit={handleBulkGenerate} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-6">
          {/* PILIH KATEGORI */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Kategori Artikel
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              disabled={loading}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* TEXTAREA KEYWORD BULK */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Daftar Keyword (1 Keyword Per Baris)
            </label>
            <textarea
              rows={10}
              value={keywordsText}
              onChange={(e) => setKeywordsText(e.target.value)}
              placeholder={`jasa kontraktor bali\nbiaya pembuatan kanopi bali\nkitchen set minimalis denpasar\nrenovasi villa seminyak`}
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-mono leading-relaxed"
              disabled={loading}
            />
            <p className="text-xs text-gray-400 mt-2">
              Jumlah keyword terdeteksi:{' '}
              <span className="font-bold text-blue-600">
                {keywordsText.split('\n').filter((k) => k.trim().length > 0).length}
              </span>
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 px-6 rounded-xl font-bold text-white transition-all shadow-md ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.99]'
            }`}
          >
            {loading ? 'Sedang Memproses AI & Menjadwalkan...' : 'Generate & Jadwalkan Artikel (5 Post/Hari)'}
          </button>
        </form>

        {/* LOGS & STATUS PROGRESS */}
        {(loading || logs.length > 0) && (
          <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl shadow-md space-y-4 font-mono text-sm">
            <h3 className="font-bold text-slate-300 border-b border-slate-700 pb-2">
              System Console Log
            </h3>

            {loading && (
              <div className="flex items-center space-x-3 text-blue-400 animate-pulse">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                <span>AI sedang men-generate artikel dan mengatur tanggal rilis di Supabase...</span>
              </div>
            )}

            <div className="space-y-1 max-h-60 overflow-y-auto text-xs text-slate-300">
              {logs.map((log, index) => (
                <div key={index}>{log}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}