'use client';
import { useState, useEffect, useTransition } from 'react';
import { addBlog } from '@/lib/blog';

export interface BlogCardAdminProps {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

interface BlogFormProps {
  onAdd?: (blog: Omit<BlogCardAdminProps, 'id'>) => void;
  onUpdate?: (id: number, data: Partial<BlogCardAdminProps>) => void;
  editingBlog?: BlogCardAdminProps | null;
}

export default function BlogForm({ onAdd, onUpdate, editingBlog }: BlogFormProps) {
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    date: '',
  });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (editingBlog) {
        // Pastikan format YYYY-MM-DD
        const formatDate = (date: string) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
        };

        setForm({
        title: editingBlog.title,
        excerpt: editingBlog.excerpt,
        content: editingBlog.content,
        image: editingBlog.image,
        date: formatDate(editingBlog.date),
        });
    } else {
        setForm({ title: '', excerpt: '', content: '', image: '', date: '' });
    }
    }, [editingBlog]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (editingBlog && onUpdate) {
        await onUpdate(editingBlog.id, form);
      } else if (onAdd) {
        await onAdd(form);
      }
      setForm({ title: '', excerpt: '', content: '', image: '', date: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8 space-y-4">
      <h2 className="text-xl font-semibold mb-4">
        {editingBlog ? 'Edit Blog' : 'Tambah Blog'}
      </h2>

      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Judul"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />
      <textarea
        name="excerpt"
        value={form.excerpt}
        onChange={handleChange}
        placeholder="Cuplikan singkat"
        rows={2}
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Isi lengkap blog"
        rows={6}
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />
      <input
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="URL Gambar"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2"
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        {isPending ? 'Menyimpan...' : editingBlog ? 'Update Blog' : 'Tambah Blog'}
      </button>
    </form>
  );
}
