import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check, X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const PricingCard = ({ plan, delay, isPro = false }) => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      variants={fadeUpVariant}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
      className={`pricing-card rounded-2xl p-8 border flex flex-col ${
        isPro ? 'bg-gray-900 border-gray-800 relative' : 'bg-white border-gray-200'
      }`}
    >
      <h3 className={`text-xl font-semibold mb-4 ${isPro ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
      <div className="mb-6 text-center">
        <span className={`text-4xl font-bold ${isPro ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
        <span className={`${isPro ? 'text-gray-300' : 'text-gray-600'} ml-1`}>/load</span>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {plan.items.map((item, index) => {
          const { type, text } = item;
          let icon = null;
          let textColor = '';

          if (type === 'feature') {
            icon = <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />;
            textColor = isPro ? 'text-gray-300' : 'text-gray-600';
          } else if (type === 'con') {
            icon = <X className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />;
            textColor = isPro ? 'text-red-400' : 'text-red-600';
          } else if (type === 'neutral') {
            icon = <Minus className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />;
            textColor = isPro ? 'text-gray-400' : 'text-gray-500';
          }

          return (
            <li key={index} className={`flex items-center text-sm ${textColor}`}>
              {icon}
              {text}
            </li>
          );
        })}
      </ul>

      <Button
        variant={isPro ? 'default' : 'outline'}
        className={`w-full ${
          isPro
            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
            : 'bg-gray-800 text-white hover:bg-gray-700 hover:text-white border-gray-800'
        }`}
        onClick={() => (window.location.href = 'https://app.incashy.com')}
      >
        Join as {plan.name}
      </Button>
    </motion.div>
  );
};

const NoHiddenFeesBadge = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    variants={fadeUpVariant}
    style={{
      willChange: 'transform, opacity',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
    }}
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
      items: [
        { type: 'neutral', text: '72hrs pay' },
        { type: 'con', text: 'Recourse' },
        { type: 'neutral', text: '$25 Fee minimum per invoice' },
        { type: 'con', text: 'No invoice creator' },
        { type: 'feature', text: 'Customer support' },

      ],
    },
    {
      name: 'Pro',
      price: '%3',
      items: [
        { type: 'neutral', text: '48hrs pay' },
        { type: 'feature', text: 'Non-Recourse' },
        { type: 'neutral', text: '$10 Fee minimum per invoice' },
        { type: 'feature', text: 'Invoice creator' },
        { type: 'feature', text: 'Customer support' },
      ],
      isPro: true,
    },
    {
      name: 'Premium',
      price: '%4',
      items: [
        { type: 'feature', text: 'Same day pay' },
        { type: 'feature', text: 'Non-Recourse' },
        { type: 'feature', text: '$100 Fee maximum per invoice' },
        { type: 'feature', text: 'Invoice auto-creator' },
        { type: 'feature', text: 'Customer support' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {displayTitle && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            variants={fadeUpVariant}
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
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
            <PricingCard key={plan.name} plan={plan} delay={index * 0.15} isPro={plan.isPro} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
