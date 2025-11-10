'use client';

import { useState, useEffect } from 'react';
import { getBlogs, addBlog, updateBlog, deleteBlog } from '@/lib/blog';
import BlogForm from '@/components/BlogForm';
import BlogList from '@/components/BlogList';
import { BlogCardAdminProps } from '@/components/BlogForm';

export default function DashboardPage() {
  const [blogs, setBlogs] = useState<BlogCardAdminProps[]>([]);
  const [editingBlog, setEditingBlog] = useState<BlogCardAdminProps | null>(null);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data as BlogCardAdminProps[]);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleAdd = async (blog: Omit<BlogCardAdminProps, 'id'>) => {
    await addBlog(blog);
    fetchBlogs();
  };

  const handleUpdate = async (id: number, data: Partial<BlogCardAdminProps>) => {
    await updateBlog(id, data);
    setEditingBlog(null);
    fetchBlogs();
  };

  const handleDelete = async (id: number) => {
    await deleteBlog(id);
    fetchBlogs();
  };

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
  );
}
