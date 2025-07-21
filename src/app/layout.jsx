import Footer from '@/components/layout/Footer'
import './globals.css'
import Header from '@/components/layout/Header'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}