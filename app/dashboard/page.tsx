'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getBlogs, addBlog, updateBlog, deleteBlog } from '@/lib/blog'
import BlogForm from '@/components/BlogForm'
import BlogList from '@/components/BlogList'
import { BlogCardAdminProps } from '@/components/BlogForm'
import { Blog } from '@/lib/blog'

export default function DashboardPage() {
  const [blogs, setBlogs] = useState<BlogCardAdminProps[]>([])
  const [editingBlog, setEditingBlog] = useState<BlogCardAdminProps | null>(null)
  const router = useRouter()

  // ==== Proteksi halaman ====
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (!isLoggedIn) {
      router.replace('/login') // redirect ke login jika belum login
    }
  }, [router])

  const fetchBlogs = async () => {
    const data = await getBlogs()

    // Map data dari Blog ke BlogCardAdminProps
    const blogsWithStringDate: BlogCardAdminProps[] = data.map((blog: Blog) => ({
      id: blog.id,
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      date: blog.date.toISOString().split('T')[0], // ubah Date ke string 'YYYY-MM-DD'
    }))

    setBlogs(blogsWithStringDate)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleAdd = async (blog: Omit<BlogCardAdminProps, 'id'>) => {
    await addBlog(blog)
    fetchBlogs()
  }

  const handleUpdate = async (id: number, data: Partial<BlogCardAdminProps>) => {
    await updateBlog(id, data)
    setEditingBlog(null)
    fetchBlogs()
  }

  const handleDelete = async (id: number) => {
    await deleteBlog(id)
    fetchBlogs()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard Blog</h1>

        <BlogForm
          onAdd={handleAdd}
          editingBlog={editingBlog}
          onUpdate={handleUpdate}
        />

        <BlogList
          blogs={blogs}
          onEdit={setEditingBlog}
          onDelete={handleDelete}
        />
      </main>
    </div>
  )
}
