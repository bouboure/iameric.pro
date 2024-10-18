import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 iameric. All rights reserved.</p>
          </div>
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </nav>
          <div className="flex space-x-6">
            <a href="https://tiktok.com/@iameric" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TikTok</a>
            <a href="https://instagram.com/iameric" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <a href="https://youtube.com/iameric" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;