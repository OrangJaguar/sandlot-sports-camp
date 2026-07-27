import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ActivitiesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    { name: "Kickball", emoji: "⚾", color: "#B5473B" },
    { name: "Capture the Flag", emoji: "🚩", color: "#2D5A3D" },
    { name: "Dodge Ball", emoji: "🎯", color: "#8B7355" },
    { name: "Rock-Paper-Scissors Football", emoji: "🏈", color: "#B5473B" },
    { name: "Four Corners", emoji: "🎲", color: "#3D2B1F" },
    { name: "Galaxy Ball", emoji: "🌟", color: "#2D5A3D" },
    { name: "Tag Games", emoji: "🏃", color: "#8B7355" },
    { name: "Ricochet", emoji: "⚡", color: "#B5473B" },
    { name: "Team Building", emoji: "🤝", color: "#3D2B1F" },
    { name: "Talent Show", emoji: "🎭", color: "#2D5A3D" },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">Play All Day</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4">
            Games & Activities
          </h2>
          <p className="text-[#8B7355] text-lg mt-4 max-w-2xl mx-auto">
            All activities are play-based, with a strong focus on sportsmanship and character building
          </p>
          <div className="inline-block mt-6 px-6 py-2 bg-[#2D5A3D] text-white rounded-full text-sm">
            <span className="font-bold">Sandlot does not teach sport-specific skills, such as soccer, baseball, and basketball.</span>
          </div>
        </motion.div>

        <div className="relative">
          <div className="text-center text-[#8B7355] text-sm mb-4">← Drag to see more →</div>
          <div className="overflow-hidden">
            <motion.div 
              drag="x"
              dragConstraints={{ left: -1200, right: 0 }}
              className="flex gap-4 md:gap-6 cursor-grab active:cursor-grabbing"
            >
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: index % 2 === 0 ? 3 : -3,
                    zIndex: 10 
                  }}
                  className="relative group cursor-pointer flex-shrink-0 w-40 md:w-52"
                >
                  <div 
                    className="aspect-square rounded-2xl flex flex-col items-center justify-center p-4 md:p-6 shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: `${activity.color}15` }}
                  >
                    <div className="text-6xl md:text-7xl mb-3 md:mb-4 group-hover:scale-125 transition-transform">
                      {activity.emoji}
                    </div>
                    <div 
                      className="text-base md:text-lg font-bold text-center leading-tight"
                      style={{ color: activity.color }}
                    >
                      {activity.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-[#8B7355] mt-8"
        >
          ...and many more!
        </motion.p>
      </div>
    </section>
  );
}