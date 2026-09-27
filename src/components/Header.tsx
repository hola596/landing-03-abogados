'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Scale, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-legal-950/85 border-b border-legal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="Ir al inicio - Servicio de Marketing Digital"
          >
            <div className="relative h-12 w-48 sm:w-56">
              <Image
                src="/LOGO.png"
                alt="Servicio de Marketing Digital - Landing Pages para Bufetes"
                fill
                priority
                sizes="(max-width: 640px) 192px, 224px"
                className="object-contain object-left"
              />
            </div>
          </a>

          <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5 text-blue-400" />
            <span>Especialización en Bufetes de Indemnizaciones</span>
          </div>
        </div>

        {/* Center / Email direct as required */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs sm:text-sm text-slate-300">
            <Mail className="w-4 h-4 text-gold-400" aria-hidden="true" />
            <span>Contacto:</span>
            <a
              href="mailto:hola@serviciodemarketingdigital.com"
              className="text-white hover:text-gold-400 font-medium transition-colors focus:outline-none focus:underline"
            >
              hola@serviciodemarketingdigital.com
            </a>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-gold-500 hover:from-amber-600 hover:to-gold-600 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform active:scale-95 focus:ring-2 focus:ring-amber-400"
          >
            <span>Descubre si tu bufete califica</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
