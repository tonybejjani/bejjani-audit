/** @format */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function MenuNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const pathname = usePathname();

  const services = [
    { href: '/services/audit', label: 'Audit & Assurance' },
    { href: '/services/accounting', label: 'Accounting Services' },
    { href: '/services/tax', label: 'Tax Services' },
    { href: '/services/advisory', label: 'Business Advisory' },
    { href: '/services/payroll', label: 'Payroll Services' },
    { href: '/services/reporting', label: 'Financial Reporting' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="hidden lg:block">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md
          ${
            isScrolled
              ? 'min-h-18 py-2 px-4 lg:px-8 xl:px-12 2xl:px-16 bg-gradient-to-r from-blue-900/90 to-blue-600/90 shadow-lg border-b border-white/10'
              : 'min-h-20 py-4 px-4 lg:px-8 xl:px-12 2xl:px-16 bg-gradient-to-r from-blue-900 to-blue-600 shadow-md'
          }
        `}
      >
        <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto gap-2 xl:gap-4 2xl:gap-6">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/logo.png"
              alt="Bejjani Audit"
              className={` w-auto hover:scale-105 transition-all duration-300
                ${
                  isScrolled ? 'h-10 xl:h-14 2xl:h-16' : 'h-12 xl:h-16 2xl:h-18'
                }`}
            />
          </Link>

          {/* Navigation */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex gap-2 xl:gap-6 2xl:gap-12 text-white items-center m-0 p-0 list-none">
              {/* Home Link */}
              <li>
                <Link
                  href="/"
                  className={`tracking-wide font-medium text-xs xl:text-base px-2 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-md transition-all duration-200 hover:bg-white/10 hover:text-white ${
                    pathname === '/'
                      ? 'bg-white text-blue-900 font-semibold shadow border border-white/30'
                      : 'text-white/90'
                  } flex items-center gap-1 whitespace-nowrap`}
                >
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <Link
                  href="/services"
                  className={`tracking-wide font-medium text-xs xl:text-base px-2 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-md transition-all duration-200 hover:bg-white/10 hover:text-white ${
                    pathname.startsWith('/services')
                      ? 'bg-white text-blue-900 font-semibold shadow border border-white/30'
                      : 'text-white/90'
                  } flex items-center gap-1 whitespace-nowrap`}
                >
                  Services
                  <svg
                    className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200 ${
                      showServicesDropdown ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                {showServicesDropdown && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
                      <div className="py-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block px-4 py-3 text-sm xl:text-base transition-all duration-200 ${
                              pathname === service.href
                                ? 'bg-blue-50 text-blue-900 font-semibold border-l-4 border-blue-600'
                                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900 hover:border-l-4 hover:border-blue-400'
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Other Links */}
              {[
                { href: '/about', label: 'About us' },
                { href: '/contact', label: 'Contact us' },
                { href: '/forms', label: 'Forms', icon: true },
              ].map(({ href, label, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`tracking-wide font-medium text-xs xl:text-base px-2 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-md transition-all duration-200 hover:bg-white/10 hover:text-white ${
                      pathname === href
                        ? 'bg-white text-blue-900 font-semibold shadow border border-white/30'
                        : 'text-white/90'
                    } flex items-center gap-1 whitespace-nowrap`}
                  >
                    {label}
                    {icon && (
                      <svg
                        className="w-3 h-3 xl:w-5 xl:h-5 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <div className="flex items-center gap-1.5 xl:gap-3 2xl:gap-6 shrink-0">
            {/* Phone Number */}
            <a
              href="tel:+96176751480"
              className="flex items-center gap-1 xl:gap-2 text-xs xl:text-base font-semibold text-white bg-white/10 py-1.5 px-2 xl:py-2 xl:px-3 2xl:px-4 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-px whitespace-nowrap"
            >
              <svg
                className="w-3 h-3 xl:w-5 xl:h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden xl:inline">76 751 480</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Get a Quote Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-white to-blue-100 rounded-lg py-1.5 px-2.5 xl:py-3 xl:px-6 font-semibold tracking-wide text-blue-900 transition-all duration-300 text-xs xl:text-base shadow border border-white/30 hover:-translate-y-0.5 hover:shadow-lg hover:text-blue-800 whitespace-nowrap"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
