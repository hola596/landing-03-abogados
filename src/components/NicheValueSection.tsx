'use client';

import React from 'react';
import { Car, Briefcase, Stethoscope, CheckCircle, ShieldCheck } from 'lucide-react';

interface NicheValueProps {
  onOpenModal: () => void;
}

export default function NicheValueSection({ onOpenModal }: NicheValueProps) {
  const verticals = [
    {
      icon: Car,
      title: 'Accidentes de Tráfico',
      desc: 'Conductores, ocupantes y peatones con lesiones graves, secuelas o incapacidad que requieren valoración pericial independiente.',
    },
    {
      icon: Briefcase,
      title: 'Accidentes Laborales',
      desc: 'Reclamaciones de recargo de prestaciones e indemnización por omisión de medidas de seguridad en el puesto de trabajo.',
    },
    {
      icon: Stethoscope,
      title: 'Negligencias Médicas',
      desc: 'Casos de mala praxis con alta viabilidad económica, informes periciales contrastados y sustento probatorio sólido.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-legal-900/40 border-t border-legal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Especialización Jurídica de Alto Rendimiento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Diseñado exclusivamente para despachos con peritos que invierten en Google Ads
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              El coste del clic en Google Ads para términos como <em>abogado accidentes</em> o <em>indemnización tráfico</em> es uno de los más elevados del mercado legal. Cada visitante que abandona tu web sin llamar representa entre 8 y 25 euros perdidos en segundos.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              Nuestra landing monoproducto aísla el servicio de indemnización en un entorno ultrarrápido, enfocado exclusivamente en transmitir autoridad, cálculo estimativo de secuelas y llamada de urgencia. Tu bufete recibe expedientes listos para derivar a peritaje y reclamación judicial o extrajudicial.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenModal}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-gold-500 hover:from-amber-600 hover:to-gold-600 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>Solicitar propuesta para mi bufete</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-legal-950 border border-legal-800 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>3 Especialidades de Alta Rentabilidad</span>
              </h3>

              <div className="space-y-4">
                {verticals.map((v, index) => {
                  const Icon = v.icon;
                  return (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-legal-900/80 border border-legal-800 flex items-start gap-4 transition-all hover:border-blue-500/40"
                    >
                      <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 text-sm mb-1">{v.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-800/30 flex items-center justify-between text-xs text-blue-300">
                <span>Rendimiento medio en Google Ads:</span>
                <strong className="text-white text-sm font-bold">-48% en coste por caso firmado</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
