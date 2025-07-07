// app/routes/_index.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Hero } from '~/components/Hero';
import { About } from '~/components/About';
import { Menu, type MenuItemType } from '~/components/Menu';
import { Blog, type BlogPostPreviewType } from '~/components/Blog';
import { Link } from 'react-router-dom';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

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
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <div className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-text sm:text-5xl font-serif mb-6">
              A Taste of Our Menu
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Discover a selection of our signature dishes, crafted with the freshest ingredients.
            </p>
            {menuItems && <Menu items={menuItems} />}
            <div className="mt-12">
              <Link
                to="/menu"
                className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-primary/90 transition duration-300 transform hover:scale-105"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
        <div className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-text sm:text-5xl font-serif mb-6">
              From Our Journal
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Insights, stories, and culinary tips from the chef's desk.
            </p>
            {blogPosts && <Blog posts={blogPosts} />}
            <div className="mt-12">
              <Link
                to="/blog"
                className="inline-block bg-secondary text-white font-bold py-4 px-10 rounded-full hover:bg-secondary/90 transition duration-300 transform hover:scale-105"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-cyan-50">
          <div className="container mx-auto py-20 px-4 text-center">
            <h2 className="text-4xl font-extrabold text-text">
              Ready to plan your perfect event?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-text/80">
              Let's create an unforgettable dining experience together.
            </p>
            <div className="mt-8">
              <Link
                to="/booking"
                className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-primary/90 transition duration-300 transform hover:scale-105"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
