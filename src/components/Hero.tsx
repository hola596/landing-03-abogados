'use client';

import React from 'react';
import { ShieldAlert, Sparkles, Scale, Clock, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-blue-500/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Superior Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs sm:text-sm font-medium tracking-wide uppercase mb-6 shadow-sm">
          <Scale className="w-4 h-4 text-blue-400" />
          <span>Exclusivo para Abogados de Accidentes y Negligencias</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Tus campañas de Google Ads pierden clientes por usar webs lentas.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-gold-400 to-amber-500">
            Optimiza la captación de accidentados hoy.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-10">
          Diseñamos páginas de aterrizaje individuales de ultra alta velocidad para bufetes jurídicos. Elimina la fricción de tu web institucional, enfoca el tráfico en indemnizaciones de alto valor y multiplica tus casos firmados cada mes.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base sm:text-lg bg-gradient-to-r from-amber-500 via-gold-500 to-amber-600 hover:from-amber-600 hover:to-gold-600 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 focus:ring-4 focus:ring-amber-400/50"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Descubre si tu bufete califica</span>
          </button>
        </div>

        {/* Video Demo Embedded Right Here */}
        <div className="my-12 max-w-4xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-800 to-slate-900 glow-blue shadow-2xl">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/M5_QicGRh-s?si=_0gkgpp51W2mA-NQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Key Metrics / Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-gold-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">LCP Ultrarrápido</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">&lt; 0.8s</p>
            <p className="text-xs text-slate-400">El lesionado no espera ni rebota</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Google Ads ROAS</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">+240%</p>
            <p className="text-xs text-slate-400">Menor coste por cliente potencial</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Scale className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Enfoque Puro</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">Monoproducto</p>
            <p className="text-xs text-slate-400">Solo casos de indemnización</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Cualificación</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-white">Con Peritos</p>
            <p className="text-xs text-slate-400">Casos con viabilidad médica y legal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
