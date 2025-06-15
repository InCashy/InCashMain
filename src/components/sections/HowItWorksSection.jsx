import React from 'react';
import { Upload, Clock, DollarSign, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const StepCard = ({ icon, title, description, delay, isFinal = false }) => {
  const IconComponent = icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center"
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isFinal ? 'bg-gradient-to-br from-green-500 to-green-500' : 'bg-gray-100'}`}>
        <IconComponent className={`w-8 h-8 ${isFinal ? 'text-white' : 'text-gray-600'}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {!isFinal && (
        <div className="flex justify-center">
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>
      )}
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    { icon: Upload, title: 'Upload', description: 'Rate Confirmation & BOL' },
    { icon: Clock, title: 'Wait', description: 'Depending on your plan*' },
    { icon: DollarSign, title: 'Get paid', description: 'Directly in you account', isFinal: true }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Its Easy!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard 
              key={step.title} 
              icon={step.icon} 
              title={step.title} 
              description={step.description} 
              delay={(index + 1) * 0.1} 
              isFinal={step.isFinal}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500">
            Basic: 2 days, Pro: same day, Premium: Instant
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;