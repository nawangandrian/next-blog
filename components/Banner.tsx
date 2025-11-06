// components/Banner.tsx
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-white lg:grid lg:h-[90vh] lg:place-content-center">
      <div className="mx-auto max-w-7xl w-full px-4 pt-6 pb-5 sm:px-8 sm:pt-6 sm:pb-10 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:px-8 lg:pt-8 lg:pb-10">
        
        {/* Gambar di sisi kiri */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=872"
            alt="News NawDev Banner"
            className="w-full max-w-md rounded-2xl shadow-xl object-cover md:max-w-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Teks di sisi kanan */}
        <div className="max-w-prose text-left mt-10 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
            <span className="block">Selamat Datang di</span>
            <span className="block text-indigo-600">News NawDev</span>
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            Temukan berita dan artikel terkini seputar{" "}
            <span className="font-semibold text-indigo-600">teknologi, pemrograman,</span>{" "}
            dan inovasi digital yang membantu Anda berkembang sebagai developer modern.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow-md hover:bg-indigo-700 transition-colors"
            >
              Lihat Artikel Terbaru
            </Link>

            <Link
              href="/about"
              className="inline-block rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-colors"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
