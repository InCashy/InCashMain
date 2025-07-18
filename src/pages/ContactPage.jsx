import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async'; // ✅ FIXED

const ContactPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  useEffect(() => {
    emailjs.init('zEYJuyKXun7c-AHgC');
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_xbkkvv9',
        'template_lq99jih',
        templateParams
      );

      toast({
        title: 'Message Sent! 🎉',
        description: 'Thanks for reaching out! Your message was sent successfully.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.text || 'Try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50 py-16 md:py-24">
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="We're a startup and this product is still in development. If you have any questions or feedback, feel free to reach out to us."
        />
        <meta property="og:title" content="Contact | InCashy" />
        <meta
          property="og:description"
          content="We're a startup and this product is still in development. If you have any questions or feedback, feel free to reach out to us."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://incashy.com/contact" />
        <meta property="og:image" content="https://incashy.com/og-image.png" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a startup, this product is still in development. If you have any questions, feedback, or just want to say hello, feel free to reach out to us using the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">Email Us</p>
                  <a href="mailto:support@incashy.com" className="text-green-600 hover:text-green-700">angeldomlu@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">Call Us</p>
                  <p className="text-gray-600">No Phone Available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">Our Office</p>
                  <p className="text-gray-600">123 Trucker Lane, Suite 456<br />Roadway City, RC 78901</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>

            <div>
              <Label htmlFor="name" className="text-gray-700">Full Name</Label>
              <Input type="text" id="name" required value={formData.name} onChange={handleChange} disabled={isSubmitting} />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700">Email Address</Label>
              <Input type="email" id="email" required value={formData.email} onChange={handleChange} disabled={isSubmitting} />
            </div>

            <div>
              <Label htmlFor="subject" className="text-gray-700">Subject</Label>
              <Input type="text" id="subject" required value={formData.subject} onChange={handleChange} disabled={isSubmitting} />
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700">Message</Label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
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
