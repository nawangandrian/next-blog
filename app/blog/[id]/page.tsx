import { getBlogs, Blog } from '@/lib/blog'
import Link from 'next/link'

interface Params {
  id: string
}

export default async function BlogDetailPage({ params }: { params: Params | Promise<Params> }) {
  const resolvedParams = await params
  const blogs: Blog[] = await getBlogs()

  const blog = blogs.find((b: Blog) => b.id === parseInt(resolvedParams.id))
  if (!blog) {
    return <p className="text-center mt-20">Blog tidak ditemukan.</p>
  }

  // Related posts: ambil 2 blog lain
  const relatedPosts = blogs
    .filter(b => b.id !== blog.id)
    .slice(0, 2)

  // Fungsi untuk memecah konten menjadi paragraf (4 kalimat per paragraf)
  const paragraphs = () => {
    const sentences = blog.content.split(/(?<=[.!?])\s+/) // split berdasarkan titik, !, ?
    const grouped: string[] = []
    for (let i = 0; i < sentences.length; i += 4) {
      grouped.push(sentences.slice(i, i + 4).join(' '))
    }
    return grouped
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero / Banner */}
      <div className="relative w-full h-96 overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">{blog.title}</h1>
        </div>
      </div>

      {/* Blog content */}
      <main className="max-w-4xl mx-auto p-6 md:p-12 flex-1">
        {/* <p className="text-gray-500 italic mb-6">{blog.excerpt}</p> */}
        <p className="text-gray-700 mb-2 font-semibold text-2xl text-justify">
          {blog.excerpt}
        </p>
        <p className="text-gray-500 text-sm mb-4">{new Date(blog.date).toLocaleDateString()}</p>

        {/* Content with paragraphs */}
        <article className="prose prose-indigo max-w-full">
          {paragraphs().map((para, idx) => (
            <p
              key={idx}
              className={`mb-6 text-gray-700 leading-relaxed text-justify indent-8 ${
                idx === 0 ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600' : ''
              }`}
            >
              {para}
            </p>
          ))}
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(rp => (
                <div key={rp.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={rp.image} alt={rp.title} className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2"><Link href={`/blog/${rp.id}`} className="hover:text-indigo-600">
                      {rp.title}
                    </Link></h3>
                    <p className="text-gray-600 text-sm text-justify">{rp.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
