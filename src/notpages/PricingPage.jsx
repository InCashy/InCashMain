import React from 'react';
import { Helmet } from 'react-helmet-async';
import PricingSection from '@/components/sections/PricingSection';

const PricingPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Pricing</title>
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

      <PricingSection displayTitle={true} showNoHiddenFeesBadge={true} />
    </div>
  );
};

export default PricingPage;