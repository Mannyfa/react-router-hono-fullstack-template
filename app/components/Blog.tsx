// app/components/Blog.tsx
import React from 'react';

// Define a type for blog post previews
export type BlogPostPreviewType = {
  id: number;
  title: string;
  author: string;
  image_url: string;
  created_at: string;
  tags: string;
};

interface BlogListProps {
  posts: BlogPostPreviewType[];
}

export function Blog({ posts }: BlogListProps) {
  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-500 py-12">No blog posts yet. Stay tuned!</p>;
  }

  return (
    <div className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-text sm:text-5xl text-center font-serif mb-16">From the Journal</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <a href={`/blog/${post.id}`} key={post.id} className="block bg-white rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300">
              <img src={post.image_url} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-8">
                <p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
                <h3 className="mt-4 text-2xl font-bold text-text group-hover:text-primary transition-colors font-serif">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm text-gray-600">By {post.author}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
