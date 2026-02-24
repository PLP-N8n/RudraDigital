import { Star } from 'lucide-react';

interface Review {
  text: string;
  name: string;
}

const reviews: Review[] = [
  {
    text: 'Best haircut I\'ve had in years! Sarah really listens to what you want and the salon is so relaxing.',
    name: 'Emma R.',
  },
  {
    text: 'I\'ve been coming here for my colour for 3 years now. Wouldn\'t trust anyone else with my highlights.',
    name: 'Lucy M.',
  },
  {
    text: 'Went in for a trim and came out feeling like a new person. The team are so friendly and talented.',
    name: 'Karen T.',
  },
  {
    text: 'Booked a bridal trial and it was perfect first time. Made my wedding day stress-free!',
    name: 'Sophie W.',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className="text-salon-gold fill-salon-gold"
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-salon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-salon-text">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-salon-gold"
            >
              <Stars />
              <p className="text-salon-text leading-relaxed mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-salon-text-muted font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
