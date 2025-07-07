import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export function Header() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/booking', label: 'Book a Service' },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="text-3xl font-bold text-primary font-serif">
          Chef's Portfolio
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link key={link.href} to={link.href} className="text-text hover:text-primary transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button className="text-text hover:text-primary">
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </nav>
    </header>
  );
}
