import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { REGISTRATION_URL } from '@/lib/campInfo';

const variants = {
  forest: 'bg-[#2D5A3D] text-[#F5E6C8] shadow-[4px_4px_0_#3D2B1F] hover:shadow-[6px_6px_0_#3D2B1F] hover:-translate-y-0.5',
  cream: 'bg-[#F5E6C8] text-[#3D2B1F] shadow-[4px_4px_0_#3D2B1F] hover:shadow-[6px_6px_0_#3D2B1F] hover:-translate-y-0.5',
  white: 'bg-white text-[#1a3a4a] shadow-[4px_4px_0_rgba(245,230,200,0.45)] hover:shadow-[6px_6px_0_rgba(245,230,200,0.65)] hover:-translate-y-0.5',
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-9 py-4 text-lg',
};

export default function RegisterButton({ variant = 'forest', size = 'md', label = 'Register Now', className }) {
  return (
    <a
      href={REGISTRATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {label}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}