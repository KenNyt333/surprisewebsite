import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';

const reasons = [
  "Your beautiful smile that lights up my world",
  "The way you laugh at my silly jokes",
  "How you make every moment magical",
  "Your kindness and caring heart",
  "The way you understand me like no one else",
  "Your amazing sense of humor",
  "How you always know how to make me feel better",
  "The sparkle in your eyes when you're happy",
  "Your incredible strength and courage",
  "The way you dance like nobody's watching",
  "Your passion for life and adventure",
  "How you make ordinary days extraordinary",
  "Your gentle touch and warm hugs",
  "The way you believe in me",
  "Your beautiful soul that shines through",
  "How you make me want to be a better person",
  "Your infectious enthusiasm",
  "The way you see beauty in everything",
  "Your unwavering support and love",
  "Simply being YOU - perfectly imperfect and absolutely amazing",
];

export default function ReasonsSection() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const handleFlip = (index: number) => {
    const newFlipped = new Set(flipped);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
      confetti({
        particleCount: 20,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFB6C1', '#E6E6FA', '#FFDAB9'],
      });
    }
    setFlipped(newFlipped);
  };

  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-peach-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Reasons Why I Love You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-2xl text-pink-600 mb-12"
        >
          {flipped.size} of {reasons.length} reasons revealed 💕
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="aspect-square cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => handleFlip(index)}
            >
              <motion.div
                animate={{ rotateY: flipped.has(index) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl shadow-xl flex items-center justify-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-center p-4">
                    <p className="text-6xl mb-2">❤️</p>
                    <p className="text-white font-bold text-lg">#{index + 1}</p>
                  </div>
                </div>

                <div
                  className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center p-4"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <p className="text-center text-sm md:text-base text-gray-700 font-medium leading-tight">
                    {reason}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-2xl text-pink-600 font-light">
            Click each card to discover why you're so special to me 💖
          </p>
        </motion.div>
      </div>
    </section>
  );
}
