import PricingSection from '@/components/sections/PricingSection';
import React from 'react'

export const metadata = {
  title: "Pricing",
  description: "Get pricing plans.",
};

const PricingPage = () => {
  return (
    <PricingSection displayTitle={true} showNoHiddenFeesBadge={true} />
  )
}

export default PricingPage