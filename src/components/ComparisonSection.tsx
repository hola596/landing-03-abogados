'use client';

import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ComparisonProps {
  onOpenModal: () => void;
}

export default function ComparisonSection({ onOpenModal }: ComparisonProps) {
  const comparisonData = [
    {
      metric: 'Respuesta ante usuario accidentado en móvil',
      traditional: 'Web institucional con biografía de socios, noticias y menú saturado de especialidades',
      monoproduct: 'Embudo de respuesta directa enfocado 100% en la indemnización máxima por sus lesiones',
    },
    {
      metric: 'Velocidad de carga (LCP)',
      traditional: '> 4.5 segundos (alta tasa de rebote en búsquedas urgentes desde el hospital o domicilio)',
      monoproduct: '< 0.8 segundos con arquitectura moderna sin dependencias lentas',
    },
    {
      metric: 'Filtrado de casos inviables',
      traditional: 'Cualquier consulta satura la centralita sin distinguir culpas ni plazos legales',
      monoproduct: 'Filtro inicial que califica la existencia de lesiones y viabilidad antes del contacto',
    },
    {
      metric: 'Retorno de inversión en Google Ads',
      traditional: 'Costes por lead desorbitados (> €90/lead) debido a fugas de tráfico',
      monoproduct: 'Coste por caso cualificado reducido a más de la mitad gracias a la alta conversión',
    },
    {
      metric: 'Escalabilidad del bufete',
      traditional: 'Comerciales y abogados pierden horas atendiendo consultas sin base médica ni atestado',
      monoproduct: 'Equipo legal y peritos reciben expedientes pre-estructurados con datos claros',
    },
  ];

  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-gold-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
          Propuesta de Valor y Rendimiento
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Web Tradicional de Bufete vs. Landing Específica de Indemnizaciones
        </h2>
        <p className="mt-4 text-base text-slate-300">
          En el nicho legal de accidentes, la inmediatez y la claridad definen quién firma el caso. Comparativa entre un sitio corporativo disperso y una infraestructura de alta conversión.
        </p>
      </div>

      <div className="hidden md:block overflow-hidden rounded-2xl border border-legal-800 bg-legal-900/60 shadow-2xl backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-legal-800 bg-legal-950/80">
              <th className="p-5 text-sm font-semibold text-slate-400 w-1/4">Factor Crítico</th>
              <th className="p-5 text-sm font-semibold text-red-400 w-3/8">Web Corporativa Tradicional</th>
              <th className="p-5 text-sm font-bold text-emerald-400 bg-emerald-950/20 w-3/8">
                Landing Monoproducto Bufete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-legal-800/70 text-sm">
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-5 font-semibold text-slate-200">{row.metric}</td>
                <td className="p-5 text-slate-400">
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                </td>
                <td className="p-5 text-slate-100 bg-emerald-950/10 font-medium">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.monoproduct}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {comparisonData.map((item, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-legal-800 bg-legal-900/70 space-y-3">
            <h3 className="font-bold text-gold-400 text-sm">{item.metric}</h3>
            <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/30 flex items-start gap-2 text-xs text-slate-300">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-red-300 block mb-0.5">Web Corporativa:</span>
                {item.traditional}
              </div>
            </div>
            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-start gap-2 text-xs text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-emerald-300 block mb-0.5">Landing Monoproducto:</span>
                {item.monoproduct}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={onOpenModal}
          className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm sm:text-base transition-colors group"
        >
          <span>Comprobar si tu despacho califica para este sistema</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
