import { Instagram, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-400"><Instagram /></a>
          <a href="#" className="hover:text-gray-400"><Youtube /></a>
          <a href="#" className="hover:text-gray-400"><Facebook /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Chef Name. All Rights Reserved.</p>
        <p>contact@yourchef.com</p>
      </div>
    </footer>
  );
}