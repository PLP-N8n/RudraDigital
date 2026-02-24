import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Glow Hair Studio',
    description:
      'A warm, elegant website for a women\'s hair salon — mobile-first with online booking, services & pricing, client reviews, and click-to-call.',
    tags: ['Responsive', 'Booking-Ready', 'Local SEO'],
    url: 'https://salon-demo.rudradigital.uk/',
    domain: 'salon-demo.rudradigital.uk',
    video: '/HairDresser.mp4',
  },
  {
    name: 'CentralFlow Plumbing',
    description:
      'A professional, trust-building website for a local plumber — featuring 24/7 emergency callout, Gas Safe credentials, free quote form, and click-to-call.',
    tags: ['Responsive', 'Click-to-Call', 'Trust Signals'],
    url: 'https://trades-demo.rudradigital.uk/',
    domain: 'trades-demo.rudradigital.uk',
    video: '/Plumber.mp4',
  },
  {
    name: 'Pure Living Pro',
    description:
      'A sleek website for a professional cleaning company, showcasing services, pricing, and easy booking with a fresh, modern aesthetic.',
    tags: ['Responsive', 'Booking Integration', 'Modern'],
    url: 'https://www.purelivingpro.co.uk/',
    domain: 'purelivingpro.co.uk',
    video: '/PLP.mp4',
  },
  {
    name: 'Global Telecom',
    description:
      'A corporate website for a telecoms provider — clean layout with service breakdowns, coverage areas, and business enquiry forms.',
    tags: ['Corporate', 'Responsive', 'Multi-Page'],
    url: 'https://www.globaltelecom.co.uk/',
    domain: 'globaltelecom.co.uk',
    video: '/Global_Telecom.mp4',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-rudra-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-rudra-accent font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-rudra-text sm:text-4xl">
            Our Work
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-rudra-text-muted">
            Real results for real businesses. Here's what we've built.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="bg-white rounded-2xl border border-rudra-text/10 shadow-sm overflow-hidden animate-fadeSlideIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Browser mockup with video preview */}
              <div className="bg-rudra-bg-secondary border-b border-rudra-text/10">
                <div className="flex items-center gap-2 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rudra-text/20"></div>
                    <div className="w-3 h-3 rounded-full bg-rudra-text/20"></div>
                    <div className="w-3 h-3 rounded-full bg-rudra-text/20"></div>
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-rudra-text-muted border border-rudra-text/10 max-w-xs">
                      {project.domain}
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-rudra-bg overflow-hidden">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-top"
                    aria-label={`Preview of ${project.name} website`}
                  />
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-rudra-text">{project.name}</h3>
                <p className="mt-2 text-base text-rudra-text-muted">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-rudra-accent/10 px-3 py-1 text-sm font-medium text-rudra-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-rudra-accent text-white rounded-lg hover:bg-rudra-accent-hover transition-colors text-sm font-medium"
                >
                  View Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
