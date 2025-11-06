import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Cake } from 'lucide-react';
import { MdOutlineCake } from "react-icons/md";

export default function BirthdayCake() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const blowCandles = () => {
    if (candlesLit) {
      setCandlesLit(false);
      setShowMessage(true);

      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FFB6C1', '#E6E6FA', '#FFDAB9', '#98FB98'],
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#FFB6C1', '#E6E6FA', '#FFDAB9', '#98FB98'],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    } else {
      setCandlesLit(true);
      setShowMessage(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex text-5xl md:text-7xl font-bold mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Make a Wish! <MdOutlineCake className="text-pink-400 drop-shadow-[0_0_10px_rgba(255,192,203,0.6)] text-6xl md:text-7xl animate-pulse" />
        </motion.h2>

        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <Cake className="w-64 h-64 text-pink-400 fill-pink-300 mx-auto" />

              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    animate={candlesLit ? {
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  >
                    <div className="w-2 h-12 bg-white rounded-full"></div>
                    <AnimatePresence>
                      {candlesLit && (
                        <motion.div
                          initial={{ scale: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute -top-4 left-1/2 -translate-x-1/2"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [1, 0.8, 1],
                            }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="w-4 h-6 bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-200 rounded-full blur-sm"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {!candlesLit && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`smoke-${i}`}
                      initial={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 0, y: -50 }}
                      transition={{ duration: 2 }}
                      className="absolute"
                      style={{
                        top: '-20px',
                        left: `${30 + i * 15}%`,
                      }}
                    >
                      <div className="w-2 h-8 bg-gray-400/50 rounded-full blur-md"></div>
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          </div>
        </motion.div>

        <motion.button
          onClick={blowCandles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: candlesLit
              ? ['0 0 20px rgba(236, 72, 153, 0.5)', '0 0 40px rgba(236, 72, 153, 0.8)', '0 0 20px rgba(236, 72, 153, 0.5)']
              : '0 0 0px rgba(236, 72, 153, 0)',
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-12 px-12 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xl rounded-full font-semibold shadow-xl"
        >
          {candlesLit ? '🌬️ Click to Blow Candles' : '🔥 Light Candles Again'}
        </motion.button>

        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mt-12 bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
            >
              <p className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                🎉 Happy Birthday! 🎉
              </p>
              <p className="text-xl text-gray-700">
                Your Dreams Wishes and Love,everything comes True , im always with you! ✨💕
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
