import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Shirt, Sun, Utensils, Droplets, Armchair, ShoppingBag, Smile } from 'lucide-react';

export default function WhatToBring() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: Shirt, text: "Close-toed, comfortable shoes and clothes to play in", essential: true },
    { icon: Sun, text: "Sunscreen", essential: true },
    { icon: Armchair, text: "Lawn chair", essential: true },
    { icon: Droplets, text: "Towel", essential: true },
    { icon: Utensils, text: "Packed lunch", essential: true },
    { icon: Droplets, text: "Large, full water bottle (insulated is best!)", essential: true },
    { icon: ShoppingBag, text: "Swim suit (wear it under clothes for easy changing)", essential: true },
    { icon: ShoppingBag, text: "Money for concessions", essential: true },
    { icon: Smile, text: "A SMILE! :)", essential: true },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">Packing List</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4">
            What to Bring
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                    item.essential ? 'hover:bg-[#F5E6C8]' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    item.essential ? 'bg-[#2D5A3D]' : 'bg-gray-200'
                  }`}>
                    <item.icon className={`w-6 h-6 ${item.essential ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                  <span className={`text-lg ${item.essential ? 'text-[#3D2B1F]' : 'text-gray-500'}`}>
                    {item.text}
                  </span>
                  {item.essential && (
                    <Check className="w-5 h-5 text-[#2D5A3D] ml-auto flex-shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-[#F5E6C8] rounded-xl text-[#8B7355] text-sm"
            >
              💡 Pro tip: There are changing facilities at camp and the pool!
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}