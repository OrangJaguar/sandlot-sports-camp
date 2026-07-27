import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sun, Utensils, Bus, Trophy } from 'lucide-react';

export default function DailySchedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schedule = [
    {
      time: "9:00 AM",
      title: "Morning Games",
      description: "2-3 hours of team games and activities on campus",
      icon: Sun,
      color: "#F5E6C8"
    },
    {
      time: "12:00 PM",
      title: "Lunch & Camp Store",
      description: "Sack lunch, socializing, and camp store treats ($2.50 each)",
      icon: Utensils,
      color: "#2D5A3D"
    },
    {
      time: "1:00 PM",
      title: "Field Trip",
      description: "Board buses for off-campus adventures",
      icon: Bus,
      color: "#B5473B"
    },
    {
      time: "4:00 PM",
      title: "Pick Up",
      description: "End of an awesome day!",
      icon: Trophy,
      color: "#3D2B1F"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-[#3D2B1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">Daily Schedule</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#F5E6C8] mt-4">
            A Typical Day at Camp
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#5A4A3A] hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-[#4D3B2F] rounded-2xl p-6 hover:bg-[#5A4A3A] transition-colors">
                    <div className="flex items-center gap-4 mb-3" style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}>
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.icon className="w-6 h-6 text-[#3D2B1F]" />
                      </div>
                      <span className="text-[#B5473B] font-bold text-lg">{item.time}</span>
                    </div>
                    <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-[#8B7355]">{item.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block w-6 h-6 rounded-full bg-[#B5473B] border-4 border-[#3D2B1F] z-10 flex-shrink-0" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}