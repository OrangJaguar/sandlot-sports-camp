import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingDown, Smartphone, Tv, Heart } from 'lucide-react';

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: TrendingDown,
      stat: "1st Time",
      text: "For the first time in our country's history, our youth's life expectancy is shorter than their parents!",
      color: "#B5473B"
    },
    {
      icon: Smartphone,
      stat: "7+ hrs",
      text: "Average screen time daily",
      color: "#8B7355"
    },
    {
      icon: Tv,
      stat: "75%",
      text: "Of children don't get enough daily physical activity",
      color: "#3D2B1F"
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-[#3D2B1F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">The Problem</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#F5E6C8] mt-4">
            Kids Today Need More
            <span className="block text-[#B5473B]">Active Play</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-[#4D3B2F] p-6 rounded-2xl border border-[#5A4A3A] hover:border-[#B5473B] transition-all duration-300">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${problem.color}20` }}
                >
                  <problem.icon className="w-8 h-8" style={{ color: problem.color }} />
                </div>
                <div className="font-display text-5xl text-white mb-3">{problem.stat}</div>
                <p className="text-[#8B7355] leading-relaxed">{problem.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}