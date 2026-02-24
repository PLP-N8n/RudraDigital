import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Fixed our boiler same day we called. Professional, fair price, cleaned up after. Highly recommend.',
    name: 'James M.',
  },
  {
    text: 'Had a full bathroom refit done. The quality of work was outstanding and they finished ahead of schedule.',
    name: 'Sarah K.',
  },
  {
    text: 'Emergency leak at 11pm on a Sunday \u2014 they were here within 40 minutes. Absolute lifesavers.',
    name: 'David T.',
  },
  {
    text: "Best plumber we've used in 20 years. Honest pricing, great communication, and proper Gas Safe certificates.",
    name: 'Margaret H.',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-trade-orange fill-trade-orange" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-trade-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-trade-navy text-center mb-14">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-trade-orange"
            >
              <Stars />
              <p className="text-trade-text leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-trade-text-muted font-medium text-sm">
                &mdash; {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
