import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { Pricing } from './components/Pricing';
import { Portfolio } from './components/Portfolio';
import { HowItWorks } from './components/HowItWorks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rudra-bg">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhoIsThisFor />
        <Pricing />
        <Portfolio />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
