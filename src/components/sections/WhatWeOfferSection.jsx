import React from 'react';
import { motion } from 'framer-motion';

const WhatWeOfferSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fast, Reliable Payments for Truckers
            </p>
            <div className="space-y-4 text-gray-600">
              <p>
                Tired of chasing down invoices and waiting weeks to get paid? 
                We're a factoring company built to take that burden off your 
                shoulders.
              </p>
              <p>
                Our goal is simple: make getting paid as easy and fast as 
                possible, so you can focus on the road—not paperwork.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img  
              alt="Truck with money and checkmark illustration"
              className="w-80 h-64 object-contain"
             src="https://storage.googleapis.com/hostinger-horizons-assets-prod/3617ea5a-eae1-45eb-99f3-be8cf107e035/4c18c59904e4cfc8b9fd73473613ed04.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;