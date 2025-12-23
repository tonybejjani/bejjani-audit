/** @format */

import './_styles/globals.css';
import { Poppins } from 'next/font/google';
import SvgSprite from './_components/Svgsprite';
import MenuMobile from './_components/MenuMobile';
// import Loader from './_components/Loader';
import MenuNav from './_components/MenuNav';
import { Metadata } from 'next';
import Footer from './_components/Footer';
export const metadata: Metadata = {
  title: {
    template: `%s | Roy Bejjani - Audit Firm`,
    default: `Roy Bejjani - Professional Accounting & Audit Services`,
  },
  description:
    'Roy Bejjani Audit Firm provides professional accounting, tax, and audit solutions. Expert financial services to help grow your business with confidence and compliance.',
  keywords: [
    'audit firm',
    'accounting services',
    'tax consulting',
    'financial audit',
    'Roy Bejjani',
    'Bejjani Audit',
    'business accounting',
    'financial compliance',
    'bookkeeping',
    'tax preparation',
    'financial advisory',
  ],
  authors: [{ name: 'Roy Bejjani Audit Firm' }],
  creator: 'Roy Bejjani',
  publisher: 'Roy Bejjani Audit Firm',
  category: 'Professional Services',
  classification: 'Business',

  // Open Graph metadata for social media
  openGraph: {
    title: 'Roy Bejjani - Professional Accounting & Audit Services',
    description:
      'Expert accounting, tax, and audit solutions to grow your business with confidence and compliance.',
    url: 'https://bejjani-audit.com',
    siteName: 'Roy Bejjani Audit Firm',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Roy Bejjani Audit Firm - Professional Accounting Services',
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Roy Bejjani - Professional Accounting & Audit Services',
    description:
      'Expert accounting, tax, and audit solutions for your business.',
    images: ['/twitter-image.jpg'],
    creator: '@roybejjaniaudit',
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for search engines
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },

  // Manifest for PWA (if needed)
  manifest: '/manifest.json',

  // Additional meta tags
  other: {
    'business:contact_data:street_address': 'Your Business Address',
    'business:contact_data:locality': 'Your City',
    'business:contact_data:region': 'Your Region',
    'business:contact_data:postal_code': 'Your Postal Code',
    'business:contact_data:country_name': 'Your Country',
    'business:contact_data:phone_number': '+1-76-751-480',
    'business:contact_data:website': 'https://bejjani-audit.com',
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} `}>
      <body className={`${poppins.className} text-gray-700 antialiased`}>
        {/* <Loader /> */}
        <SvgSprite />
        <MenuMobile />
        <MenuNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
