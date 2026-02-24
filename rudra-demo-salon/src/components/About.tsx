import { Scissors, Award, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-salon-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left — decorative placeholder */}
          <div className="md:w-1/2 w-full">
            <div className="relative aspect-[3/4] rounded-2xl bg-gradient-to-br from-salon-accent/20 to-salon-gold/15 flex flex-col items-center justify-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-salon-accent/15 rounded-full blur-2xl" />
              <div className="absolute bottom-12 left-8 w-40 h-40 bg-salon-gold/15 rounded-full blur-2xl" />
              <Scissors size={64} className="text-salon-accent/40 mb-4 relative z-10" />
              <span className="text-salon-accent/50 font-playfair text-lg font-medium relative z-10">
                Salon Photo
              </span>
            </div>
          </div>

          {/* Right — content */}
          <div className="md:w-1/2 w-full">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-salon-text mb-6">
              About Glow Hair Studio
            </h2>
            <p className="text-salon-text-muted leading-relaxed text-base mb-8">
              Founded in 2018, Glow Hair Studio has been helping the women of
              Falkirk look and feel their best. Our experienced stylists combine
              the latest techniques with a warm, welcoming atmosphere. Whether
              you're after a fresh trim, a bold new colour, or a complete
              transformation &mdash; we're here to make it happen.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-salon-accent/10 rounded-lg px-5 py-3">
                <Award size={20} className="text-salon-accent" />
                <span className="text-salon-accent font-semibold text-sm">
                  10+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-3 bg-salon-accent/10 rounded-lg px-5 py-3">
                <Users size={20} className="text-salon-accent" />
                <span className="text-salon-accent font-semibold text-sm">
                  5,000+ Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
