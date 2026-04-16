import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const quotes = [
  "She said - When the sun come out , the stars Disappear (she meant herself)",
  "Magic of more than 12 , destined to be together",
  "I will steal your love , your heart and your soul and finally your wp stickers too ",
  "Marry Me soon My babe or I will kill you",
  "In you, I've found the love of my life and my closest friend",
  "chinni gundaloo,nuvv anthey na premaloo ",
  "I choose you. And I'll choose you over and over. Without pause, without doubt, in a heartbeat. I'll keep choosing you",
  "I love you not only for what you are, but for what I am when I am with you",
  "You come like autumn and everytime I fall for you ",
  "you are like snow - beautifies whatever it covers ",
  "When i become cold ,you turn my heart warm like a mother's Womb",
];

export default function QuotesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % quotes.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Words of Love
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/40 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-white/50 min-h-[300px] flex items-center justify-center"
            >
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-6 text-pink-400 fill-pink-300" />
                <p className="text-2xl md:text-4xl font-light text-gray-700 leading-relaxed" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  "{quotes[currentIndex]}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white/50 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/70 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-pink-600" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white/50 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/70 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-pink-600" />
          </motion.button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.3 }}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-pink-500 w-8' : 'bg-pink-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
