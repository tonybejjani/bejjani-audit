/** @format */
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MenuMobile() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function toggleMenu() {
    if (openMenu) {
      setIsClosing(true);
      setTimeout(() => {
        setOpenMenu(false);
        setIsClosing(false);
      }, 300);
    } else {
      setOpenMenu(true);
    }
  }

  return (
    <div className="lg:hidden">
      {/* Mobile Header with Glassmorphism */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg border-b border-white/20">
        <div className="px-4 py-5 flex items-center justify-between">
          <Link href="/#" className="text-xl font-bold text-primary">
            <img src="/logo.svg" alt="Bejjani Audit" className="h-12 w-auto" />
          </Link>
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1.5 p-3 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div
              className={`h-0.5 w-6 bg-primary rounded-full transition-all duration-300 ${
                openMenu ? 'rotate-45 translate-y-2' : ''
              }`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-primary rounded-full transition-all duration-300 ${
                openMenu ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-primary rounded-full transition-all duration-300 ${
                openMenu ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Enhanced Glassmorphism */}
      {openMenu && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-45 bg-primary/20 backdrop-blur-xl ${
              isClosing ? 'animate-fade-out' : ''
            }`}
            onClick={toggleMenu}
          ></div>

          {/* Side Panel */}
          <div
            className={`fixed inset-y-0 right-0 w-80 max-w-full z-50 ${
              isClosing ? 'animate-menu-slide-out' : 'animate-menu-slide-in'
            }`}
          >
            <div className="h-full backdrop-blur-3xl bg-gradient-to-br from-primary/95 via-primary-dark/90 to-blue-800/95 backdrop-saturate-150 shadow-2xl border-l border-white/20">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20 backdrop-blur-sm bg-white/5">
                <div className="text-xl font-bold text-white">
                  Bejjani Audit
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 hover:rotate-90 transition-all duration-300 text-white"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <nav className="p-6 space-y-2">
                <Link
                  href="/services"
                  onClick={toggleMenu}
                  className="flex items-center px-4 py-4 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group backdrop-blur-sm border border-transparent hover:border-white/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">Services</div>
                    <div className="text-white/60 text-sm">
                      Our professional solutions
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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
                </Link>

                <Link
                  href="/about"
                  onClick={toggleMenu}
                  className="flex items-center px-4 py-4 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group backdrop-blur-sm border border-transparent hover:border-white/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">About Us</div>
                    <div className="text-white/60 text-sm">
                      Learn about our expertise
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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
                </Link>

                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className="flex items-center px-4 py-4 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group backdrop-blur-sm border border-transparent hover:border-white/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">Contact Us</div>
                    <div className="text-white/60 text-sm">
                      Get in touch today
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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
                </Link>

                <Link
                  href="/forms"
                  onClick={toggleMenu}
                  className="flex items-center px-4 py-4 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group backdrop-blur-sm border border-transparent hover:border-white/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">Forms</div>
                    <div className="text-white/60 text-sm">
                      Download resources
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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
                </Link>
              </nav>

              {/* Contact Section */}
              {/* Contact Section */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 backdrop-blur-sm bg-white/5">
                <div className="space-y-2">
                  <a
                    href="tel:+96176751480"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 text-white/90 hover:text-white text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4"
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
                    <span>+(961) 76 751 480</span>
                  </a>

                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-white/20 to-blue-100/20 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:from-white/30 hover:to-blue-100/30 hover:scale-[1.02] transition-all duration-300 text-sm"
                  >
                    <span>Get a Quote</span>
                    <svg
                      className="w-3 h-3"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
