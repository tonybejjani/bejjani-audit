/** @format */

import bg from '../public/bg.jpg';
import profilePicture from '../public/roy-bejjani.jpg';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Accounting & Audit Services | Roy Bejjani Audit Firm',
  description:
    'Roy Bejjani Audit Firm provides expert accounting, tax, audit, and business advisory services in Lebanon. Licensed certified auditor in Lebanon. Get professional financial solutions for your business.',
  keywords: [
    'accounting services in Lebanon',
    'audit firms in Lebanon',
    'audit firm in Lebanon',
    'audit firms Lebanon',
    'audit firm Lebanon',
    'tax consulting',
    'financial audit',
    'Roy Bejjani',
    'Bejjani Audit',
    'Public Accountant in Lebanon',
    'business accounting',
    'financial compliance',
    'bookkeeping services',
    'tax preparation',
    'financial advisory',
    'certified auditor',
    'payroll services',
    'financial reporting',
  ],
  openGraph: {
    title: 'Professional Accounting & Audit Services | Roy Bejjani Audit Firm',
    description:
      'Expert accounting, tax, audit, and business advisory services in Lebanon. Licensed certified auditor in Lebanon.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Accounting & Audit Services | Roy Bejjani Audit Firm',
    description:
      'Expert accounting, tax, audit, and business advisory services in Lebanon. Licensed certified auditor in lebanon.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function page() {
  return (
    <>
      {/*/ Hero Section */}
      <section className="relative h-screen text-white overflow-hidden">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="Audit Firm accountants meeting in the office"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-dark/60 "></div>

        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="flex justify-center items-center h-full w-full relative z-10 text-center p-5">
          <div className="max-w-80 sm:max-w-120 lg:max-w-200 text-center">
            {/* Trust badge */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/20">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold">
                  Licensed Public Accountant in Lebanon
                </span>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold leading-[1.2] mb-6">
                Professional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-200">
                  Audit & Consultancy
                </span>
                Services
              </h1>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-normal text-white/90">
                Efficient accounting, tax, and audit solutions to grow your
                business with confidence and compliance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center mb-12">
              <a
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-900 font-semibold text-sm sm:text-base rounded-lg hover:bg-gray-100 hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-white min-w-35 sm:min-w-40"
              >
                Get Free Consultation
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="tel:76751480"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-semibold text-sm sm:text-base rounded-lg border-2 border-white/50 hover:border-white hover:bg-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 min-w-35 sm:min-w-40"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
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
                <span className="hidden xs:inline">+(961) 76 751 480</span>
                <span className="xs:hidden">Contact us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services">
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional accounting and audit solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Audit & Assurance */}
            <a
              href="/services/audit"
              className="block bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Audit & Assurance
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Independent audit services ensuring compliance and financial
                transparency.
              </p>
            </a>

            {/* Accounting Services */}
            <a
              href="/services/accounting"
              className="block bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Accounting Services
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Comprehensive bookkeeping and financial management solutions.
              </p>
            </a>

            {/* Tax Services */}
            <a
              href="/services/tax"
              className="block bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Tax Services
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Expert tax preparation and planning to optimize your financial
                position.
              </p>
            </a>

            {/* Business Advisory */}
            <a
              href="/services/advisory"
              className="block bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <svg
                  className="w-10 h-10"
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Business Advisory
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Strategic financial guidance to help grow your business
                sustainably.
              </p>
            </a>

            {/* Payroll Management */}
            <a
              href="/services/payroll"
              className="block bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Payroll Management
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Efficient payroll processing and employee benefit
                administration.
              </p>
            </a>

            {/* Financial Reporting */}
            <a
              href="/services/reporting"
              className="block bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Financial Reporting
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Detailed financial analysis and reporting for informed business
                decisions.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className=" py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-8 min-[1312px]:grid-cols-3  gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left lg:col-span-5 min-[1312px]:col-span-2">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm">
                  About Us
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl min-[1312px]:text-5xl font-bold text-gray-900 mb-8">
                Meet Roy Bejjani,
                <span className="block text-primary mt-2">
                  Your Trusted Public Accountant in lebanon
                </span>
              </h2>

              {/* */}
              <div className="flex flex-col items-center lg:flex-row lg:items-start md:gap-x-12 ">
                <div className="w-72  md:min-w-72  mb-8 lg:hidden">
                  <Image
                    src={profilePicture}
                    placeholder="blur"
                    quality={80}
                    className="object-cover object-top border-6 rounded-md border-gray-300 p-2"
                    alt="Audit Firm accountants meeting in the office"
                  />
                </div>
                <div className="">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    With over 20 years of experience in accounting and auditing,
                    Roy Bejjani founded this firm with a vision to provide
                    exceptional financial services to businesses across Lebanon.
                  </p>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    As a Licensed Certified Public Auditor in Lebanon, Roy
                    combines technical expertise with a deep understanding of
                    business needs, helping clients navigate complex financial
                    landscapes with confidence.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-center  lg:justify-start items-start gap-2">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4 text-primary"
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
                      <p className="text-gray-700">
                        <span className="font-semibold">
                          Licensed Public Accountant in Lebanon
                        </span>{' '}
                        with extensive audit and accounting expertise
                      </p>
                    </div>
                    <div className="flex justify-center lg:justify-start items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4 text-primary"
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
                      <p className="text-gray-700 ">
                        <span className="font-semibold">20+ years</span> of
                        professional experience serving diverse industries
                      </p>
                    </div>
                    <div className="flex justify-center lg:justify-start items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-self-center-safe mt-1">
                        <svg
                          className="w-4 h-4 text-primary"
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
                      <p className="text-gray-700">
                        <span className="font-semibold">Commitment</span> to
                        accuracy, integrity, and client success
                      </p>
                    </div>
                  </div>

                  {/* Stats Laptops/Desktop */}
                  <div className="hidden lg:flex lg:gap-x-8 mb-8">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
                      <div className="text-3xl lg:text-4xl min-[1312px]:text-5xl font-bold text-primary mb-2">
                        20+
                      </div>
                      <p className="text-gray-700 font-medium">
                        Years of Experience
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
                      <div className="text-3xl lg:text-4xl min-[1312px]:text-5xl font-bold text-primary mb-2">
                        6
                      </div>
                      <p className="text-gray-700 font-medium">
                        Professional Services
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 text-center">
                      <div className="text-3xl lg:text-4xl min-[1312px]:text-5xl font-bold text-primary mb-2">
                        Auditor
                      </div>
                      <p className="text-gray-700 font-medium">
                        Licensed & Certified
                      </p>
                    </div>
                  </div>

                  {/* Stats/Features Hand-Held Devices  */}
                  <div className="flex flex-col col-y-4 gap-6 mb-8  min-[500px]:flex-row min-[500px]:flex-wrap min-[500px]:justify-center lg:hidden ">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                        20+
                      </div>
                      <p className="text-gray-700 font-medium">
                        Years of Experience
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                        6
                      </div>
                      <p className="text-gray-700 font-medium">
                        Professional Services
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 text-center">
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                        Auditor
                      </div>
                      <p className="text-gray-700 font-medium">
                        Licensed & Certified
                      </p>
                    </div>
                  </div>
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
                  >
                    Learn More About Us
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Image Laptop/Desktop Devices viewport */}
            <div className="hidden lg:block justify-self-end-safe ">
              <div className="min-w-84 max-w-96">
                <Image
                  src={profilePicture}
                  placeholder="blur"
                  quality={90}
                  className="object-cover object-top border-8 rounded-md shadow-inner border-gray-300    blur-[0.2px] p-2"
                  alt="Audit Firm accountants meeting in the office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you streamline your financial processes and achieve your
            business goals with our expert accounting and audit services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold text-base rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 min-w-48"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:76751480"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold text-base rounded-lg border-2 border-white/50 hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 min-w-48"
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
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
