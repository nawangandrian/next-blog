// app/about/page.tsx

import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
    <section className="bg-white lg:grid lg:h-[90vh] lg:place-content-center">
      <div className="mx-auto max-w-7xl w-full px-4 py-10 sm:px-8 md:grid md:grid-cols-2 md:items-center md:gap-10 lg:px-10 lg:py-16">

        {/* Deskripsi di sisi kiri */}
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
            <span className="block text-indigo-600">Tentang Kami</span>
            <span className="block">News NawDev</span>
          </h1>

          <p className="mt-6 text-base text-gray-700 sm:text-lg leading-relaxed">
            <strong className="text-indigo-600">News NawDev</strong> adalah platform berita digital yang berfokus pada dunia{" "}
            <span className="font-semibold">teknologi, pengembangan web, dan inovasi digital</span>.
            Kami percaya bahwa setiap developer Indonesia layak mendapatkan akses terhadap informasi
            terkini, inspiratif, dan relevan untuk mendukung perjalanan karier mereka di era digital.
          </p>

          <p className="mt-4 text-base text-gray-700 sm:text-lg leading-relaxed">
            Dengan tim kreatif yang berpengalaman, kami menghadirkan artikel, tutorial, dan insight industri
            yang membantu Anda tumbuh menjadi developer yang lebih baik setiap harinya.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow-md hover:bg-indigo-700 transition-colors"
            >
              Jelajahi Artikel
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Grid Gambar di sisi kanan */}
        <div className="mt-10 md:mt-0 grid grid-cols-2 grid-rows-2 gap-4">
          {/* Gambar kiri atas */}
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
            alt="Developer bekerja"
            className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
          />

          {/* Gambar kanan besar (menempati 2 baris) */}
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
            alt="Tim berkolaborasi"
            className="w-full h-full object-cover rounded-lg shadow-lg row-span-2 hover:scale-105 transition-transform duration-500"
          />

          {/* Gambar kiri bawah */}
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
            alt="Kreativitas digital"
            className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
    </main>
  );
}
