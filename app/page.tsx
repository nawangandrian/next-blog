// app/page.tsx
import Banner from '@/components/Banner'
import BlogCard from '@/components/BlogCard'
import { Blog, getBlogs } from '@/lib/blog'


export default async function HomePage() {
  // Ambil data blog langsung dari database
  const blogs = await getBlogs()

  return (
    <main>
      <Banner />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Artikel Terbaru</h2>
        <div className="space-y-8">
          {blogs.length > 0 ? (
            blogs.map((blog: Blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                image={blog.image}
                date={blog.date.toISOString().split('T')[0]}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Belum ada artikel.</p>
          )} 
        </div>
      </section>
    </main>
  )
}
