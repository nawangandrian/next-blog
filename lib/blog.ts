'use server';
import { prisma } from './prisma';

export async function getBlogs() {
  try {
    return await prisma.blog.findMany({
      orderBy: { date: 'desc' },
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function addBlog(data: {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}) {
  try {
    await prisma.blog.create({
      data: {
        ...data,
        date: new Date(data.date),
      },
    });
  } catch (error) {
    console.error('Error adding blog:', error);
  }
}

export async function updateBlog(
  id: number,
  data: Partial<{
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
  }>
) {
  try {
    await prisma.blog.update({
      where: { id },
      data: {
        ...data,
        ...(data.date ? { date: new Date(data.date) } : {}),
      },
    });
  } catch (error) {
    console.error('Error updating blog:', error);
  }
}

export async function deleteBlog(id: number) {
  try {
    await prisma.blog.delete({ where: { id } });
  } catch (error) {
    console.error('Error deleting blog:', error);
  }
}

// lib/blog.ts
export interface Blog {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: Date   // pakai Date, bukan string
}