import PricingSection from '@/components/sections/PricingSection';
import React from 'react'

export const metadata = {
  title: "Pricing",
  description: "Explore InCashy’s transparent and affordable pricing plans designed for small carriers. Choose the best factoring solution to fit your business needs.",
  alternates: {
    canonical: "https://www.incashy.com/pricing",
  },
};

const PricingPage = () => {
  return (
    <PricingSection displayTitle={true} showNoHiddenFeesBadge={true} />
  )
}

export default PricingPage