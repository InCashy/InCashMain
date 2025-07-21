"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init('zEYJuyKXun7c-AHgC'); // Replace with your actual public key
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send('service_xbkkvv9', 'template_lq99jih', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a startup, this product is still in development. If you have any questions, feedback, or just want to say hello, feel free to reach out to us using the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            {[
              {
                icon: <Mail className="w-5 h-5 text-green-600" />,
                title: 'Email Us',
                content: (
                  <a href="mailto:support@incashy.com" className="text-green-600 hover:text-green-700 transition-colors">
                    angeldomlu@gmail.com
                  </a>
                ),
              },
              {
                icon: <Phone className="w-5 h-5 text-green-600" />,
                title: 'Call Us',
                content: (
                  <span className="text-gray-500 italic">No Phone Available</span>
                ),
              },
              {
                icon: <MapPin className="w-5 h-5 text-green-600" />,
                title: 'Our Office',
                content: (
                  <p className="text-gray-600">
                    123 Trucker Lane, Suite 456<br />
                    Roadway City, RC 78901
                  </p>
                ),
              },
            ].map(({ icon, title, content }, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">{title}</p>
                  {content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>

            {['name', 'email', 'subject'].map((field) => (
              <div key={field}>
                <Label htmlFor={field} className="text-gray-700">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Label>
                <Input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  placeholder={
                    field === 'name' ? 'John Doe' :
                    field === 'email' ? 'you@example.com' :
                    'Question about pricing'
                  }
                  className="mt-1"
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            ))}

            <div>
              <Label htmlFor="message" className="text-gray-700">Message</Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message here..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-green-600 py-3 text-base flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
