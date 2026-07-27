import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ChevronRight, Play, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F5E6C8] to-[#FAF8F5]">
      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              800+ Campers in 2026
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-7xl text-[#3D2B1F] leading-[0.95] mb-6"
            >
              Summer
              <span className="block text-[#1a3a4a]">Adventures</span>
              <span className="block text-[#2D5A3D]">Begin Here</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#8B7355] max-w-lg mb-8 leading-relaxed"
            >
              The summer camp designed specifically to encourage 
              <span className="font-bold text-[#3D2B1F]"> character building </span> 
              through sports. For grades 2-8.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to={createPageUrl('Registration')}
                className="group px-8 py-4 bg-[#1a3a4a] text-white font-bold rounded-full hover-lift badge-shadow flex items-center gap-2 text-lg"
              >
                2027 Registration Opens January
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('TheExperience')}
                className="px-8 py-4 bg-transparent border-2 border-[#3D2B1F] text-[#3D2B1F] font-bold rounded-full hover:bg-[#3D2B1F] hover:text-white transition-all flex items-center gap-2 text-lg"
              >
                The Experience
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2 text-[#8B7355]">
                <div className="w-10 h-10 rounded-full bg-[#2D5A3D] flex items-center justify-center text-white text-lg">✓</div>
                <span className="text-sm font-medium">Teacher-Run</span>
              </div>
              <div className="flex items-center gap-2 text-[#8B7355]">
                <div className="w-10 h-10 rounded-full bg-[#B5473B] flex items-center justify-center text-white text-lg">✓</div>
                <span className="text-sm font-medium">Safe Environment</span>
              </div>
              <div className="flex items-center gap-2 text-[#8B7355]">
                <div className="w-10 h-10 rounded-full bg-[#3D2B1F] flex items-center justify-center text-white text-lg">✓</div>
                <span className="text-sm font-medium">20+ Years</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/10c5da2b6_IMG_5217.jpg"
                alt="Kids playing sports at summer camp"
                className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="font-display text-2xl text-[#1a3a4a]">See You</div>
                <div className="text-sm text-[#8B7355]">in 2027!</div>
              </div>

              {/* Camp Dates Badge */}
              <div className="absolute -top-4 -right-4 bg-[#2D5A3D] text-white p-4 rounded-xl shadow-xl">
                <div className="font-display text-lg">Summer 2027</div>
                <div className="text-sm opacity-80">6 Weeks Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}