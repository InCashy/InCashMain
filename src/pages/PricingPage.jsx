import React from 'react';
import { Helmet } from 'react-helmet-async';
import PricingSection from '@/components/sections/PricingSection';

const PricingPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Pricing</title>
        <meta name="description" content="Transparent pricing with no hidden fees. Choose the plan that fits your needs." />
        <meta property="og:title" content="Pricing" />
        <meta property="og:description" content="Transparent pricing with no hidden fees. Choose the plan that fits your needs." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <PricingSection displayTitle={true} showNoHiddenFeesBadge={true} />
    </div>
  );
};

export default PricingPage;
