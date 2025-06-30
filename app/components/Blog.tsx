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
    return <p className="text-center text-gray-500">No blog posts yet. Stay tuned!</p>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">From the Journal</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <a href={`/blog/${post.id}`} key={post.id} className="block bg-white rounded-lg shadow-lg overflow-hidden group">
            <img src={post.image_url} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
              <h3 className="mt-2 text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">By {post.author}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
