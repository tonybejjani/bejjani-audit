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
  metadataBase: new URL('https://bejjaniaudit.com'),
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
    url: 'https://bejjaniaudit.com',
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
    google:
      'google-site-verification=FqGZBhJEYimoR7s4PxoRpx46EhOMZqq--8LGC5efYPI',
  },

  // Manifest for PWA (if needed)
  manifest: '/manifest.json',

  // Additional meta tags
  other: {
    'business:contact_data:street_address':
      'Kaslik Highway, La Perla Center, 7th Floor, Sarba, Beirut, Lebanon',
    'business:contact_data:locality': 'Sarba',
    'business:contact_data:region': 'Keserwen',
    'business:contact_data:postal_code': '1200',
    'business:contact_data:country_name': 'Lebanon',
    'business:contact_data:phone_number': '+961-76-751-480',
    'business:contact_data:website': 'https://bejjaniaudit.com',
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
  // Schema.org structured data for LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'Roy Bejjani Audit Firm',
    description:
      'Professional accounting, tax, audit, and business advisory services in Lebanon.',
    url: 'https://bejjaniaudit.com',
    logo: 'https://bejjaniaudit.com/mono.jpg',
    image: 'https://bejjaniaudit.com/mono.jpg',
    telephone: '+961-76-751-480',
    email: 'info@bejjaniaudit.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Kaslik Highway, La Perla Center, 7th Floor, Sarba, Beirut, Lebanon',
      addressLocality: 'Sarba',
      addressRegion: 'Keserwen',
      postalCode: '1200',
      addressCountry: 'Lebanon',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.97762522469478',
      longitude: '35.61713458496597',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/bejjaniaudit',
      'https://www.linkedin.com/company/bejjaniaudit',
      'https://twitter.com/bejjaniaudit',
    ],
    founder: {
      '@type': 'Person',
      name: 'Roy Bejjani',
      jobTitle: 'Founder & Managing Partner',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Lebanon',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Accounting & Audit Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit & Assurance Services',
            description:
              'Independent audit services ensuring compliance and financial transparency.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Accounting Services',
            description:
              'Comprehensive bookkeeping and financial management solutions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tax Services',
            description: 'Expert tax preparation and planning services.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Advisory',
            description:
              'Strategic financial guidance and business consulting services.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Payroll Management',
            description:
              'Comprehensive payroll processing and employee benefit administration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Financial Reporting',
            description: 'Detailed financial analysis and reporting services.',
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${poppins.variable} `}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
