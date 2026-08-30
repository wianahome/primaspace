'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';


const CATEGORIES = ['arsitek', 'kontraktor', 'desain-interior', 'kanopi', 'kitchen-set', 'acp', 'alumunium'];

export default function ControlPanelPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [imageCategory, setImageCategory] = useState('kanopi');
  const [mediaList, setMediaList] = useState<any[]>([]);

  const [keyword, setKeyword] = useState('');
  const [articleCategory, setArticleCategory] = useState('kanopi');
  const [selectedMediaId, setSelectedMediaId] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState<any>(null);

  useEffect(() => {
    fetchMedia();
  }, [articleCategory]);

  const fetchMedia = async () => {
    const { data } = await supabase.from('psp_media').select('*').eq('category', articleCategory);
    setMediaList(data || []);
  };

  const handleAddMedia = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl || !imageAlt) return alert('Lengkapi data media');

    const { error } = await supabase.from('psp_media').insert({
      url: imageUrl,
      alt_text: imageAlt,
      category: imageCategory,
    });

    if (!error) {
      setImageUrl('');
      setImageAlt('');
      fetchMedia();
      alert('Media berhasil disimpan ke psp_media!');
    } else {
      alert('Gagal menyimpan media: ' + error.message);
    }
  };

  const handleGenerateArticle = async () => {
    if (!keyword) return alert('Masukkan keyword terlebih dahulu');
    setLoading(true);
    setGeneratedArticle(null);

    try {
      const res = await fetch('/api/admin/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyword,
          category: articleCategory,
          selectedMediaId: selectedMediaId || null,
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setGeneratedArticle(data.data);
        alert('Artikel berhasil dibuat dan diterbitkan!');
      } else {
        alert('Gagal: ' + (data.error || data.message));
      }
    } catch (err: any) {
      setLoading(false);
      alert('Error koneksi API: ' + err.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold">Primaspace Control Panel</h1>
        <p className="text-sm text-gray-500">Engine Otomatisasi Artikel SEO & Media Manager</p>
      </div>

      {/* SECTION 1: MEDIA MANAGER */}
      <section className="bg-gray-50 p-6 rounded-xl border">
        <h2 className="text-xl font-semibold mb-4">1. Media Manager (Tabel: psp_media)</h2>
        <form onSubmit={handleAddMedia} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="url"
            placeholder="URL Gambar (https://...)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Alt Text (SEO)"
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <select
            value={imageCategory}
            onChange={(e) => setImageCategory(e.target.value)}
            className="p-2 border rounded"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button type="submit" className="bg-green-600 text-white font-medium p-2 rounded hover:bg-green-700">
            Simpan Gambar
          </button>
        </form>
      </section>

      {/* SECTION 2: AI GENERATOR */}
      <section className="bg-white p-6 rounded-xl border shadow-sm space-y-6">
        <h2 className="text-xl font-semibold">2. Generate Artikel AI (Tabel: psp_articles)</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Target Keyword</label>
            <input
              type="text"
              placeholder="Contoh: kontraktor villa canggu bali"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Kategori Jasa</label>
            <select
              value={articleCategory}
              onChange={(e) => setArticleCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pilih Featured Image</label>
            <select
              value={selectedMediaId}
              onChange={(e) => setSelectedMediaId(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">🔀 Acak oleh AI (Random)</option>
              {mediaList.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.alt_text}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerateArticle}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'AI Memproses & Menyimpan Artikel...' : '🚀 Generate & Publish Artikel'}
        </button>
      </section>

      {/* PREVIEW HASIL */}
      {generatedArticle && (
        <section className="border p-6 rounded-xl bg-gray-50 space-y-4">
          <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded font-bold uppercase">
            Terbit di psp_articles
          </span>
          <h2 className="text-2xl font-bold">{generatedArticle.title}</h2>
          {generatedArticle.featured_image_url && (
            <img
              src={generatedArticle.featured_image_url}
              alt={generatedArticle.featured_image_alt}
              className="w-full h-64 object-cover rounded-lg"
            />
          )}
          <p className="text-gray-600 italic">{generatedArticle.excerpt}</p>
        </section>
      )}
    </div>
  );
}