import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwU7cBRptnSNZqKByij_DQkI86JDEg5uHyhDWmSne4DQ3FR0RVuz4RyMQtf6huJECLt/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();

    if (result.result === 'success') {
      toast({
        title: 'Message Sent! 🎉',
        description: 'Thanks for reaching out! Your message is safely in our sheets.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      throw new Error(result.error || 'Failed to send');
    }
  } catch (error) {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: error.message || 'Try again later.',
    });
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're are a startup, this product is still in development. If you have any questions, feedback, or just want to say hello, feel free to reach out to us using the form below.
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
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-3 text-base flex items-center justify-center"
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