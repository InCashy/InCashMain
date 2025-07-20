import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import PricingSection from '@/components/sections/PricingSection';
import WhatWeOfferSection from '@/components/sections/WhatWeOfferSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50">
      <Helmet>
        <title>InCashy</title>
        <meta name="description" content="InCashy offers simple factoring for small carriers with fixed-rate plans, no hidden fees, and fast payouts. Upload your documents and get paid fast." />
        <meta name="keywords" content="InCashy, factoring, freight factoring, trucking factoring, small carriers, invoice factoring, trucking financing, fast payouts, fixed rate, no hidden fees" />
        <meta name="author" content="InCashy Team" />

        <meta property="og:title" content="InCashy - Simple Factoring for Small Carriers" />
        <meta property="og:description" content="Simple factoring with fixed rates and no hidden fees. Upload your docs and get paid fast." />
        <meta property="og:image" content="https://www.incashy.com/og-image.png" />
        <meta property="og:url" content="https://www.incashy.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InCashy - Simple Factoring for Small Carriers" />
        <meta name="twitter:description" content="Simple factoring with fixed rates and no hidden fees. Upload your docs and get paid fast." />
        <meta name="twitter:image" content="https://www.incashy.com/og-image.png" />

        <link rel="canonical" href="https://www.incashy.com" />
      </Helmet>
      <HeroSection />
      <PricingSection displayTitle={false} showNoHiddenFeesBadge={true} />
      <WhatWeOfferSection />
      <HowItWorksSection />
      <ReviewsSection />
    </div>
  );
};

export default HomePage;