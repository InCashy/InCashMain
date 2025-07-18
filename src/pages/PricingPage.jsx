import React from 'react';
import PricingSection from '@/components/sections/PricingSection';

const PricingPage = () => {
  return (
    <div className="bg-white">
      <PricingSection displayTitle={true} showNoHiddenFeesBadge={true} />
    </div>
  );
};

export default PricingPage;