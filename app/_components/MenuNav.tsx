/** @format */

import Link from 'next/link';

export default function MenuNav() {
  return (
    <header className="hidden lg:block">
      <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg border-b border-white/2">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/#" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Bejjani Audit"
                className="h-12 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex-1 flex justify-center">
              <ul className="flex items-center gap-12">
                <li>
                  <Link
                    href="/services"
                    className="text-base font-semibold text-gray-600 hover:text-primary transition-all duration-300 relative group py-2"
                  >
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-base font-semibold text-gray-600 hover:text-primary transition-all duration-300 relative group py-2"
                  >
                    About us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-base font-semibold text-gray-600 hover:text-primary transition-all duration-300 relative group py-2"
                  >
                    Contact us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/forms"
                    className="text-base font-semibold text-gray-600 hover:text-primary transition-all duration-300 relative group flex items-center gap-1.5 py-2"
                  >
                    Forms
                    <svg
                      className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact Section */}
            <div className="flex items-center gap-6">
              <a
                href="tel:76751480"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-medium">+(961) 76 751 480</span>
              </a>

              <a
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get a quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
