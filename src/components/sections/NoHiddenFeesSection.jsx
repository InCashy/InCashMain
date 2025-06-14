import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const NoHiddenFeesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-8">
            <Check className="w-5 h-5" />
            <span className="font-semibold">No Hidden Fees</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NoHiddenFeesSection;