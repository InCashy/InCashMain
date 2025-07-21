"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link  from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Haul. We <span className="gradient-text">Pay</span> You, Now
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Get Paid Fast Using InCashy
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/pricing">
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-100"
              >
                Learn more
              </Button>
            </Link>
            <Button
                className="px-8 py-3 text-lg bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-green-600"
                onClick={() => window.location.href = 'https://app.incashy.com'}
              >
                Join now
              </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="truck-container flex justify-center"
          >
            <div className="truck-3d relative">
              <img  
                alt="3D truck with dollar signs illustration"
                className="w-[28rem] h-auto md:w-[36rem] lg:w-[42rem] object-contain"
               src="https://storage.googleapis.com/hostinger-horizons-assets-prod/3617ea5a-eae1-45eb-99f3-be8cf107e035/3467ad06164202ef5e0a0965feb3f957.png" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;