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

  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/3617ea5a-eae1-45eb-99f3-be8cf107e035/eaf51401e2e4157b5a48dfe673a32850.png";
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <img src={logoUrl} alt="InCashy Logo" className="w-8 h-8 rounded-lg object-contain" />
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