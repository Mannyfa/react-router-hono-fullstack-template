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
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Chef's Portfolio
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link key={link.href} to={link.href} className="text-gray-600 hover:text-gray-900">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}