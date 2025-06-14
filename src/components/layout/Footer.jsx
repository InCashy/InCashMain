import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { DollarSign, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">InCashy</span>
          </div>

          <div className="flex space-x-4">
            <button onClick={showToast} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button onClick={showToast} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Instagram className="w-5 h-5" />
            </button>
            <button onClick={showToast} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Youtube className="w-5 h-5" />
            </button>
            <button onClick={showToast} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;