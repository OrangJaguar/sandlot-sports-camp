import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StaffProfiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Divider = () => (
    <div className="border-t-4 border-[#F5E6C8] max-w-7xl mx-auto" />
  );

  const staff = [
    {
      name: "Matthew Hawley",
      title: "Founder & Director",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/272a20425_IMG_2838.jpg",
      bio: "I am the Orchestra Director at Karrer Middle School, in the Dublin City Schools. I am also a United States Track and Field Association Level 1 Certified Coach. I have been coaching and teaching since 1999 and have an MA in Administration from The Ohio State University. I have a distinct passion for music and all things running, but I particularly enjoy watching the impact that excellence in music and sport can bring to a young person's life! After working at the Olentangy Sandlot for many years, I founded the Dublin Sandlot in 2012 and have been it's director ever since. In my free time I can be found spending time watching the Buckeyes, running or cycling, playing the cello, and traveling to National Parks with my wife and two daughters."
    },
    {
      name: "Chad Niezgoda",
      title: "Assistant Director",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/42b44227d_Niezgoda.jpg",
      bio: "I have been employed with Dublin City Schools for over 10 years and have been coaching with the Sandlot Sports Camp of Dublin, since its inception, in 2012. As a coach, I want all children to be successful; I strive to build their self-esteem while encouraging them to push themselves to be their best. My goal is to ensure ALL have FUN! I have coached golf, baseball, softball, wrestling, and track. When not at work, I can be found enjoying quality time with my wife and three daughters at our home in Delaware or out camping, swimming, hiking, and traveling."
    }
  ];

  return (
    <>
      <Divider />
      <section ref={ref} className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#1a3a4a] font-semibold text-sm uppercase tracking-widest">Meet Our Leaders</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F] mt-4">
            Dublin Sandlot Camp Team
          </h2>
        </motion.div>

        <div className="space-y-16">
          {staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 p-8 md:p-12`}>
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-3xl text-[#3D2B1F] mb-2">
                    {member.name}
                  </h3>
                  <div className="inline-block px-4 py-1 bg-[#2D5A3D] text-white rounded-full text-sm font-semibold mb-6">
                    {member.title}
                  </div>
                  <p className="text-[#8B7355] leading-relaxed text-lg">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}