import React from 'react'
import ContactForm from './contactForm';

export const metadata = {
  title: "Contact",
  description: "Reach out to InCashy for fast, reliable trucking factoring services. Our team is ready to assist you with invoice factoring, payments, and support.",
  alternates: {
    canonical: "https://www.incashy.com/contact",
  },
};

const ContactPage = () => {
  return (
    <ContactForm/>
  )
}

export default ContactPage