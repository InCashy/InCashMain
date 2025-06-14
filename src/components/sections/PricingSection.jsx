import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PricingCard = ({ plan, delay, isPro = false }) => {
  const { toast } = useToast();
  const showToast = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`pricing-card rounded-2xl p-8 border flex flex-col ${isPro ? 'bg-gray-900 border-gray-800 relative' : 'bg-white border-gray-200'}`}
    >
      <h3 className={`text-xl font-semibold mb-4 ${isPro ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
      <div className="mb-6 text-center">
        <span className={`text-4xl font-bold ${isPro ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
        <span className={`${isPro ? 'text-gray-300' : 'text-gray-600'} ml-1`}>/load</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className={`flex items-center text-sm ${isPro ? 'text-gray-300' : 'text-gray-600'}`}>
            <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link to="/register" className="w-full mt-auto">
        <Button 
          variant={isPro ? "default" : "outline"} 
          className={`w-full ${isPro ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' : 'bg-gray-800 text-white hover:bg-gray-700 hover:text-white border-gray-800'}`}
        >
          Join as {plan.name}
        </Button>
      </Link>
    </motion.div>
  );
};

const NoHiddenFeesBadge = () => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
      <Check className="w-5 h-5" />
      <span className="font-semibold">No Hidden Fees</span>
    </div>
  </motion.div>
);

const PricingSection = ({ displayTitle = true, showNoHiddenFeesBadge = true }) => {
  const plans = [
    { 
      name: 'Basic', 
      price: '%2', 
      features: ['Two days pay', 'No Broker Alerts', 'Customer Support', 'Recourse', 'We Charge $25 Minimum']
    },
    { 
      name: 'Pro', 
      price: '%3', 
      features: ['Same day pay', 'Broker Alerts', 'Customer Support', 'Non-Recourse', 'We Charge $10 Minimum'],
      isPro: true
    },
    { 
      name: 'Premium', 
      price: '%5', 
      features: ['Instant pay', 'Broker Alerts', 'Customer Support', 'Non-Recourse', 'No Minimum Always 5%', 'We Charge $100 Max', 'High Priority']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {displayTitle && (
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12" 
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your trucking business needs. No hidden fees, transparent pricing.
            </p>
          </motion.div>
        )}
        {showNoHiddenFeesBadge && <NoHiddenFeesBadge />}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} delay={(index + 1) * 0.1} isPro={plan.isPro} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;