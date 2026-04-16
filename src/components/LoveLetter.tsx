import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MailOpen } from 'lucide-react';
import { SiTinyletter } from "react-icons/si";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-peach-100 via-pink-100 to-purple-100"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" flex text-5xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          A Letter For You <SiTinyletter className="text-pink-400 drop-shadow-[0_0_10px_rgba(255,192,203,0.6)] text-6xl md:text-7xl animate-pulse" />
        </motion.h2>

        <div className="flex justify-center">
          {!isOpen ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
            >
              <div className="relative">
                <div className="w-80 h-56 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg shadow-2xl flex items-center justify-center">
                  <Mail className="w-32 h-32 text-white" />
                </div>
                <motion.p
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center mt-6 text-xl text-pink-600 font-semibold"
                >
                  Click to open 💕
                </motion.p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full max-w-3xl"
            >
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-amber-200 relative">
                <div className="absolute top-4 right-4">
                  <MailOpen className="w-8 h-8 text-pink-400" />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6 text-gray-700"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  <p className="text-2xl md:text-3xl leading-relaxed">
                    My Chella Kutty,
                  </p>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl leading-relaxed"
                  >
                    First time i seen you in my childhood still remember like yesterday, cute momo laga unnavu chinnadhiga, that time we were going in a car is my first memory together with you. 
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-xl md:text-2xl leading-relaxed"
                  >
                    almost more than 12 years later idk how fast time flies, i have gone through many phases in my life always fallen in a pit or no where to feel a comfort like from my mom... YOU came in to my life on 28th dec 2024 in prem chinnaina's home insta lo request came and i initiated talk, we introduced eachother and bit by bit we went on and on and stopped and gave a long gap until we talked like 5months before!   
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="text-xl md:text-2xl leading-relaxed"
                  >
                    This is your special day praloo , neethoo nenuuu epudume untaa , i will be first person to feel proud about you , i will be the first person to clap for you , lets build a big future together and live life as we planned .
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="text-xl md:text-2xl leading-relaxed"
                  >
                    Happy Birthday, my bangaram , my thangoo🧈 , my vairoo💎 , my bujji , my chelooo , my wifeyy , my gunnuu , my pondattii , my papa , my everything🫂 .
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                    className="text-2xl md:text-3xl text-right pt-6"
                  >
                    Forever yours, ❤️<br />
                    <span className="text-pink-600 font-bold">Your Bino</span>
                  </motion.p>
                </motion.div>

                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-pink-300 rounded-full blur-2xl opacity-50"></div>
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-300 rounded-full blur-2xl opacity-50"></div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
