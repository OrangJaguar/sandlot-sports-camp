import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Shield, Heart, Star } from 'lucide-react';

export default function StaffSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#3D2B1F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16">

          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">Our Team</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#F5E6C8] mt-4">Founded by Teachers

          </h2>
          <p className="text-[#8B7355] text-lg mt-4 max-w-2xl mx-auto">All of our adult staff members are certified teachers in the Dublin City Schools, or former Sandlot Campers.


          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
          {
            icon: Shield,
            title: "Background Checked",
            description: "All adult staff undergo thorough background checks for your child's safety."
          },
          {
            icon: Heart,
            title: "Passion for Kids",
            description: "Our teachers choose to spend their summers helping kids grow."
          },
          {
            icon: Star,
            title: "Character First",
            description: "We teach citizenship and character through the act of sport."
          }].
          map((item, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-[#4D3B2F] rounded-2xl p-8 border border-[#5A4A3A] hover:border-[#B5473B] transition-colors">

              <item.icon className="w-10 h-10 text-[#B5473B] mb-4" />
              <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
              <p className="text-[#8B7355]">{item.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}