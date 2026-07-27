import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Waves, Bike, Trophy, MapPin } from 'lucide-react';

export default function FieldTrips() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const trips = [
    {
      name: "Swimming Pools",
      location: "Jaycee Pool & Marysville Municipal Pool",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/179751ad8_IMG_4173.jpeg",
      icon: Waves
    },
    {
      name: "Skate Zone 71",
      location: "Roller skating fun",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/73fa2e27d_image000000.jpg",
      icon: Bike
    },
    {
      name: "Star Lanes Bowling",
      location: "Strike up some fun",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/b6bdd6228_IMG_6558.jpg",
      icon: Trophy
    },
    {
      name: "Integrity Gymnastics",
      location: "Flips and fun",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/6b39b50ab_IMG_6654.jpg",
      icon: MapPin
    },
    {
      name: "Resolute Athletic",
      location: "Indoor sports complex",
      image: "https://resoluteac.com/wp-content/uploads/2021/10/IMG-0489-2048x1536.jpg",
      icon: Trophy
    }
  ];

  const scrollRef = useRef(null);

  return (
    <section ref={ref} className="py-24 bg-[#F5E6C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">Daily Adventures</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4">
            Field Trips
          </h2>
          <p className="text-[#8B7355] text-lg mt-4 max-w-2xl mx-auto">
            Several times per week, we board school buses and head out for exciting off-campus adventures!
          </p>
          <div className="text-[#8B7355] text-sm mt-4">← Drag to scroll →</div>
        </motion.div>
      </div>

      {/* Scrolling Cards with Drag */}
      <div className="overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={scrollRef}
          drag="x"
          dragConstraints={{ left: -350, right: 0 }}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
        >
          {trips.map((trip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
              className="flex-shrink-0 w-72"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-10 h-10 bg-[#B5473B] rounded-lg flex items-center justify-center mb-3">
                    <trip.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl text-white">{trip.name}</h3>
                  <p className="text-white/70 text-sm">{trip.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}