"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavigation = (path) => {
    router.push(path);
    setMobileMenuOpen(false);
  };

  const logoUrl = "logo.png";

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src={logoUrl} alt="InCashy Logo" className="w-8 h-8 rounded-lg object-contain" />
            <span className="text-xl font-bold text-gray-900">InCashy</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {/* Add nav links here if needed */}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Link href="https://app.incashy.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Button className="justify-start bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-green-600">
                Log In
              </Button>
            </Link>

          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link href="https://app.incashy.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-green-600">
                    Log In
                  </Button>

                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
