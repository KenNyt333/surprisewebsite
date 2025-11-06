import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import FloatingHearts from './components/FloatingHearts';
import Sparkles from './components/Sparkles';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import QuotesCarousel from './components/QuotesCarousel';
import PhotoGallery from './components/PhotoGallery';
import ReasonsSection from './components/ReasonsSection';
import BirthdayCake from './components/BirthdayCake';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import FinalMessage from './components/FinalMessage';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative overflow-hidden">
          <ScrollProgress />
          <FloatingHearts />
          <Sparkles />
          <BackToTop />

          <HeroSection />
          <CountdownSection />
          <QuotesCarousel />
          <PhotoGallery />
          {/* <ReasonsSection /> */}
          <BirthdayCake />
          <LoveLetter />
          <Timeline />
          <FinalMessage />
        </div>
      )}
    </>
  );
}

export default App;
