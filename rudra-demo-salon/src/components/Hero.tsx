import { Phone, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-salon-accent/20 via-salon-bg to-salon-gold/10 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-salon-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-salon-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-salon-text leading-tight animate-fade-in-up">
          Beautiful Hair,
          <br />
          Effortlessly You.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-salon-text-muted max-w-xl mx-auto animate-fade-in-up-delay">
          Falkirk's home for cuts, colour &amp; styling.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <a
            href="tel:+441234567890"
            className="inline-flex items-center gap-2 bg-salon-accent hover:bg-salon-accent-hover text-white px-8 py-3 rounded-full text-base font-semibold transition-colors shadow-lg shadow-salon-accent/25"
          >
            <Phone size={18} />
            Book Now
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border-2 border-salon-accent text-salon-accent hover:bg-salon-accent hover:text-white px-8 py-3 rounded-full text-base font-semibold transition-colors"
          >
            <ArrowDown size={18} />
            See Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
