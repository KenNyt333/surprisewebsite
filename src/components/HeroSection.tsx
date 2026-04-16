import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Heart, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-peach-200 animate-gradient"></div>

      {/* <motion.button
        onClick={toggleMusic}
        className="absolute top-8 right-8 z-20 p-4 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/40 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMusicPlaying ? (
          <Volume2 className="w-6 h-6 text-pink-600" />
        ) : (
          <VolumeX className="w-6 h-6 text-pink-600" />
        )}
      </motion.button> */}

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-32 h-32 mx-auto text-pink-500 fill-pink-400 drop-shadow-2xl" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                'Happy Birthday',
                1000,
                'Happy Birthday Praloshika Bangaram ',
              ]}
              speed={30}
              cursor={false}
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-3xl md:text-4xl font-light text-pink-600 mb-8"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          To my Lucky charm
        </motion.p>

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(236, 72, 153, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-12 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xl rounded-full font-semibold shadow-xl"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Discover Your Surprise ✨
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
