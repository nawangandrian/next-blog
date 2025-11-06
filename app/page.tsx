// app/page.tsx
import Banner from '@/components/Banner'
import BlogCard from '@/components/BlogCard'

export default function HomePage() {
  const blogs = [
    {
      id: 1,
      title: 'Teknologi AI Mengubah Dunia Developer',
      excerpt: 'Kecerdasan buatan kini menjadi tulang punggung pengembangan aplikasi modern...',
      image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      date: '2025-10-20',
    },
    {
      id: 2,
      title: 'Framework Web Terbaik di Tahun 2025',
      excerpt: 'Dari Next.js hingga Svelte, framework modern kini lebih cepat dan efisien...',
      image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      date: '2025-09-15',
    },
    {
      id: 3,
      title: 'Optimasi SEO untuk Blog Developer',
      excerpt: 'Pelajari bagaimana meningkatkan peringkat blog teknologi Anda di mesin pencari...',
      image: 'https://images.unsplash.com/photo-1753715613382-dc3e8456dbc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=782',
      date: '2025-08-05',
    },
  ]

  return (
    <>
      <main>
        <Banner />
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Artikel Terbaru</h2>
          <div className="space-y-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
