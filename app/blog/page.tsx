'use client'

interface BlogDetailProps {
  id: number
  title: string
  excerpt: string
  image: string
  date: string 
}

export default function BlogDetailPage({ title, image, date, excerpt }: BlogDetailProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Hero / Banner */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            {title}
          </h1>
        </div>
      </div>

      {/* Blog content */}
      <main className="max-w-4xl mx-auto p-6 md:p-12 flex-1">
        {/* Date */}
        <p className="text-gray-500 text-sm mb-4">{new Date(date).toLocaleDateString()}</p>

        {/* Content */}
        <article className="prose prose-indigo max-w-full">
          
        </article>

        {/* Optional: Related posts */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contoh card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092795367-3f6f0b0f9c87?auto=format&fit=crop&w=800&q=80"
                alt="Related"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Judul Artikel Terkait</h3>
                <p className="text-gray-600 text-sm">Cuplikan singkat artikel terkait untuk pembaca.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Related"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Judul Artikel Terkait</h3>
                <p className="text-gray-600 text-sm">Cuplikan singkat artikel terkait untuk pembaca.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
