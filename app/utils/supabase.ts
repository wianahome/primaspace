import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl) {
  console.warn('Warning: NEXT_PUBLIC_SUPABASE_URL tidak ditemukan di .env.local');
}

export const supabase = createClient(
  supabaseUrl.startsWith('http') ? supabaseUrl : 'https://placeholder.supabase.co',
  supabaseAnonKey
);