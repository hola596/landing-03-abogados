'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

interface CookieBannerProps {
  onOpenLegal: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function CookieBanner({ onOpenLegal }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('smd_legal_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('smd_legal_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('smd_legal_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Consentimiento de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 p-5 rounded-2xl bg-legal-900/95 border border-legal-700 shadow-2xl backdrop-blur-md text-slate-200 text-xs sm:text-sm animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="leading-relaxed">
            Utilizamos cookies técnicas para garantizar la navegación segura y optimizar la captación conforme a nuestra{' '}
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="text-gold-400 underline hover:text-gold-300 font-medium"
            >
              Política de Privacidad
            </button>.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-slate-950 font-bold text-xs transition-colors"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="px-3 py-1.5 rounded-lg bg-legal-800 hover:bg-legal-700 text-slate-300 font-medium text-xs transition-colors"
            >
              Solo esenciales
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
