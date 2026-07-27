import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Target, Users, Award } from 'lucide-react';

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
  { icon: Heart, label: "Sportsmanship", description: "Learning to win and lose with grace" },
  { icon: Target, label: "Integrity", description: "Doing the right thing, always" },
  { icon: Users, label: "Teamwork", description: "Working together towards shared goals" },
  { icon: Award, label: "Perseverance", description: "Never giving up when things get tough" }];


  return (
    <section ref={ref} className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}>

            <span className="text-[#1a3a4a] font-semibold text-sm uppercase tracking-widest">Our Mission</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4 mb-6">
              Bringing Activity
              <span className="text-[#2D5A3D]"> Back</span>
            </h2>

            <div className="bg-[#F5E6C8] rounded-2xl p-6 mb-8 border-l-4 border-[#1a3a4a]">
              <p className="text-[#3D2B1F] italic text-lg leading-relaxed">
                "For the first time in our country's history, our youth's life expectancy is shorter 
                than their parents! This is due primarily to an inactive lifestyle."
              </p>
            </div>

            <p className="text-[#8B7355] text-lg leading-relaxed mb-8">Founded in 2005 by teachers, the goal of Sandlot is to bring activity back! We're designed to promote physical fitness, as well as challenge personal growth in areas of character including sportsmanship, integrity, perseverance, and teamwork.



            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer">

                  <value.icon className="w-8 h-8 text-[#1a3a4a] mb-2" />
                  <div className="font-bold text-[#3D2B1F]">{value.label}</div>
                  <div className="text-[#8B7355] text-sm">{value.description}</div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-64 w-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/b95672a7a_IMG_7513.jpg"
                  alt="Kids playing"
                  className="rounded-xl h-64 w-full object-cover" />

              </div>
              <div className="mt-8 rounded-xl overflow-hidden h-64 w-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/afbd1e8ed_IMG_6512.jpg"
                  alt="Team activity"
                  className="rounded-xl h-64 w-full object-cover" />

              </div>
              <div className="rounded-xl overflow-hidden h-64 w-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/ed79449ab_IMG_3840.jpg"
                  alt="Kids playing"
                  className="rounded-xl h-64 w-full object-cover" />

              </div>
              <div className="mt-8 rounded-xl overflow-hidden h-64 w-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/bca3e94f3_IMG_8767.jpg"
                  alt="Team sports"
                  className="rounded-xl h-64 w-full object-cover" />

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}