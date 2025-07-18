import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // ✅ INIT emailjs once when component mounts
  useEffect(() => {
    emailjs.init('zEYJuyKXun7c-AHgC'); // <-- this is your public key
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
      const result = await emailjs.send(
        'service_xbkkvv9',      // ✅ your service ID
        'template_lq99jih',     // ✅ your template ID
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
          content="Questions or feedback? — we’re here to support small carriers with simple, fast factoring solutions."
        />

        <meta property="og:title" content="Contact - In Cashy" />
        <meta
          property="og:description"
          content="Reach out to In Cashy — we're here to help small carriers with invoice factoring and support."
        />
        <meta property="og:image" content="https://www.incashy.com/og-image.png" />
        <meta property="og:url" content="https://www.incashy.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact - In Cashy" />
        <meta
          name="twitter:description"
          content="Questions or feedback? Contact In Cashy — we’re here to help small carriers get paid fast with no hidden fees."
        />
        <meta name="twitter:image" content="https://www.incashy.com/og-image.png" />

        <link rel="canonical" href="https://www.incashy.com/contact" />
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
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">Email Us</p>
                  <a href="mailto:support@incashy.com" className="text-green-600 hover:text-green-700 transition-colors">angeldomlu@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">Call Us</p>
                  <a href="tel:+1234567890" className="text-green-600 hover:text-green-700 transition-colors">No Phone Available</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">Our Office</p>
                  <p className="text-gray-600">123 Trucker Lane, Suite 456<br />Roadway City, RC 78901</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            <div>
              <Label htmlFor="name" className="text-gray-700">Full Name</Label>
              <Input type="text" id="name" placeholder="John Doe" className="mt-1" required value={formData.name} onChange={handleChange} disabled={isSubmitting} />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700">Email Address</Label>
              <Input type="email" id="email" placeholder="you@example.com" className="mt-1" required value={formData.email} onChange={handleChange} disabled={isSubmitting} />
            </div>
            <div>
              <Label htmlFor="subject" className="text-gray-700">Subject</Label>
              <Input type="text" id="subject" placeholder="Question about pricing" className="mt-1" required value={formData.subject} onChange={handleChange} disabled={isSubmitting} />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-700">Message</Label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message here..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              ></textarea>
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
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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
