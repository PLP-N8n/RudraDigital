import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-trade-bg">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
