import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Bagian Kiri: Info dan CTA */}
          <div className="bg-indigo-600 p-8 md:p-12 lg:px-16 lg:py-24 rounded-2xl shadow-lg">
            <div className="mx-auto max-w-xl text-center text-white">
              <h2 className="text-3xl font-bold md:text-4xl">
                Hubungi Kami
              </h2>

              <p className="mt-4 text-indigo-100 leading-relaxed">
                Kami senang mendengar dari Anda!  
                Apakah Anda memiliki pertanyaan, saran, atau ingin berkolaborasi?  
                Tim <span className="font-semibold text-white">News NawDev</span> siap membantu Anda.
              </p>

              <div className="mt-6 md:mt-10">
                <Link
                  href="mailto:nawangandrian@gmail.com"
                  className="inline-block rounded-md border border-white bg-white px-10 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  Kirim Email Sekarang
                </Link>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Grid Gambar */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Developer working on laptop"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=870&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg shadow-md"
            />

            <img
              alt="Team collaboration"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=774&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
