import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Calendar, Users, Edit3, ChevronRight, Clock } from 'lucide-react';

export default function RegistrationInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const refundPolicy = [
  { condition: "More than 21 days before camp", refund: "$30 non-refundable" },
  { condition: "Less than 21 days before camp", refund: "$90 non-refundable" },
  { condition: "After 9am the Saturday before camp begins", refund: "No refunds" }];


  return (
    <section ref={ref} className="py-24 bg-[#1a3a4a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10">
              <circle cx="5" cy="5" r="1" fill="white" />
            </pattern>
          </defs>
          <rect fill="url(#grid)" width="100%" height="100%" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16">

          <span className="text-white/80 font-semibold text-sm uppercase tracking-widest">Registration Details</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4">
            Important Info
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
          { icon: Users, label: "Ages", value: "7-13", sub: "Grades 2-8" },
          { icon: Calendar, label: "Summer", value: "6 weeks", sub: "available" },
          { icon: Clock, label: "Hours", value: "9–4", sub: "Mon–Fri daily" },
          { icon: Edit3, label: "Payment", value: "100%", sub: "Due at registration" }].
          map((item, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">

              <item.icon className="w-8 h-8 text-[#F5E6C8] mx-auto mb-4" />
              <div className="text-white/60 text-sm mb-1">{item.label}</div>
              <div className="font-display text-3xl text-white">{item.value}</div>
              <div className="text-white/60 text-sm">{item.sub}</div>
            </motion.div>
          )}
        </div>

        {/* Refund Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-10 max-w-4xl mx-auto">

          <h3 className="font-display text-2xl text-[#3D2B1F] mb-6 text-center">Refund Policy</h3>
          <div className="mb-4 text-center text-[#8B7355] text-sm">
            <em>Non-refundable amount is per week/per camper</em>
          </div>
          <div className="space-y-4">
            {refundPolicy.map((item, index) =>
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#FAF8F5] rounded-xl gap-2">
                <span className="text-[#3D2B1F] font-medium">{item.condition}</span>
                <span className="text-[#B5473B] font-semibold text-sm">{item.refund}</span>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <Link
              to={createPageUrl('Registration')}
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#1a3a4a] text-white font-bold text-lg rounded-full hover-lift badge-shadow group">

              2027 Registration Opens January
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-white/70 text-sm max-w-2xl mx-auto">

          <p className="">⚠️ Important: Campers must be between ages 7-13 and entering grades 2-8 at the time of camp.


          </p>
        </motion.div>
      </div>
    </section>);

}