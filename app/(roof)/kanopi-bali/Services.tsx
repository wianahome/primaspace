import Image from 'next/image';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  tag: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'kanopi-kain',
    title: 'Kanopi Kain (Awning)',
    description:
      'Memberikan estetika klasik dan elegan. Sangat populer untuk cafe, restoran, shopfront, dan villa bergaya Eropa di Bali.',
    imageSrc: "https://res.cloudinary.com/dlerwn8af/image/upload/v1786877403/kanopi_kain_vkryak.jpg",
    altText: 'Pemasangan Kanopi Kain Awning untuk Villa dan Cafe di Bali',
    tag: 'Estetis & Minimalis',
  },
  {
    id: 'kanopi-kaca',
    title: 'Kanopi Kaca Tempered',
    description:
      'Kanopi transparan mewah berbasis kaca tempered / laminated. Ideal untuk pencahayaan alami serta menambah kesan eksklusif pada hunian.',
    imageSrc: "https://res.cloudinary.com/dlerwn8af/image/upload/v1786877403/kanopi_kaca_vodkjt.jpg",
    altText: 'Jasa Kanopi Kaca Tempered Mewah untuk Carport di Bali',
    tag: 'Mewah & Modern',
  },
  {
    id: 'kanopi-kayu',
    title: 'Kanopi Rangka Kayu',
    description:
      'Menampilkan nuansa tropis alami yang menyatu sempurna dengan arsitektur tradisional maupun modern khas Bali.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786877404/kanopi_kayu_yuzxoc.jpg',
    altText: 'Kanopi Rangka Kayu Etnik Tropis khas Bali',
    tag: 'Tropis Alami',
  },
  {
    id: 'kanopi-membran',
    title: 'Kanopi Membran (Tensile)',
    description:
      'Kanopi berbahan kain membran berteknologi tinggi dengan bentuk fleksibel, futuristik, serta sangat tahan terhadap angin dan cuaca ekstrem.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786877404/kanopi_membran_gov40t.jpg',
    altText: 'Konstruksi Kanopi Membran Tensile untuk Area Otomotif dan Commercial Bali',
    tag: 'Desain Unik',
  },
  {
    id: 'kanopi-alderon',
    title: 'Kanopi Alderon (uPVC)',
    description:
      'Berbahan uPVC berongga ganda yang efektif meredam panas dan kebisingan suara hujan. Pilihan favorit untuk carport dan garasi rumah.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786877404/kanopi_alderon_wszuu2.jpg',
    altText: 'Pemasangan Kanopi Alderon uPVC Peredam Panas di Bali',
    tag: 'Paling Populer',
  },
  {
    id: 'kanopi-trimdek',
    title: 'Kanopi Spandek / Trimdek',
    description:
      'Kanopi baja ringan berprofil trimdek yang kuat, ekonomis, dan efisien. Cocok untuk pelindung area komersial dan garasi luas.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786877405/kanopi_spandek_pxphtr.webp',
    altText: 'Tukang Kanopi Trimdek Spandek Baja Ringan Murah Bali',
    tag: 'Kuat & Ekonomis',
  },
  {
    id: 'kanopi-polycarbonate',
    title: 'Kanopi Polycarbonate',
    description:
      'Kanopi semi-transparan dengan opsi warna beragam. Fleksibel, tahan benturan, serta efektif menahan paparan sinar UV.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786877404/kanopi_policarbonat_cgef2m.jpg',
    altText: 'Atap Kanopi Polycarbonate Anti UV untuk Teras Rumah Bali',
    tag: 'Tahan Panas & UV',
  },
  {
    id: 'kanopi-solartuff',
    title: 'Kanopi Solartuff',
    description:
      'Lembaran polikarbonat bergelombang bening seperti kaca namun jauh lebih kuat dan tidak mudah pecah. Sangat terang untuk area jemur atau kanopi taman.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786877404/kanopi_solartuff_veswl9.webp',
    altText: 'Atap Kanopi Solartuff Transparan Bergelombang di Bali',
    tag: 'Pencahayaan Maksimal',
  },
  {
    id: 'kanopi-solarflat',
    title: 'Kanopi Solarflat',
    description:
      'Polikarbonat datar (flat) yang memberikan tampilan bening jernih mirip kaca tempered dengan bobot yang jauh lebih ringan dan aman.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786877404/kanopi_solarflat_ixsvgi.jpg',
    altText: 'Kanopi Solarflat Bening Pengganti Kaca Murah Bali',
    tag: 'Alternatif Kaca',
  },
  {
    id: 'kanopi-asphalt-bitumen',
    title: 'Kanopi Aspal Bitumen',
    description:
      'Atap kanopi berbahan bitumen aspal yang fleksibel, tahan air 100%, kedap suara, dan memberikan tampilan atap bertekstur elegan.',
    imageSrc: 'https://res.cloudinary.com/dlerwn8af/image/upload/v1786877403/kanopi_bitumen_giop4j.jpg',
    altText: 'Atap Kanopi Aspal Bitumen Kedap Suara Hujan di Bali',
    tag: 'Kedap Suara',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-slate-50" id="layanan">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">
            Pilihan Material & Model
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Layanan Pembuatan & Pemasangan Kanopi di Bali
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg">
            Kami menyediakan berbagai jenis kanopi berkualitas tinggi dengan rangka baja ringan, besi hollow, maupun kayu sesuai kebutuhan arsitektur Anda.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* Image Container with Next.js Image Optimization */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Garansi Presisi & Rapi
                  </span>
                  <a
                    href={`https://wa.me/628135979589?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(
                      item.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors inline-flex items-center gap-1"
                  >
                    Pesan Sekarang &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}