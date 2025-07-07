import { Blog, type BlogPostPreviewType } from "../components/Blog";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useQuery } from "@tanstack/react-query";

const fetchRecentBlogPosts = async (): Promise<BlogPostPreviewType[]> => {
  const res = await fetch('/api/blog?limit=10'); // Assuming your API can handle a limit
  if (!res.ok) throw new Error('Failed to fetch blog posts');
  return res.json();
};

export default function BlogPage() {
  const { data: blogPosts } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: fetchRecentBlogPosts,
  });

  return (
    <>
      <Header />
      {blogPosts && <Blog posts={blogPosts} />}
      <Footer />
    </>
  );
}
