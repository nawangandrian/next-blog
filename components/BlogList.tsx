'use client';
import { BlogCardAdminProps } from './BlogForm';
import BlogCardAdmin from './BlogCardAdmin';

interface BlogListProps {
  blogs: BlogCardAdminProps[];
  onEdit?: (blog: BlogCardAdminProps) => void;
  onDelete?: (id: number) => void;
}

export default function BlogList({ blogs, onEdit, onDelete }: BlogListProps) {
  if (blogs.length === 0) {
    return <p className="text-center text-gray-500">Belum ada blog</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCardAdmin
          key={blog.id}
          blog={blog}
          onUpdate={() => onEdit?.(blog)}
          onDelete={() => onDelete?.(blog.id)}
        />
      ))}
    </div>
  );
}
