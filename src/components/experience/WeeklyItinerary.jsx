import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function WeeklyItinerary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    {
      day: "Monday",
      morning: "Team Formation & Morning Games",
      afternoon: "Lunch, Camp Store, & Off-campus field trip",
      highlight: "Meet your team & coaches!"
    },
    {
      day: "Tuesday",
      morning: "Morning Games & Activities",
      afternoon: "On-campus all day with Snow-Cones! 🍧",
      highlight: "Snow-Cone Day!"
    },
    {
      day: "Wednesday",
      morning: "Morning Games",
      afternoon: "Off-campus field trip",
      highlight: "Mid-week adventures"
    },
    {
      day: "Thursday",
      morning: "Morning Games",
      afternoon: "Talent Show & Off-campus field trip",
      highlight: "Building momentum!"
    },
    {
      day: "Friday",
      morning: "Championship Friday Tournaments! 🏆",
      afternoon: "Pool or Bowling & Awards Ceremony",
      highlight: "Championship Friday!"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-[#FAF8F5] border-b-4 border-[#F5E6C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#1a3a4a] font-semibold text-sm uppercase tracking-widest">Week Overview</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4">
            A Sample Week
          </h2>
        </motion.div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeDay === index
                  ? 'bg-[#1a3a4a] text-white shadow-lg'
                  : 'bg-white text-[#3D2B1F] hover:bg-[#F5E6C8]'
              }`}
            >
              {item.day}
            </motion.button>
          ))}
        </div>

        {/* Day Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5E6C8] rounded-bl-full" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {activeDay === 4 && <Trophy className="w-4 h-4" />}
                  {days[activeDay].highlight}
                </div>

                <h3 className="font-display text-4xl text-[#3D2B1F] mb-8">
                  {days[activeDay].day}
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-[#B5473B] font-bold">Morning</div>
                    <div className="text-[#3D2B1F] text-lg">{days[activeDay].morning}</div>
                  </div>
                  <div className="h-px bg-[#F5E6C8]" />
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-[#B5473B] font-bold">Afternoon</div>
                    <div className="text-[#3D2B1F] text-lg">{days[activeDay].afternoon}</div>
                  </div>
                </div>

                {activeDay === 4 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mt-8 p-6 bg-[#F5E6C8] rounded-2xl"
                  >
                    <div className="flex items-center gap-3 text-[#3D2B1F]">
                      <Trophy className="w-8 h-8 text-[#B5473B]" />
                      <div>
                        <div className="font-bold">Championship Friday</div>
                        <div className="text-sm text-[#8B7355]">All teams are awarded prizes based on points earned during the week!</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Point System Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#8B7355] max-w-2xl mx-auto">
            Throughout the week, campers and teams earn points by winning competitions, 
            demonstrating good character, and following directions. Points accumulate for the Championship Friday awards!
          </p>
        </motion.div>
      </div>
    </section>
  );
}