import { motion } from 'framer-motion';
import { Sparkles as SparklesIcon } from 'lucide-react';

export default function Sparkles() {
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 8,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{
            position: 'absolute',
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
          }}
        >
          <SparklesIcon
            style={{ width: sparkle.size, height: sparkle.size }}
            className="text-yellow-300 fill-yellow-200"
          />
        </motion.div>
      ))}
    </div>
  );
}
