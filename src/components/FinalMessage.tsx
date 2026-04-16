import { motion } from 'framer-motion';
import { Heart, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalMessage() {
  const celebrate = () => {
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFB6C1', '#E6E6FA', '#FFDAB9', '#98FB98', '#B76E79'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFB6C1', '#E6E6FA', '#FFDAB9', '#98FB98', '#B76E79'],
      });
    }, 250);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-12"
        >
          <Heart className="w-32 h-32 mx-auto text-pink-500 fill-pink-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
        >
          I Love You More nd More
          <br />
          Each Day Passing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl text-pink-600 mb-12 font-light"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          You are my everything, today and always 💕
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="space-y-6"
        >
          <motion.button
            onClick={celebrate}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(236, 72, 153, 0.5)',
                '0 0 40px rgba(236, 72, 153, 0.8)',
                '0 0 20px rgba(236, 72, 153, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white text-2xl md:text-3xl rounded-full font-bold shadow-2xl flex items-center gap-4 mx-auto"
          >
            <PartyPopper className="w-8 h-8" />
            Let's Celebrate Together! 🎉
            <PartyPopper className="w-8 h-8" />
          </motion.button>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xl text-pink-500 font-semibold"
          >
            Click to make it rain confetti! 🎊
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {['Forever', 'Always', 'Infinitely', 'Endlessly'].map((word, index) => (
            <motion.div
              key={word}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 shadow-xl"
            >
              <Heart className="w-8 h-8 mx-auto mb-2 text-pink-500 fill-pink-400" />
              <p className="text-xl font-bold text-pink-600">{word}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-lg text-pink-500"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Made with ❤️ just for my wifey
        </motion.p>
      </div>
    </section>
  );
}
