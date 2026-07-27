import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Facebook, Mail } from 'lucide-react';

export default function BadWeather() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#3D2B1F] relative overflow-hidden">
      {/* Rain Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(50)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-0.5 h-4 bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: -20
          }}
          animate={{
            y: [0, 800],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }} />

        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16">

          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">Weather Policy</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#F5E6C8] mt-4">
            In Case of Bad Weather
          </h2>
          <p className="text-[#8B7355] text-lg mt-4 max-w-2xl mx-auto">In the case of inclement weather or heat advisory we will adapt our schedule to maintain camper safety at all times!

          </p>
        </motion.div>

        {/* Updates Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-[#2D5A3D] rounded-2xl p-8 text-center max-w-2xl mx-auto">

          <h3 className="font-display text-2xl text-white mb-4">Stay Updated!</h3>
          <p className="text-white/80 mb-6">Check for daily updates on weather and schedule changes:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=sandlotdublin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full text-white hover:bg-white/20 transition-colors">

              <Mail className="w-5 h-5" />
              <span>sandlotdublin@gmail.com</span>
            </a>
            <a
              href="https://www.facebook.com/groups/1429560348060815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full text-white hover:bg-white/20 transition-colors">

              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}