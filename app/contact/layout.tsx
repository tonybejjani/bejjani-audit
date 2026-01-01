/** @format */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Roy Bejjani Audit Firm',
  description:
    'Get in touch with Roy Bejjani Audit Firm for professional accounting, tax, and audit services. Contact our expert team for a consultation. Call +961-76-751-480 or fill out our contact form.',
  keywords: [
    'contact accountant',
    'contact audit firm',
    'Lebanon accounting firm',
    'get a quote',
    'accounting consultation',
    'audit consultation',
    'Roy Bejjani contact',
  ],
  openGraph: {
    title: 'Contact Us | Roy Bejjani Audit Firm',
    description:
      'Get in touch with Roy Bejjani Audit Firm for professional accounting, tax, and audit services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Roy Bejjani Audit Firm',
    description:
      'Get in touch with Roy Bejjani Audit Firm for professional accounting services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
