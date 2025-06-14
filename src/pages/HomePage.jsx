import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import PricingSection from '@/components/sections/PricingSection';
import WhatWeOfferSection from '@/components/sections/WhatWeOfferSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ReviewsSection from '@/components/sections/ReviewsSection';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50">
      <HeroSection />
      <PricingSection displayTitle={false} showNoHiddenFeesBadge={true} />
      <WhatWeOfferSection />
      <HowItWorksSection />
      <ReviewsSection />
    </div>
  );
};

export default HomePage;