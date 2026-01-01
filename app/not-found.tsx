/** @format */

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-primary/10 rounded-full">
            <svg
              className="w-16 h-16 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* 404 Title */}
        <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might
          have been moved, deleted, or doesn't exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go to Homepage
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            You might be interested in:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="text-sm text-primary hover:underline"
            >
              Our Services
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/about"
              className="text-sm text-primary hover:underline"
            >
              About Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/forms"
              className="text-sm text-primary hover:underline"
            >
              Forms & Documents
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
