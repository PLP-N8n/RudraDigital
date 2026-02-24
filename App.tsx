import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Guarantee } from './components/Guarantee';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { Pricing } from './components/Pricing';
import { Portfolio } from './components/Portfolio';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen bg-rudra-bg">
      <Header />
      <main>
        <Hero />
        <Services />
        <Guarantee />
        <WhoIsThisFor />
        <Pricing />
        <Portfolio />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer
        onOpenPrivacy={() => setShowPrivacy(true)}
        onOpenTerms={() => setShowTerms(true)}
      />
      <Privacy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <Terms isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </div>
  );
}

export default App;
