"use client";
import React from 'react';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Zoom, ToastContainer, toast } from 'react-toastify';

const Footer = () => {

   const noFeature = () => toast.warning("This feature isn't implemented but don't worry! We're working on it! 🚀");

  const logoUrl =
    "logo.png";

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <ToastContainer 
        autoClose={2000}
        position="bottom-right"
        theme="colored"
        transition={Zoom}
        />
      <div className="max-w-7xl mx-auto flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between md:items-start">
        {/* Logo + Name */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3">
            <img src={logoUrl} alt="InCashy Logo" className="w-10 h-10 rounded-lg object-contain" />
            <span className="text-2xl font-semibold tracking-tight">InCashy</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
            Powering fast, secure freight factoring for today's carriers.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Legal</h4>
          <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="/cookies-policy" className="text-gray-400 hover:text-white transition">
            Cookies Policy
          </a>
          <a href="/privacy-policy" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Follow Us</h4>
          <div className="flex space-x-3">
            <button onClick={noFeature} className="p-2 rounded-md hover:bg-gray-800 transition">
              <Twitter className="w-5 h-5 text-white" />
            </button>
            <button onClick={noFeature} className="p-2 rounded-md hover:bg-gray-800 transition">
              <Instagram className="w-5 h-5 text-white" />
            </button>
            <button onClick={noFeature} className="p-2 rounded-md hover:bg-gray-800 transition">
              <Youtube className="w-5 h-5 text-white" />
            </button>
            <button onClick={noFeature} className="p-2 rounded-md hover:bg-gray-800 transition">
              <Linkedin className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider and Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} InCashy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
