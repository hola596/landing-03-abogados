'use client';

import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: 'privacy' | 'terms' | 'legal';
  onClose: () => void;
  onTabChange: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function LegalModal({ isOpen, activeTab, onClose, onTabChange }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-legal-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl bg-legal-900 border border-legal-700 shadow-2xl p-6 sm:p-8 flex flex-col text-slate-200">
        <div className="flex items-center justify-between border-b border-legal-800 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-gold-400" />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onOpenLegalTab('privacy')}
                className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'privacy' ? 'bg-gold-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Privacidad
              </button>
              <button
                type="button"
                onClick={() => onOpenLegalTab('terms')}
                className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'terms' ? 'bg-gold-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Términos
              </button>
              <button
                type="button"
                onClick={() => onOpenLegalTab('legal')}
                className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'legal' ? 'bg-gold-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Aviso Legal
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal legal"
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-legal-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 pr-2 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Política de Privacidad y Deontología Digital</h3>
              <p>
                <strong>1. Responsable del Tratamiento:</strong> Servicio de Marketing Digital, contacto oficial:{' '}
                <a href="mailto:hola@serviciodemarketingdigital.com" className="text-gold-400 underline">
                  hola@serviciodemarketingdigital.com
                </a>.
              </p>
              <p>
                <strong>2. Tratamiento de Datos para Bufetes:</strong> Las solicitudes remitidas se destinan a la elaboración de propuestas técnicas de captación para despachos jurídicos. Los datos se almacenan bajo cifrado SSL y no son cedidos a terceros.
              </p>
              <p>
                <strong>3. Derechos:</strong> En cualquier momento puede solicitar la supresión de sus datos dirigiéndose a <code>hola@serviciodemarketingdigital.com</code>.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Términos del Servicio</h3>
              <p>
                <strong>1. Objeto:</strong> Servicio de ingeniería web de ultra alta velocidad enfocado en bufetes de abogados especialistas en indemnización por accidente.
              </p>
              <p>
                <strong>2. Cumplimiento Deontológico:</strong> Las estructuras y copys se diseñan respetando las normas de publicidad del Consejo General de la Abogacía.
              </p>
            </div>
          )}

          {activeTab === 'legal' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Aviso Legal</h3>
              <p>
                Servicio de Marketing Digital. Contacto vinculante:{' '}
                <a href="mailto:hola@serviciodemarketingdigital.com" className="text-gold-400 underline">
                  hola@serviciodemarketingdigital.com
                </a>.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-legal-800 pt-4 mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-legal-800 hover:bg-legal-700 text-slate-200 font-semibold text-xs transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );

  function onOpenLegalTab(tab: 'privacy' | 'terms' | 'legal') {
    onTabChange(tab);
  }
}
