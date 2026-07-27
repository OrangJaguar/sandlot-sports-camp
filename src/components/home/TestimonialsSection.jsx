import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Sandlot builds character, teamwork, and you meet lots of new people!",
      author: "Sandlot Camper",
      type: "Camper"
    },
    {
      quote: "My son loved this camp. Thanks for going above and beyond all the other camps! If you're looking for genuine fun with emphasis on play, then this is a great camp.",
      author: "Parent",
      type: "Parent"
    },
    {
      quote: "One thing I like about Sandlot is the safe environment we are in when we compete. We don't have to worry about being made fun of or criticized.",
      author: "Sandlot Camper",
      type: "Camper"
    },
    {
      quote: "Our son attended all 6 weeks and had an absolute blast! We were so impressed by the variety of activities.",
      author: "Breanna",
      type: "Parent"
    },
    {
      quote: "Our 8 year old son loved this camp SO much! He doesn't usually enjoy camps but he loved everything about Sandlot.",
      author: "Elaine",
      type: "Parent"
    },
    {
      quote: "Great experience for a first-time camper!",
      author: "Parent",
      type: "Parent"
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-24 bg-[#F5E6C8] relative overflow-hidden">
      {/* Decorative Baseball Stitches */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,40 50,50 T100,50" stroke="#B5473B" strokeWidth="0.5" fill="none" strokeDasharray="2,2" />
          <path d="M0,30 Q25,20 50,30 T100,30" stroke="#B5473B" strokeWidth="0.5" fill="none" strokeDasharray="2,2" />
          <path d="M0,70 Q25,60 50,70 T100,70" stroke="#B5473B" strokeWidth="0.5" fill="none" strokeDasharray="2,2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4">
            What Families Are
            <span className="text-[#2D5A3D]"> Saying</span>
          </h2>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#B5473B] opacity-20" />
            
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-2xl text-[#3D2B1F] text-center leading-relaxed mb-8"
            >
              "{testimonials[activeIndex].quote}"
            </motion.p>

            <div className="text-center">
              <div className="font-bold text-[#3D2B1F]">{testimonials[activeIndex].author}</div>
              <div className="text-[#8B7355] text-sm">{testimonials[activeIndex].type}</div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[#F5E6C8] flex items-center justify-center hover:bg-[#B5473B] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeIndex ? 'w-8 bg-[#B5473B]' : 'bg-[#E5D6B8]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#F5E6C8] flex items-center justify-center hover:bg-[#B5473B] hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}