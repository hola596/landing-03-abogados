import React from 'react';
import { faqs } from '../data/faqs';

export default function SEOHead() {
  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Servicio de Marketing Digital - Landing Pages para Bufetes de Accidentes',
    description: 'Landing pages de alta velocidad y captación para bufetes de abogados especialistas en indemnización por accidente de tráfico, laboral y negligencia médica.',
    url: 'https://landing-03-abogados.vercel.app',
    email: 'hola@serviciodemarketingdigital.com',
    priceRange: '€€€',
    areaServed: 'ES',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landing Pages Monoproducto Legal B2B',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page Monoproducto para Reclamación de Indemnizaciones',
            description: 'Embudo de conversión de alta velocidad para Google Ads de abogados de accidentes.',
          },
        },
      ],
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Estructura de Captación Legal en Google Ads',
    description: 'Video explicativo de la arquitectura de una landing page monoproducto para bufetes jurídicos.',
    thumbnailUrl: 'https://img.youtube.com/vi/M5_QicGRh-s/maxresdefault.jpg',
    uploadDate: '2026-09-01T08:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/M5_QicGRh-s',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />
    </>
  );
}
