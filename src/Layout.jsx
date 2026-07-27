import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, ChevronRight, Mail, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPageName]);

  useEffect(() => {
    // Load Botpress chatbot scripts with proper sequencing
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js';
    script1.async = true;

    // Only load the config script after inject.js is loaded
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://files.bpcontent.cloud/2026/01/04/00/20260104001133-62FXFWP5.js';
      script2.async = true;
      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      const scripts = document.querySelectorAll('script[src*="botpress"], script[src*="bpcontent"]');
      scripts.forEach(script => script.remove());
    };
  }, [currentPageName]);

  const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'The Experience', page: 'TheExperience' },
  { name: 'The Details', page: 'TheDetails' },
  { name: 'The Team', page: 'TheTeam' }];


  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        :root {
          --brick-red: #B5473B;
          --forest-green: #2D5A3D;
          --cream: #F5E6C8;
          --deep-brown: #3D2B1F;
          --off-white: #FAF8F5;
          --dirt: #8B7355;
        }
        
        body {
          font-family: 'DM Sans', sans-serif;
          background-color: var(--off-white);
        }
        
        .font-display {
          font-family: 'Archivo Black', sans-serif;
        }
        
        .text-shadow-rustic {
          text-shadow: 2px 2px 0 var(--deep-brown);
        }
        
        .grain-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.03;
        }
        
        .badge-shadow {
          box-shadow: 4px 4px 0 var(--deep-brown);
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 6px 6px 0 var(--deep-brown);
        }

        /* Botpress Chat Customization */
        #bp-web-widget-container button[aria-label*="button"] {
          background-color: #B5473B !important;
        }

        #bp-web-widget-container button[aria-label*="button"]:hover {
          background-color: #a03d32 !important;
        }
        `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5] shadow-md py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/147fc90cd_Gemini_Generated_Image_w7qwh6w7qwh6w7qw-removebg-preview.png"
                alt="Sandlot Sports Camp"
                className="h-14 md:h-16 transition-transform group-hover:scale-105" />

              <div className="hidden sm:block">
                <div className="font-display text-xl md:text-2xl text-[#3D2B1F] leading-tight">
                  Sandlot Sports Camp
                </div>
                <div className="font-display text-xs md:text-sm text-[#8B7355] uppercase tracking-widest">
                  OF DUBLIN
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                currentPageName === link.page ?
                'bg-[#1a3a4a] text-white' :
                'text-[#3D2B1F] hover:bg-[#F5E6C8]'}`
                }>

                  {link.name}
                </Link>
              )}
              <Link
                to={createPageUrl('Registration')}
                className="ml-4 px-6 py-2.5 bg-[#2D5A3D] text-white font-bold rounded-full hover-lift badge-shadow flex items-center gap-2 text-sm"
              >
                2027 Registration Opens January
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#F5E6C8] text-[#3D2B1F]">

              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen &&
          <div className="md:hidden bg-[#FAF8F5] border-t border-[#F5E6C8]">
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) =>
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-all ${
                currentPageName === link.page ?
                'bg-[#1a3a4a] text-white' :
                'text-[#3D2B1F] hover:bg-[#F5E6C8]'}`
                }>

                    {link.name}
                  </Link>
              )}
                <Link
                  to={createPageUrl('Registration')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 bg-[#2D5A3D] text-white font-bold rounded-xl text-center text-lg mt-4"
                >
                  2027 Registration Opens January
                </Link>
              </div>
            </div>
          }
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-[80px] min-h-screen bg-[#FAF8F5]">{children}</main>

      {/* Footer */}
      <footer className="bg-[#3D2B1F] text-[#F5E6C8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a0a50f6a1bee2d5adb18f/daeaeadea_image-removebg-preview7.png"
                alt="Sandlot Sports Camp"
                className="h-20 mb-4" />

              <p className="text-[#8B7355] text-sm mb-4">Building character through sports since 2005.</p>
              <div className="flex gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=sandlotdublin@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#8B7355]/20 rounded-lg flex items-center justify-center hover:bg-[#8B7355]/30 transition-colors"
                  aria-label="Email us">

                  <Mail className="w-5 h-5 text-[#F5E6C8]" />
                </a>
                <a
                  href="https://www.facebook.com/groups/1429560348060815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#8B7355]/20 rounded-lg flex items-center justify-center hover:bg-[#8B7355]/30 transition-colors"
                  aria-label="Follow us on Facebook">

                  <Facebook className="w-5 h-5 text-[#F5E6C8]" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) =>
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="block text-[#8B7355] hover:text-white transition-colors">

                    {link.name}
                  </Link>
                )}
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg mb-4">Location</h4>
              <p className="text-[#8B7355]">
                Camp location for 2027 is currently <span className="text-[#F5E6C8] font-semibold">TBD</span>.
                Check back in January for details!
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#5A4A3A] flex flex-col md:flex-row justify-between items-center gap-4 text-[#8B7355] text-sm">
            <div>© {new Date().getFullYear()} Sandlot Sports Camp of Dublin. All rights reserved.</div>
            <div>Crafted with passion by Sanskar Gupta</div>
          </div>
        </div>
      </footer>

      {/* Chat Label */}
      <div className="fixed bottom-8 right-24 z-[9999] bg-[#3D2B1F] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl pointer-events-none">
        Ask me anything! 💬
      </div>
      </div>);

      }