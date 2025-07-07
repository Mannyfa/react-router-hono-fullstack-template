import { Instagram, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-text text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="hover:text-primary transition-colors"><Instagram size={28} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Youtube size={28} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Facebook size={28} /></a>
        </div>
        <p className="text-lg">&copy; {new Date().getFullYear()} Chef's Portfolio. All Rights Reserved.</p>
        <p className="mt-2 text-lg">contact@chefsportfolio.com</p>
      </div>
    </footer>
  );
}
