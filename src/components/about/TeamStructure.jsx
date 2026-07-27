import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, UserCheck, Award, Sparkles } from 'lucide-react';

export default function TeamStructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#F5E6C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4">
            The Team Experience
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#B5473B] rounded-full mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-2xl text-[#3D2B1F]">Your Team</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#2D5A3D] rounded-xl p-4 text-center">
                  <UserCheck className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-white font-semibold">Coach 1</div>
                  <div className="text-white/70 text-sm">Teacher</div>
                </div>
                <div className="bg-[#2D5A3D] rounded-xl p-4 text-center">
                  <UserCheck className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-white font-semibold">Coach 2</div>
                  <div className="text-white/70 text-sm">Teacher</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-2">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="bg-[#F5E6C8] rounded-lg p-3 text-center"
                  >
                    <div className="w-8 h-8 bg-[#B5473B] rounded-full mx-auto mb-1 flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <div className="text-[#8B7355] text-xs">Camper</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            {[
              {
                step: "1",
                title: "Team Formation",
                description: "On the first day, every camper is placed on a team for the week. You're always placed with friends or siblings!"
              },
              {
                step: "2",
                title: "Two Dedicated Coaches",
                description: "Each team has two teacher-coaches who guide and encourage campers throughout the entire week."
              },
              {
                step: "3",
                title: "Earn Points Together",
                description: "Teams earn points by winning competitions, demonstrating good character, and following directions."
              },
              {
                step: "4",
                title: "Championship Friday",
                description: "All teams are awarded medals based on their success at earning points throughout the week!"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a3a4a] rounded-xl flex items-center justify-center text-white font-display text-xl group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#3D2B1F] text-lg">{item.title}</h3>
                  <p className="text-[#8B7355] mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-white rounded-2xl flex items-center gap-4"
            >
              <Sparkles className="w-10 h-10 text-[#1a3a4a]" />
              <p className="text-[#3D2B1F]">
                <span className="font-bold">Note:</span> Sandlot does NOT provide specific sports instruction. 
                All activities are play-based with focus on character-building!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}