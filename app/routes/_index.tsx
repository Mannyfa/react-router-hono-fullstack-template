// app/routes/_index.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Hero } from '~/components/Hero';
import { About } from '~/components/About';
import { Menu, type MenuItemType } from '~/components/Menu';
import { Blog, type BlogPostPreviewType } from '~/components/Blog';
import { Link } from 'react-router-dom';

// Fetchers for our data
const fetchFeaturedMenuItems = async (): Promise<MenuItemType[]> => {
  const res = await fetch('/api/menu?limit=3'); // Assuming your API can handle a limit
  if (!res.ok) throw new Error('Failed to fetch menu items');
  return res.json();
};

const fetchRecentBlogPosts = async (): Promise<BlogPostPreviewType[]> => {
  const res = await fetch('/api/blog?limit=3'); // Assuming your API can handle a limit
  if (!res.ok) throw new Error('Failed to fetch blog posts');
  return res.json();
};


export default function HomePage() {
  const { data: menuItems } = useQuery({
    queryKey: ['featuredMenu'],
    queryFn: fetchFeaturedMenuItems,
  });

  const { data: blogPosts } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: fetchRecentBlogPosts,
  });

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section Snippet */}
      <About />

      {/* 3. Featured Menu Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            A Taste of Our Menu
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover a selection of our signature dishes, crafted with the freshest ingredients.
          </p>
          {menuItems && <Menu items={menuItems} />}
          <div className="mt-12">
            <Link 
              to="/menu" 
              className="inline-block bg-amber-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-600 transition duration-300"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Recent Blog Posts Section */}
       <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                From Our Journal
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Insights, stories, and culinary tips from the chef's desk.
            </p>
            {blogPosts && <Blog posts={blogPosts} />}
            <div className="mt-12">
                <Link 
                  to="/blog" 
                  className="inline-block bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                    Read More Articles
                </Link>
            </div>
        </div>
      </div>

       {/* 5. Final Call to Action Section */}
      <div className="bg-amber-500">
        <div className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to plan your perfect event?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-amber-100">
            Let's create an unforgettable dining experience together.
          </p>
          <div className="mt-8">
             <Link 
              to="/booking" 
              className="inline-block bg-white text-amber-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
