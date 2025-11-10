// components/BlogCard.tsx
import Link from 'next/link'

interface BlogCardProps {
  id: number
  title: string
  excerpt: string
  image: string
  date: string 
}

export default function BlogCard({ id, title, excerpt, image, date }: BlogCardProps) {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.toLocaleString('en-US', { month: 'short' })
  const day = dateObj.getDate()

  return (
    <article className="flex bg-white transition hover:shadow-xl rounded-lg overflow-hidden">
      {/* Tanggal di kiri (tetap ada di mobile) */}
      <div className="rotate-180 p-2 [writing-mode:vertical-lr] flex items-center justify-center">
        <time
          dateTime={date}
          className="flex items-center justify-between gap-2 text-xs font-bold text-gray-900 uppercase"
        >
          <span>{year}</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>{`${month} ${day}`}</span>
        </time>
      </div>

      {/* Kontainer kanan (gambar + konten) */}
      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Thumbnail */}
        <div className="w-full sm:basis-56">
          <img
            alt={title}
            src={image}
            className="w-full h-48 sm:h-full sm:aspect-square object-cover"
          />
        </div>

        {/* Konten */}
        <div className="flex flex-1 flex-col justify-between border-t sm:border-t-0 sm:border-l border-gray-900/10 p-4 sm:p-6">
          <Link href={`/blog/${id}`}>
            <h3 className="font-bold text-gray-900 uppercase text-2xl md:text-2xl hover:text-indigo-600 transition">
              {title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-base md:text-lg text-gray-700 text-justify">
            {excerpt}
          </p>

          <div className="mt-4 sm:mt-2 sm:flex sm:items-end sm:justify-end">
            <Link
              href={`/blog/${id}`}
              className="block bg-indigo-600 px-5 py-3 text-center text-xs font-bold text-white uppercase transition hover:bg-indigo-800"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
