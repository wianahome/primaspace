'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ScheduleItem {
  item_name: string;
  weight: number;
  plan_start_date: string;
  plan_end_date: string;
  actual_start_date: string | null;
  actual_end_date: string | null;
  progress: number;
}

interface ChartProps {
  items: ScheduleItem[];
}

export default function ScheduleChart({ items }: ChartProps) {
  // Fungsi sederhana untuk menghasilkan data chart berdasarkan urutan tanggal terawal hingga terakhir
  const generateChartData = () => {
    if (items.length === 0) return [];

    // Ambil semua batas tanggal unik untuk dijadikan titik X-Axis
    const dates = Array.from(new Set(
      items.flatMap(i => [i.plan_start_date, i.plan_end_date, i.actual_start_date, i.actual_end_date].filter(Boolean) as string[])
    )).sort();

    let cumulativePlan = 0;
    let cumulativeActual = 0;

    return dates.map(date => {
      items.forEach(item => {
        // Logika sederhana: Jika tanggal saat ini melewati target selesai, bobot ditambahkan ke kumulatif
        if (date === item.plan_end_date) {
          cumulativePlan += Number(item.weight);
        }
        if (item.actual_end_date && date === item.actual_end_date) {
          cumulativeActual += (Number(item.weight) * (item.progress / 100));
        }
      });

      return {
        date: new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }),
        'Rencana (Plan %)': Math.min(cumulativePlan, 100),
        'Realisasi (Actual %)': Math.min(cumulativeActual, 100),
      };
    });
  };

  const chartData = generateChartData();

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Grafik Kemajuan Proyek (S-Curve)</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
          <YAxis domain={[0, 100]} stroke="#94a3b8" fontSize={12} unit="%" />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="Rencana (Plan %)" 
            stroke="#3b82f6" 
            strokeWidth={3} 
            dot={{ r: 4 }} 
            activeDot={{ r: 6 }} 
          />
          <Line 
            type="monotone" 
            dataKey="Realisasi (Actual %)" 
            stroke="#10b981" 
            strokeWidth={3} 
            dot={{ r: 4 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}