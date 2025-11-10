'use client';
import { BlogCardAdminProps } from './BlogForm';

interface BlogCardAdminPropsComponent {
  blog: BlogCardAdminProps;
  onDelete: () => void;
  onUpdate: () => void;
}

export default function BlogCardAdmin({ blog, onDelete, onUpdate }: BlogCardAdminPropsComponent) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2 text-justify">{blog.title}</h3>
          <p className="text-gray-600 mb-2 text-justify">{blog.excerpt}</p>
          <p className="text-gray-500 text-sm line-clamp-3 text-justify">{blog.content}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString('id-ID')}</span>
          <div className="space-x-2">
            <button onClick={onUpdate} className="text-blue-600 hover:underline text-sm">Edit</button>
            <button onClick={onDelete} className="text-red-600 hover:underline text-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
