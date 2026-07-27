import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Anchor, Clock, DollarSign, Calendar } from 'lucide-react';

export default function ScubaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[#1a3a4a] to-[#0d2636] relative overflow-hidden">
      {/* Bubbles Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 md:w-4 md:h-4 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: -20,
            }}
            animate={{
              y: [-20, -800],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/ee067ccd5_IMG_0858.jpg"
                alt="Scuba diving"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-[#1a3a4a] text-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="font-display text-3xl">$50</div>
                <div className="text-sm opacity-80">per session</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-[#1a3a4a] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Anchor className="w-4 h-4" />
              Special Add-On
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Sandlot Scuba
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Want to learn how to scuba dive? Sandlot Scuba is a fun, innovative program that 
              shows campers the joys of scuba diving! This introductory course is perfect for 
              first-time divers.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <Clock className="w-7 h-7 text-[#F5E6C8] mb-3" />
                <div className="text-white font-bold">90 Minutes</div>
                <div className="text-white/60 text-sm">Course duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <DollarSign className="w-7 h-7 text-[#F5E6C8] mb-3" />
                <div className="text-white font-bold">$50</div>
                <div className="text-white/60 text-sm">Per participant</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <Calendar className="w-7 h-7 text-[#F5E6C8] mb-3" />
                <div className="text-white font-bold">Ages 9+</div>
                <div className="text-white/60 text-sm">Must be 9 or older</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <Anchor className="w-7 h-7 text-[#F5E6C8] mb-3" />
                <div className="text-white font-bold">Intro Level</div>
                <div className="text-white/60 text-sm">No experience needed</div>
              </div>
            </div>

            <p className="text-white/60 text-sm">
              Registration for Sandlot Scuba opens in the Spring. Registered campers will be contacted with details.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}