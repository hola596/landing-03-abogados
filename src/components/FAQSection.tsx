'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/faqs';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-gold-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Preguntas Frecuentes Jurídicas</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Dudas Frecuentes para Despachos y Abogados
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base">
          Información clave sobre tiempos, integración con CRM legal y protección de datos.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-legal-800 rounded-2xl bg-legal-900/60 overflow-hidden backdrop-blur-sm transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-legal-800/40"
              >
                <span className="font-bold text-base sm:text-lg text-slate-100">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-legal-800/60">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
