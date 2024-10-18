"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">iameric</Link>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-6 items-center mr-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About Eric</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
                {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              </Button>
            )}
            <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <button onClick={() => handleNavClick('/')} className="text-left hover:text-primary transition-colors">Home</button>
            <button onClick={() => handleNavClick('/about')} className="text-left hover:text-primary transition-colors">About Eric</button>
            <button onClick={() => handleNavClick('/blog')} className="text-left hover:text-primary transition-colors">Blog</button>
            <button onClick={() => handleNavClick('/gallery')} className="text-left hover:text-primary transition-colors">Gallery</button>
            <button onClick={() => handleNavClick('/contact')} className="text-left hover:text-primary transition-colors">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;