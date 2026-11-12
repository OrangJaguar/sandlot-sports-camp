import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';
import { CAMP_LOCATION, CAMP_WEEKS, REGISTRATION_OPENS, TUITION } from '@/lib/campInfo';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#1a3a4a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="diagonal" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M0,20 L20,0" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect fill="url(#diagonal)" width="100%" height="100%" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
              See You
              <span className="block text-[#F5E6C8]">in 2027!</span>
            </h2>
            <p className="text-white/80 text-xl mb-8">
              Registration for Summer 2027 opens {REGISTRATION_OPENS}. Thanks for a great 2026 season!
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg">800+ Campers in 2026</div>
                  <div className="text-white/70 text-sm">20+ years of camp!</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg">9am - 4pm daily</div>
                  <div className="text-white/70 text-sm">Grades 2-8 (ages 7-13)</div>
                </div>
              </div>
            </div>

            <RegisterButton variant="white" size="lg" />
          </motion.div>

          {/* Weeks Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8">
              <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
                <Calendar className="w-7 h-7" />
                2027 Camp Weeks
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {CAMP_WEEKS.map((item, i) => (
                  <motion.div
                    key={item.week}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl px-4 py-3 hover:shadow-lg transition-all"
                  >
                    <div className="text-[#2D5A3D] font-bold text-xs uppercase tracking-widest">{item.week}</div>
                    <div className="text-[#3D2B1F] font-semibold">{item.dates}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/70 text-xs">
                <span className="font-semibold text-[#F5E6C8]">{TUITION} per week</span>
                <span className="text-center">📍 {CAMP_LOCATION.name}, Dublin</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}