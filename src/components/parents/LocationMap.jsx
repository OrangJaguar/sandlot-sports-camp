import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Car } from 'lucide-react';
import { CAMP_LOCATION, CAMP_MAP_URL } from '@/lib/campInfo';

export default function LocationMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#F5E6C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-[#B5473B] font-semibold text-sm uppercase tracking-widest">Find Us</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4">Camp Location</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
          >
            <div className="w-16 h-16 bg-[#B5473B] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-3xl text-[#3D2B1F] mb-2">{CAMP_LOCATION.name}</h3>
            <p className="text-[#8B7355] text-lg mb-6">
              <span className="font-semibold text-[#3D2B1F]">{CAMP_LOCATION.street}</span>
              <br />
              {CAMP_LOCATION.city}
            </p>
            <a
              href={CAMP_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-[#1a3a4a] text-white font-semibold hover:bg-[#2D5A3D] transition-colors">
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-[#FAF8F5] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a3a4a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-[#3D2B1F] mb-1">Camp Hours</h4>
                    <p className="text-[#8B7355]">
                      <span className="font-semibold text-[#3D2B1F]">9:00 AM – 4:00 PM</span><br />
                      Monday through Friday
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FAF8F5] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3D2B1F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-[#3D2B1F] mb-1">Drop-off & Pick-up</h4>
                    <p className="text-[#8B7355]">
                      Detailed instructions will be provided to registered families before camp begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}