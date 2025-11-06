import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function FloatingHearts() {
  const hearts = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 15,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    opacity: Math.random() * 0.3 + 0.2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', x: `${heart.left}vw` }}
          animate={{
            y: '-20vh',
            x: [`${heart.left}vw`, `${heart.left + (Math.random() * 10 - 5)}vw`, `${heart.left}vw`],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ position: 'absolute' }}
        >
          <Heart
            style={{
              width: heart.size,
              height: heart.size,
              opacity: heart.opacity,
            }}
            className="text-pink-400 fill-pink-300"
          />
        </motion.div>
      ))}
    </div>
  );
}
