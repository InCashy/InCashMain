import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import WhatWeOfferSection from "@/components/sections/WhatWeOfferSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export const metadata = {
  title: "InCashy - Simple Factoring for Small Carriers",
  description: "InCashy offers simple factoring for small carriers with fixed-rate plans, no hidden fees, and fast payouts. Upload your documents and get paid fast.",
  keywords: "InCashy, factoring, freight factoring, trucking factoring, small carriers, invoice factoring, trucking financing, fast payouts, fixed rate, no hidden fees",
  authors: [{ name: "InCashy Team" }],
  openGraph: {
    title: "InCashy - Simple Factoring for Small Carriers",
    description: "Simple factoring with fixed rates and no hidden fees. Upload your docs and get paid fast.",
    url: "https://www.incashy.com",
    siteName: "InCashy",
    images: [
      {
        url: "https://www.incashy.com/og-image.png",
        alt: "InCashy factoring service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InCashy - Simple Factoring for Small Carriers",
    description: "Simple factoring with fixed rates and no hidden fees. Upload your docs and get paid fast.",
    images: ["https://www.incashy.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.incashy.com",
  }
};

export default function HomePage() {
  return (
    <>
      {/* Uncomment these when ready */}
      <HeroSection />
      <PricingSection displayTitle={false} showNoHiddenFeesBadge={true} /> 
      <WhatWeOfferSection />
      <HowItWorksSection /> 
      <ReviewsSection />
    </>
  );
}
