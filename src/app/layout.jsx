// layout.jsx
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

import './globals.css'

import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner,
} from '@c15t/nextjs';

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
