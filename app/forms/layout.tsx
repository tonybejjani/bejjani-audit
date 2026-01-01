/** @format */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forms & Documents | Roy Bejjani Audit Firm',
  description:
    'Download essential tax and accounting forms for Lebanon. Ministry of Finance forms, tax declarations, and business documentation. Get the forms you need for compliance.',
  keywords: [
    'Lebanon tax forms',
    'Ministry of Finance forms',
    'tax declaration forms',
    'accounting forms',
    'business forms Lebanon',
    'tax documents',
    'compliance forms',
  ],
  openGraph: {
    title: 'Forms & Documents | Roy Bejjani Audit Firm',
    description:
      'Download essential tax and accounting forms for Lebanon. Ministry of Finance forms and business documentation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forms & Documents | Roy Bejjani Audit Firm',
    description: 'Download essential tax and accounting forms for Lebanon.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/forms',
  },
};

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
