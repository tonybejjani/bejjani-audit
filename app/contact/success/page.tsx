/** @format */

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Message Sent Successfully | Roy Bejjani Audit Firm',
  description:
    'Thank you for contacting Roy Bejjani Audit Firm. Your message has been sent successfully and we will get back to you within 24 hours.',
  robots: {
    index: false, // Don't index this page
    follow: true,
  },
};

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8">
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Message Sent Successfully!
            </h1>
            <div className="text-lg text-gray-600 space-y-2">
              <p>
                Thank you for contacting <strong>Roy Bejjani Audit Firm</strong>
                .
              </p>
              <p>
                Your message has been received and we&apos;ll get back to you
                within <strong>24 hours</strong>.
              </p>
            </div>
          </div>

          {/* What happens next */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">
              What happens next?
            </h2>
            <ul className="text-sm text-blue-800 space-y-2 text-left">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  We&apos;ll review your message and service requirements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>A member of our team will contact you personally</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>We&apos;ll schedule a free consultation if needed</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-sm text-gray-600">
            <p className="mb-2">Need immediate assistance?</p>
            <div className="space-y-1">
              <p>
                📞{' '}
                <a href="tel:76751480" className="text-primary hover:underline">
                  +(961) 76 751 480
                </a>
              </p>
              <p>
                📧{' '}
                <a
                  href="mailto:info@bejjaniaudit.com"
                  className="text-primary hover:underline"
                >
                  info@bejjaniaudit.com
                </a>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 space-y-4">
            <Link
              href="/"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              ← Back to Homepage
            </Link>

            <Link
              href="/services"
              className="w-full flex justify-center py-3 px-6 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              Learn About Our Services
            </Link>
          </div>

          {/* Professional Touch */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              This message was sent from our secure contact form.
              <br />
              Your information is protected and will never be shared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
