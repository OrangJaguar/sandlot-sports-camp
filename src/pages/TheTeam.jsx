import React from 'react';
import { motion } from 'framer-motion';
import MissionSection from '../components/about/MissionSection';
import StaffSection from '../components/about/StaffSection';
import StaffProfiles from '../components/about/StaffProfiles';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function TheTeam() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#F5E6C8] to-[#FAF8F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl text-[#3D2B1F]">
              The Sandlot Team
            </h1>
          </motion.div>
        </div>
      </section>

      <MissionSection />
      <StaffProfiles />
      <StaffSection />

      {/* Final CTA */}
      <section className="py-24 bg-[#1a3a4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Ready to Join the Family?
            </h2>
            <p className="text-white/80 text-xl mb-10">
              Give your child an unforgettable summer of growth, friendship, and fun.
            </p>
            <Link
              to={createPageUrl('Registration')}
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#1a3a4a] font-bold text-xl rounded-full hover:shadow-xl transition-shadow"
            >
              2027 Registration Opens January
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}