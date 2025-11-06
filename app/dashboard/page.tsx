'use client';

import { useState } from 'react';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export default function DashboardPage() {
  const [blogs, setBlogs] = useState<BlogCardProps[]>([
    {
      id: 1,
      title: "Belajar React",
      excerpt: "Panduan lengkap belajar React dari dasar hingga mahir.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=870&q=80",
      date: "2025-11-06",
    },
    {
      id: 2,
      title: "Tailwind CSS Tips",
      excerpt: "Tips dan trik menggunakan Tailwind CSS secara efektif.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      date: "2025-11-05",
    },
  ]);

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !excerpt || !image || !date) return;

    const newBlog: BlogCardProps = {
      id: Date.now(),
      title,
      excerpt,
      image,
      date,
    };

    setBlogs([newBlog, ...blogs]);
    setTitle('');
    setExcerpt('');
    setImage('');
    setDate('');
  };

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleUpdate = (id: number) => {
    const blog = blogs.find(b => b.id === id);
    if (!blog) return;

    const newTitle = prompt("Update Judul", blog.title) || blog.title;
    const newExcerpt = prompt("Update Cuplikan", blog.excerpt) || blog.excerpt;
    const newImage = prompt("Update URL Gambar", blog.image) || blog.image;
    const newDate = prompt("Update Tanggal", blog.date) || blog.date;

    setBlogs(blogs.map(b =>
      b.id === id ? { ...b, title: newTitle, excerpt: newExcerpt, image: newImage, date: newDate } : b
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard Blog</h1>

        {/* Form Tambah Blog */}
        <form onSubmit={handleAddBlog} className="bg-white p-6 rounded-lg shadow-md mb-8 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Tambah Blog</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Judul"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Cuplikan / Isi Blog"
                rows={4} // Bisa diubah sesuai kebutuhan
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
            />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="URL Gambar"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Tambah Blog
          </button>
        </form>

        {/* List Blog Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-2">{blog.excerpt}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleUpdate(blog.id)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {blogs.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">Belum ada blog</p>
          )}
        </div>
      </main>
    </div>
  );
}
