import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Users, Clock, CheckCircle } from 'lucide-react';

export default function SwimmingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const safetyFeatures = [
    "Color-coded wristbands based on swim test",
    "Buddy system required at all times",
    "Hourly attendance checks",
    "Multiple shallow areas (2' & 3' pools)",
    "Fully staffed lifeguards",
    "Close coach supervision in all areas"
  ];

  return (
    <section ref={ref} className="py-24 bg-[#2D5A3D] relative overflow-hidden">
      {/* Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 V120 H0 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-[#F5E6C8] font-semibold text-sm uppercase tracking-widest">Pool Safety</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-6">
              Swimming Made Safe
            </h2>
            <p className="text-white/80 text-lg mb-8">
              We take pool safety very seriously. Parents are always welcome to visit the pool at any time!
            </p>

            <div className="space-y-4">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle className="w-5 h-5 text-[#F5E6C8] flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Users className="w-8 h-8 text-[#F5E6C8] mb-2" />
                <div className="text-white font-bold">Buddy System</div>
                <div className="text-white/60 text-sm">Never swim alone</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Clock className="w-8 h-8 text-[#F5E6C8] mb-2" />
                <div className="text-white font-bold">Hourly Check-ins</div>
                <div className="text-white/60 text-sm">Regular attendance</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#F5E6C8] rounded-3xl transform rotate-3" />
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/179751ad8_IMG_4173.jpeg"
              alt="Kids swimming safely"
              className="relative rounded-2xl w-full h-[500px] object-cover"
            />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <Shield className="w-8 h-8 text-[#2D5A3D] mb-2" />
              <div className="font-bold text-[#3D2B1F]">Safety First</div>
              <div className="text-[#8B7355] text-sm">Always supervised</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}