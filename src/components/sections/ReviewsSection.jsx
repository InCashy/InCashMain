import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewCard = ({ rating, title, body, reviewerName, date, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-gray-50 rounded-xl p-6"
    >
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={`filled-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{body}</p>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <p className="text-sm font-medium text-gray-900">{reviewerName}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewsSection = () => {
  const reviews = [
    { rating: 5, title: 'Amazing Service!', body: 'InCashy helped us streamline our payments. Highly recommended!', reviewerName: 'John D.', date: '2025-05-10', delay: 0.1 },
    { rating: 3, title: 'Good, but room for improvement', body: 'The service is decent, but sometimes payments are a bit slower than expected.', reviewerName: 'Jane S.', date: '2025-04-22', delay: 0.2 },
    { rating: 4, title: 'Reliable and Fast', body: 'Overall a great experience. Fast payments and good customer support.', reviewerName: 'Mike B.', date: '2025-03-15', delay: 0.3 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest reviews
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard 
              key={review.reviewerName}
              rating={review.rating}
              title={review.title}
              body={review.body}
              reviewerName={review.reviewerName}
              date={review.date}
              delay={review.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;