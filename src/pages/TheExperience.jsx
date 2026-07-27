import React from 'react';
import { motion } from 'framer-motion';
import ActivitiesGrid from '../components/experience/ActivitiesGrid';
import FieldTrips from '../components/experience/FieldTrips';
import SwimmingSection from '../components/experience/SwimmingSection';
import ScubaSection from '../components/experience/ScubaSection';
import WeeklyItinerary from '../components/experience/WeeklyItinerary';

export default function TheExperience() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#F5E6C8] to-[#FAF8F5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233D2B1F' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zm-20 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zM0 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zm20-20c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zm20 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zM0 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zM60 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-[#3D2B1F] mb-6 leading-tight">
              The Sandlot
              <span className="block text-[#1a3a4a]">Experience</span>
            </h1>
            <p className="text-[#8B7355] text-lg md:text-xl max-w-2xl mx-auto px-2">
              Games, field trips, swimming, and so much more. Every day is packed with adventure and character-building fun!
            </p>
          </motion.div>
        </div>
      </section>

      <WeeklyItinerary />
      <ActivitiesGrid />
      <FieldTrips />
      <SwimmingSection />
      <ScubaSection />
    </div>
  );
}