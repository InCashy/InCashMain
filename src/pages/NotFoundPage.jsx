import React from 'react';
import { Helmet } from 'react-helmet-async';
import PricingSection from '@/components/sections/PricingSection';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="Simple, transparent pricing with no hidden fees. Pick the factoring plan that works best for your small trucking business."
        />

        <meta property="og:title" content="Pricing - In Cashy" />
        <meta
          property="og:description"
          content="Check out In Cashy’s transparent pricing — no hidden fees, just fast payouts for your freight invoices."
        />
        <meta property="og:image" content="https://www.incashy.com/og-image.png" />
        <meta property="og:url" content="https://www.incashy.com/pricing" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - In Cashy" />
        <meta
          name="twitter:description"
          content="Explore simple, honest pricing plans with In Cashy. No hidden fees — ever."
        />
        <meta name="twitter:image" content="https://www.incashy.com/og-image.png" />

        <link rel="canonical" href="/pricing" />
      </Helmet>

      <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            404 - Page Not Found
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Sorry for the inconvenience, but the page you are looking for could not be found.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/">
              <Button
                className="px-8 py-3 text-lg bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-green-600"
              >
                Go Back
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default NotFoundPage;