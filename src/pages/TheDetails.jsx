import React from 'react';
import { motion } from 'framer-motion';
import { Info, Package, CloudRain, MapPin, Edit } from 'lucide-react';
import WhatToBring from '../components/parents/WhatToBring';
import BadWeather from '../components/parents/BadWeather';
import LocationMap from '../components/parents/LocationMap';
import RegistrationInfo from '../components/parents/RegistrationInfo';

export default function TheDetails() {
  const quickLinks = [
  { icon: Package, label: "What to Bring", href: "#what-to-bring" },
  { icon: CloudRain, label: "Weather Policy", href: "#weather" },
  { icon: MapPin, label: "Location", href: "#location" },
  { icon: Edit, label: "Registration/Refund Policy", href: "#registration" }];


  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#2D5A3D] to-[#1a3a2a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">

            <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
              The
              <span className="block text-[#F5E6C8]">Details</span>
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">Everything you need to know about preparing your camper for a great camp experience.

            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-12">

            {quickLinks.map((link, index) =>
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white hover:bg-white/20 transition-colors">

                <link.icon className="w-5 h-5" />
                {link.label}
              </a>
            )}
          </motion.div>
        </div>
      </section>

      <div id="what-to-bring">
        <WhatToBring />
      </div>
      <div id="weather">
        <BadWeather />
      </div>
      <div id="location">
        <LocationMap />
      </div>
      <div id="registration">
        <RegistrationInfo />
      </div>
    </div>);

}