import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Tag, ChevronRight, Mail } from 'lucide-react';
import RegisterButton from '../components/RegisterButton';
import { createPageUrl } from '../utils';
import {
  CAMP_WEEKS,
  CAMP_LOCATION,
  CAMP_MAP_URL,
  REGISTRATION_OPENS,
  TUITION,
} from '../lib/campInfo';

export default function Registration() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5E6C8] via-[#F7EFE1] to-[#FAF8F5] py-20 md:py-28">
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#2D5A3D] text-[#F5E6C8] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest"
          >
            <Calendar className="w-4 h-4" />
            Summer 2027
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl text-[#3D2B1F] mt-8 leading-[0.95]"
          >
            Registration
            <span className="block text-[#2D5A3D]">Opens January 9</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#8B7355] text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Sign-ups open{' '}
            <span className="font-bold text-[#3D2B1F]">{REGISTRATION_OPENS}</span>. Weeks fill
            quickly, so set a reminder and have your camper's details ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <RegisterButton size="lg" />
            <span className="text-[#8B7355] text-sm">
              Opens our secure registration page in a new tab.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Camp Weeks */}
      <section className="py-16 md:py-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">
              Six Weeks of Camp
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#3D2B1F] mt-3">
              2027 Camp Dates
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {CAMP_WEEKS.map((item, index) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group bg-white rounded-2xl p-6 border border-[#EDE5D8] hover:border-[#2D5A3D] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(61,43,31,0.45)]"
              >
                <div className="font-display text-xs text-[#2D5A3D] uppercase tracking-[0.2em]">
                  {item.week}
                </div>
                <div className="font-display text-2xl md:text-3xl text-[#3D2B1F] mt-2">
                  {item.dates}
                </div>
                <div className="text-[#8B7355] text-sm mt-2">Monday through Friday</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-4 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_24px_60px_-40px_rgba(61,43,31,0.5)]"
            >
              <div className="w-14 h-14 bg-[#2D5A3D] rounded-2xl flex items-center justify-center mb-6">
                <Tag className="w-7 h-7 text-[#F5E6C8]" />
              </div>
              <h3 className="font-display text-2xl text-[#3D2B1F] mb-2">Tuition</h3>
              <div className="font-display text-5xl text-[#2D5A3D]">
                {TUITION}
                <span className="text-lg text-[#8B7355]"> / week</span>
              </div>
              <p className="text-[#8B7355] mt-4 leading-relaxed">
                Per camper, per week. Our refund policy stays the same as always.
              </p>
              <Link
                to={createPageUrl('TheDetails')}
                className="inline-flex items-center gap-2 mt-6 text-[#2D5A3D] font-semibold hover:gap-3 transition-all"
              >
                See the refund policy
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1a3a4a] rounded-3xl p-8 md:p-10 text-white"
            >
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-[#F5E6C8]" />
              </div>
              <h3 className="font-display text-2xl mb-2">Camp Location</h3>
              <p className="text-[#F5E6C8] font-display text-xl leading-snug">
                {CAMP_LOCATION.name}
              </p>
              <p className="text-white/70 mt-1">
                {CAMP_LOCATION.street}
                <br />
                {CAMP_LOCATION.city}
              </p>
              <div className="flex items-center gap-2 text-white/70 mt-5 text-sm">
                <Clock className="w-4 h-4" />
                9:00 AM – 4:00 PM daily
              </div>
              <a
                href={CAMP_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-[#F5E6C8] font-semibold hover:gap-3 transition-all"
              >
                Get directions
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2D5A3D] rounded-3xl px-6 py-12 md:px-12 md:py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 grain-overlay pointer-events-none" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">
                Ready when registration opens?
              </h2>
              <p className="text-white/75 mt-4 max-w-xl mx-auto">
                {REGISTRATION_OPENS}. Register each camper for the weeks that work for your family.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <RegisterButton variant="cream" size="lg" />
                <a
                  href="https://mail.google.com/mail/?view=cm&to=sandlotdublin@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Questions? Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}