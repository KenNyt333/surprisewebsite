import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

export default function CountdownSection() {
  const targetDate = new Date('2025-11-08T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setIsBirthday(true);
        clearInterval(interval);

        const duration = 5000;
        const end = Date.now() + duration;

        const frame = () => {
          confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#FFB6C1', '#E6E6FA', '#FFDAB9', '#B76E79'],
            shapes: ['circle', 'square'],
          });
          confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#FFB6C1', '#E6E6FA', '#FFDAB9', '#B76E79'],
            shapes: ['circle', 'square'],
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        };
        frame();
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="relative"
    >
      <motion.div
        key={value}
        initial={{ rotateX: 0 }}
        animate={{ rotateX: 360 }}
        transition={{ duration: 0.6 }}
        className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/50"
      >
        <div className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent">
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-sm md:text-lg text-pink-600 font-semibold mt-2 uppercase tracking-wider">
          {label}
        </div>
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-3 -right-3"
      >
        <Heart className="w-6 h-6 text-pink-400 fill-pink-300" />
      </motion.div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-peach-100"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          {isBirthday ? "It's Your Special Day! 🎂🎉" : "Countdown to Your Special Day"}
        </motion.h2>

        {isBirthday ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-6xl font-bold text-pink-500 mb-8"
          >
            🎉 Happy Birthday Beautiful! 🎉
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            <TimeCard value={timeLeft.days} label="Days" />
            <TimeCard value={timeLeft.hours} label="Hours" />
            <TimeCard value={timeLeft.minutes} label="Minutes" />
            <TimeCard value={timeLeft.seconds} label="Seconds" />
          </div>
        )}

        <motion.p
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl md:text-3xl text-pink-600 font-light"
        >
          {isBirthday ? "Let the celebration begin! 💕" : " few more time to go  💖"}
        </motion.p>
      </div>
    </section>
  );
}
