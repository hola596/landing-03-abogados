'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Scale, Send } from 'lucide-react';

interface LeadFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFilterModal({ isOpen, onClose }: LeadFilterModalProps) {
  const [nombre, setNombre] = useState('');
  const [inviertenAds, setInviertenAds] = useState('Sí');
  const [servicioEstrella, setServicioEstrella] = useState('');
  const [tienenEquipo, setTienenEquipo] = useState('Sí');
  const [honeypot, setHoneypot] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);

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

  const sanitize = (text: string) => {
    return text.replace(/[<>'"&]/g, '').trim();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      onClose();
      return;
    }

    const cleanNombre = sanitize(nombre);
    const cleanServicio = sanitize(servicioEstrella);

    if (!cleanNombre || !cleanServicio) return;

    // In-memory obfuscated WhatsApp number
    const w1 = '54911';
    const w2 = '2788';
    const w3 = '7093';
    const dest = `${w1}${w2}${w3}`;

    // Exact message specified in prompt
    const msg = `Hola, soy ${cleanNombre}. Actualmente ${inviertenAds} invertimos en Ads. Queremos una landing para potenciar ${cleanServicio}. ${tienenEquipo} tenemos equipo para los leads. Solicito una propuesta.`;

    const targetUrl = `https://wa.me/${dest}?text=${encodeURIComponent(msg)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-legal-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title-abogados"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg rounded-3xl bg-legal-900 border border-legal-700 shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-100"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana emergente"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-legal-800 transition-colors focus:ring-2 focus:ring-amber-400"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
            <Scale className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
            Evaluación de Cualificación
          </span>
        </div>

        <h3 id="modal-title-abogados" className="text-xl sm:text-2xl font-bold text-white mb-2">
          Descubre si tu bufete califica
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-6">
          Completa los siguientes puntos para recibir un diagnóstico previo y estructurar la propuesta monoproducto para tu despacho:
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="hp_legal"
              tabIndex={-1}
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              1. Nombre del bufete o abogado *
            </label>
            <input
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Bufete García & Asociados"
              className="w-full px-4 py-2.5 rounded-xl bg-legal-950 border border-legal-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              2. ¿Invierten actualmente en Google o Meta Ads? *
            </label>
            <select
              value={inviertenAds}
              onChange={(e) => setInviertenAds(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-legal-950 border border-legal-700 text-white focus:outline-none focus:border-amber-400 text-sm"
            >
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              3. Servicio estrella a promocionar *
            </label>
            <input
              type="text"
              required
              value={servicioEstrella}
              onChange={(e) => setServicioEstrella(e.target.value)}
              placeholder="Ej. Accidentes de Tráfico, Laborales, Negligencias"
              className="w-full px-4 py-2.5 rounded-xl bg-legal-950 border border-legal-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              4. ¿Tienen equipo para atender nuevos leads? *
            </label>
            <select
              value={tienenEquipo}
              onChange={(e) => setTienenEquipo(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-legal-950 border border-legal-700 text-white focus:outline-none focus:border-amber-400 text-sm"
            >
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-amber-500 via-gold-500 to-amber-600 hover:from-amber-600 hover:to-gold-600 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              <span>Solicitar Propuesta Personalizada</span>
              <Send className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
