// layout.jsx
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

import './globals.css'

import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner,
} from '@c15t/nextjs';
export const metadata = {
  title: "InCashy - Simple Factoring for Small Carriers",
  description: "InCashy offers simple factoring for small carriers with fixed-rate plans, no hidden fees, and fast payouts. Upload your documents and get paid fast.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  keywords: "InCashy, factoring, freight factoring, trucking factoring, small carriers, invoice factoring, trucking financing, fast payouts, fixed rate, no hidden fees",
  authors: [{ name: "InCashy Team", url: "https://www.incashy.com" }],
  creator: "InCashy Team",
  openGraph: {
    title: "InCashy - Simple Factoring for Small Carriers",
    description: "Simple factoring with fixed rates and no hidden fees. Upload your docs and get paid fast.",
    url: "https://www.incashy.com",
    siteName: "InCashy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InCashy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InCashy - Simple Factoring for Small Carriers",
    description: "Simple factoring with fixed rates and no hidden fees. Upload your docs and get paid fast.",
    siteId: "@InCashy",
    creator: "@InCashy",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.incashy.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConsentManagerProvider
          options={{
            mode: 'c15t',
            backendURL: '/api/c15t',
            consentCategories: ['necessary', 'marketing'],
            ignoreGeoLocation: true,
          }}
        >
          <CookieBanner
          />

          <ConsentManagerDialog />
          <Header />
          {children}
          <Footer />
        </ConsentManagerProvider>
      </body>
    </html>
  )
}
