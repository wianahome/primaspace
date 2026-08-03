import { z } from 'zod';

export const ItemRABSchema = z.object({
  no: z.string(),
  uraian_pekerjaan: z.string(),
  volume: z.number().describe("Volume dalam desimal murni. Perbaiki typo seperti '3:00' menjadi 3.0 atau 't' menjadi 1.0"),
  satuan: z.string(),
  harga_satuan: z.number().describe("Harga satuan murni tanpa tanda baca ribuan"),
  jumlah_harga: z.number().describe("Hasil perkalian presisi dari volume * harga_satuan")
});

export const TabelRABSchema = z.object({
  nama_kategori: z.string(),
  items: z.array(ItemRABSchema)
});

export type TabelRAB = z.infer<typeof TabelRABSchema>;