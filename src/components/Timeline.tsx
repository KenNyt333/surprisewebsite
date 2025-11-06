import { motion } from 'framer-motion';
import { Heart, Plane, Camera, Coffee, Star, Gift, Home, Sparkles } from 'lucide-react';

const milestones = [
  { date: 'March 25 2023', event: 'The day we first met - VR Mall', icon: Heart, color: 'from-pink-400 to-rose-400' },
  { date: 'First Date - May 6 2023', event: 'Neraya Pechu Konjam Kissu ', icon: Coffee, color: 'from-purple-400 to-pink-400' },
  { date: 'May 6 2023', event: 'shuu adellam ragasiyam kissu', icon: Sparkles, color: 'from-blue-400 to-purple-400' },
  { date: 'June 1 2023', event: 'Internship Days ', icon: Plane, color: 'from-teal-400 to-blue-400' },
  { date: 'June 8 2023', event: 'Unforgettable Bike Ride', icon: Star, color: 'from-green-400 to-teal-400' },
  { date: 'Oct 19 2023', event: 'Temple and Church Date', icon: Camera, color: 'from-yellow-400 to-green-400' },
  { date: 'Dec 22 2023', event: 'First Movie in Tears - Mayakkam Enna', icon: Home, color: 'from-orange-400 to-yellow-400' },
  { date: 'Jan 30 2024', event: 'First Time en anna veetuku vantha ', icon: Gift, color: 'from-red-400 to-orange-400' },
   { date: 'July 17 2023', event: 'Met at Apartment - Romantic Date shu shu', icon: Camera, color: 'from-yellow-400 to-green-400' }
];

export default function Timeline() {
  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-peach-100"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Our Journey Together ✨
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 transform md:-translate-x-1/2"></div>

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12 pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50"
                  >
                    <h3 className="text-2xl font-bold text-pink-600 mb-2">{milestone.date}</h3>
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-pink-300 opacity-30"
                  ></motion.div>
                </motion.div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
