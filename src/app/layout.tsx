import type { Metadata, Viewport } from 'next';
import './globals.css';
import SEOHead from '../components/SEOHead';

export const metadata: Metadata = {
  title: 'Landing Pages para Abogados de Accidentes | Servicio de Marketing Digital',
  description: 'Tus campañas de Google Ads pierden clientes por usar webs lentas. Optimiza la captación de accidentados hoy con una landing monoproducto de alta conversión.',
  keywords: [
    'landing page abogados accidentes',
    'marketing juridico accidentes de trafico',
    'captacion indemnizaciones trafico',
    'Google Ads bufetes abogados',
    'CRO para despachos de abogados',
    'landing monoproducto legal',
  ],
  authors: [{ name: 'Servicio de Marketing Digital', url: 'https://serviciodemarketingdigital.com' }],
  metadataBase: new URL('https://landing-03-abogados.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Landing Pages para Abogados de Accidentes e Indemnizaciones',
    description: 'Optimiza la captación de accidentados en Google Ads con una landing page de alta velocidad y filtro para tu equipo.',
    url: 'https://landing-03-abogados.vercel.app',
    siteName: 'Servicio de Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Servicio de Marketing Digital - Landing Pages para Bufetes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages para Bufetes de Indemnizaciones',
    description: 'Multiplica la captación de accidentados en Google Ads reduciendo costes por caso cerrado.',
    images: ['/LOGO.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#070d1e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <SEOHead />
      </head>
      <body className="bg-legal-950 text-slate-100 min-h-screen selection:bg-amber-500 selection:text-slate-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
