import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Shield, Sparkles } from 'lucide-react';

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
  {
    icon: Users,
    title: "Team-Based Atmosphere",
    description: "Campers are placed on teams with friends and siblings, led by two dedicated coaches throughout the week."
  },
  {
    icon: Award,
    title: "Character Building",
    description: "Emphasis placed on perseverance, leadership, integrity, and teamwork - not just on winning games"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "A safe space where good sportsmanship and friendly competition are prioritized."
  },
  {
    icon: Sparkles,
    title: "Daily Adventures",
    description: "Morning games, camp store, and exciting afternoon field trips to pools, skating, bowling & more!"
  }];


  return (
    <section ref={ref} className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4">

            <div className="rounded-xl overflow-hidden h-48 w-full">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/c8d33c63a_IMG_6653.jpg"
                alt="Kids playing"
                className="rounded-xl h-48 w-full object-cover" />

            </div>
            <div className="mt-8 rounded-xl overflow-hidden h-48 w-full">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/b316a6c7b_IMG_6513.jpg"
                alt="Team sports"
                className="rounded-xl h-48 w-full object-cover" />

            </div>
            <div className="rounded-xl overflow-hidden h-48 w-full">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/179751ad8_IMG_4173.jpeg"
                alt="Swimming"
                className="rounded-xl h-48 w-full object-cover" />

            </div>
            <div className="mt-8 rounded-xl overflow-hidden h-48 w-full">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/7fb00e6c2_IMG_4428.jpg"
                alt="Kids having fun"
                className="rounded-xl h-48 w-full object-cover" />

            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>

              <span className="text-[#1a3a4a] font-semibold text-sm uppercase tracking-widest">The Sandlot Solution</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4 mb-6">
                More Than Just
                <span className="text-[#2D5A3D]"> Camp</span>
              </h2>
              <p className="text-[#8B7355] text-lg mb-10 leading-relaxed">Sandlot is designed to promote physical fitness while fostering personal growth in sportsmanship, integrity, perseverance, and teamwork.


              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 group">

                  <div className="flex-shrink-0 w-14 h-14 bg-[#F5E6C8] rounded-2xl flex items-center justify-center group-hover:bg-[#1a3a4a] transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-[#1a3a4a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3D2B1F] text-lg">{feature.title}</h3>
                    <p className="text-[#8B7355] mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}