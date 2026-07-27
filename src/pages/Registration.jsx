import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Facebook } from 'lucide-react';

export default function Registration() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              Summer 2027
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-[#3D2B1F] mb-6">
              Registration
              <span className="block text-[#1a3a4a]">Coming Soon</span>
            </h1>
            <p className="text-[#8B7355] text-xl max-w-2xl mx-auto">
              <span className="font-bold text-[#3D2B1F]">2027 registration will open in January.</span> 
              Thank you for a great 2026 season — see you next summer!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
          >
            <h2 className="font-display text-2xl text-[#3D2B1F] mb-4">Stay Connected</h2>
            <p className="text-[#8B7355] mb-8">
              Follow us on Facebook or reach out by email to be notified when registration opens.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&to=sandlotdublin@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1a3a4a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2D5A3D] transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <a
                href="https://www.facebook.com/groups/1429560348060815"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1a3a4a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2D5A3D] transition-colors"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}