/** @format */
'use client';

import Link from 'next/link';
import { useState } from 'react';

// Form categories with Arabic names first, English second
const formCategories = [
  {
    folderName: 'ministry-of-finance',
    title: 'نماذج وزارة المالية',
    titleEn: 'Ministry of Finance Forms',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    forms: [
      {
        nameAr:
          'التصريح الشخصي لضريبة الرواتب والأجور للمستخدم الذي يعمل في عدة مؤسسات - ر8',
        nameEn: 'Personal Salary Tax Declaration - R8',
        fileName:
          'personal-declaration-salary-wage-tax-multiple-institutions-r8.pdf',
      },
      {
        nameAr: 'إعلام بالتفرغ عن حصص في شركات محدودة المسؤولية - د6-ش',
        nameEn: 'LLC Shares Disposal Notice - D6-S',
        fileName: 'notice-disposal-shares-limited-liability-companies-d6-s.pdf',
      },
      {
        nameAr: 'تعريف شريك او مساهم او صاحب حق اقتصادي - م2',
        nameEn: 'Partner/Shareholder Identification - M2',
        fileName:
          'identification-partner-shareholder-beneficial-right-holder-m2.pdf',
      },
      {
        nameAr: 'اعتراض على التكليف بالضريبة والأخطاء المادية - ك13',
        nameEn: 'Tax Assessment Objection - K13',
        fileName: 'objection-tax-assessment-material-errors-k13.pdf',
      },
      {
        nameAr: 'تصريح تعديل معلومات مؤسسات فردية ومهن - م5',
        nameEn: 'Individual Business Info Modification - M5',
        fileName:
          'declaration-modifying-information-individual-establishments-professions-m5.pdf',
      },
      {
        nameAr: 'طلب بدل عن ضائع شهادة تسجيل - د2',
        nameEn: 'Lost Registration Certificate Replacement - D2',
        fileName: 'request-replacement-lost-registration-certificate-d2.pdf',
      },
      {
        nameAr: 'تصريح للاستفادة من تنزيل سكن المالك - ك6',
        nameEn: 'Owner Housing Deduction Declaration - K6',
        fileName: 'declaration-benefit-owner-housing-deduction-k6.pdf',
      },
      {
        nameAr: 'مباشرة عمل مؤسسات فردية ومهن - م10',
        nameEn: 'Individual Business Commencement - M10',
        fileName:
          'commencement-work-individual-establishments-professions-m10.pdf',
      },
      {
        nameAr: 'طلب إعلام بالرقم الشخصي - د1',
        nameEn: 'Personal Number Notification - D1',
        fileName: 'request-personal-number-notification-d1.pdf',
      },
      {
        nameAr: 'تعهد لوزارة المالية عند مباشرة العمل',
        nameEn: 'Ministry of Finance Undertaking',
        fileName: 'undertaking-ministry-finance-commencement-work.pdf',
      },
      {
        nameAr: 'بيان معلومات من المستخدم الأجير الى رب العمل - ر4',
        nameEn: 'Employee Information Statement - R4',
        fileName: 'information-statement-employee-worker-employer-r4.pdf',
      },
      {
        nameAr: 'كتاب طلب تسجيل مستخدمين أجراء - ر3-1',
        nameEn: 'Employee Registration Request Letter - R3-1',
        fileName: 'letter-requesting-registration-employees-workers-r3-1.pdf',
      },
      {
        nameAr: 'طلب براءة ذمة مالية - د7',
        nameEn: 'Financial Clearance Certificate - D7',
        fileName: 'request-financial-clearance-certificate-d7.pdf',
      },
      {
        nameAr: 'طلب براءة ذمة عقارية - د8',
        nameEn: 'Real Estate Clearance Certificate - D8',
        fileName: 'request-real-estate-clearance-certificate-d8.pdf',
      },
      {
        nameAr: 'بيان بصاحب الحق الاقتصادي - م18',
        nameEn: 'Beneficial Owner Statement - M18',
        fileName: 'statement-beneficial-right-holder-m18.pdf',
      },
      {
        nameAr: 'تصريح تعديل معلومات شركات - م4',
        nameEn: 'Company Information Modification - M4',
        fileName: 'declaration-modifying-company-information-m4.pdf',
      },
      {
        nameAr: 'تصريح توقف عن العمل - م6',
        nameEn: 'Work Cessation Declaration - M6',
        fileName: 'declaration-work-cessation-m6.pdf',
      },
      {
        nameAr: 'طلب تسجيل مستخدم أجير جديد - ر3',
        nameEn: 'New Employee Registration - R3',
        fileName: 'request-registration-new-employee-worker-r3.pdf',
      },
      {
        nameAr: 'مباشرة عمل شركات - م1',
        nameEn: 'Company Work Commencement - M1',
        fileName: 'commencement-work-companies-m1.pdf',
      },
      {
        nameAr: 'تعريف شخصي - م11',
        nameEn: 'Personal Identification - M11',
        fileName: 'personal-identification-m11.pdf',
      },
    ],
  },
  {
    folderName: 'vat-forms',
    title: 'نماذج الضريبة على القيمة المضافة',
    titleEn: 'Value Added Tax Forms',
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
    forms: [
      {
        nameAr: 'استمارة استيراد تصدير',
        nameEn: 'Import Export Form',
        fileName:
          'https://m8j2izfiyuradbbi.public.blob.vercel-storage.com/Value%20Added%20Tax%20Forms/import-export-form.pdf',
      },
      {
        nameAr:
          'بيان بمدى وجود نشاط مترابط او مكمل لنشاط الشركة موضوع التسجيل ق12-1',
        nameEn: 'Statement of Related or Complementary Activities Q12-1',
        fileName:
          'https://m8j2izfiyuradbbi.public.blob.vercel-storage.com/Value%20Added%20Tax%20Forms/statement-related-complementary-activities-q12-1.pdf',
      },
      {
        nameAr: 'بيان مفصل برقم الاعمال ق11-1',
        nameEn: 'Detailed Business Number Statement Q11-1',
        fileName:
          'https://m8j2izfiyuradbbi.public.blob.vercel-storage.com/Value%20Added%20Tax%20Forms/detailed-business-number-statement-q11-1.pdf',
      },
      {
        nameAr: 'تعهد',
        nameEn: 'Commitment',
        fileName:
          'https://m8j2izfiyuradbbi.public.blob.vercel-storage.com/Value%20Added%20Tax%20Forms/commitment.pdf',
      },
      {
        nameAr: 'طلب الغاء تسجيل في الضريبة على القيمة المضافة ق2-1',
        nameEn: 'VAT Registration Cancellation Request Q2-1',
        fileName:
          'https://m8j2izfiyuradbbi.public.blob.vercel-storage.com/Value%20Added%20Tax%20Forms/vat-registration-cancellation-request-q2-1.pdf',
      },
      {
        nameAr: 'طلب تسجيل في الضريبة على القيمة المضافة ق1-1',
        nameEn: 'VAT Registration Request Q1-1',
        fileName:
          'https://m8j2izfiyuradbbi.public.blob.vercel-storage.com/Value%20Added%20Tax%20Forms/vat-registration-request-q1-1.pdf',
      },
    ],
  },
  {
    folderName: 'social-security-employers',
    title: 'نماذج الضمان الاجتماعي الخاصة بأصحاب العمل',
    titleEn: 'Social Security Forms for Employers',
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
    forms: [
      {
        nameAr: 'اعلام عن استخدام او ترك اجير',
        nameEn: 'Notice of Employment or Termination',
        fileName: 'notice-employment-termination-employee.pdf',
      },
      {
        nameAr: 'افادة عمل',
        nameEn: 'Work Certificate',
        fileName: 'work-certificate.pdf',
      },
      {
        nameAr: 'التصريح الاسمي السنوي',
        nameEn: 'Annual Nominal Declaration',
        fileName: 'annual-nominal-declaration.pdf',
      },
      {
        nameAr: 'تصريح استخدام اجير',
        nameEn: 'Employee Employment Declaration',
        fileName: 'employee-employment-declaration.pdf',
      },
      {
        nameAr: 'تصريح بعدم استخدام اجراء',
        nameEn: 'Declaration of Non-Employment',
        fileName: 'declaration-non-employment-workers.pdf',
      },
      {
        nameAr: 'تصريح عن الزوجة',
        nameEn: 'Declaration about Spouse',
        fileName: 'declaration-about-spouse.pdf',
      },
      {
        nameAr: 'جدول الاشتراكات عن التصريح الاسمي السنوي',
        nameEn: 'Annual Declaration Subscription Schedule',
        fileName: 'subscription-schedule-annual-nominal-declaration.pdf',
      },
      {
        nameAr: 'جدول الاشتراكات',
        nameEn: 'Subscription Schedule',
        fileName: 'subscription-schedule.pdf',
      },
      {
        nameAr: 'طلب انتساب رب عمل الى الضمان',
        nameEn: 'Employer Registration Request',
        fileName: 'request-employer-registration-social-security.pdf',
      },
      {
        nameAr: 'طلب براءة ذمة ضمان',
        nameEn: 'Social Security Clearance Request',
        fileName: 'request-social-security-clearance-certificate.pdf',
      },
      {
        nameAr: 'طلب تسجيل اجير يعمل عند عدة ارباب عمل',
        nameEn: 'Multi-Employer Employee Registration',
        fileName: 'request-registration-employee-multiple-employers.pdf',
      },
      {
        nameAr: 'نقل استمرارية عمل اجير أو أجراء',
        nameEn: 'Employee Work Continuity Transfer',
        fileName: 'transfer-work-continuity-employees.pdf',
      },
    ],
  },
  {
    folderName: 'social-security-investigation',
    title: 'نماذج الضمان الاجتماعي الخاصة بالتحقيق الاجتماعي',
    titleEn: 'Social Security Investigation Forms',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    forms: [
      {
        nameAr: 'افادة لمن يهمه الأمر - إفادة عمل وراتب',
        nameEn: 'Work and Salary Certificate',
        fileName: 'certificate-whom-concern-work-salary.pdf',
      },
      {
        nameAr: 'طلب اجراء تحقيق اجتماعي لاستفادة المضمون عن الوالد والوالدة',
        nameEn: 'Social Investigation for Parent Coverage',
        fileName: 'request-social-investigation-beneficiary-father-mother.pdf',
      },
      {
        nameAr: 'طلب اجراء تحقيق اجتماعي لاستفادة المضمونة عن اولادها',
        nameEn: 'Social Investigation for Children Coverage',
        fileName:
          'request-social-investigation-female-beneficiary-children.pdf',
      },
      {
        nameAr: 'طلب اجراء تحقيق اجتماعي لاستفادة المضمونة عن زوجها',
        nameEn: 'Social Investigation for Spouse Coverage',
        fileName: 'request-social-investigation-female-beneficiary-husband.pdf',
      },
      {
        nameAr: 'طلب تجديد تحقيق اجتماعي',
        nameEn: 'Social Investigation Renewal',
        fileName: 'request-social-investigation-renewal.pdf',
      },
    ],
  },
  {
    folderName: 'social-security-end-of-service',
    title: 'نماذج الضمان الاجتماعي الخاصة بتعويض نهاية الخدمة',
    titleEn: 'End of Service Compensation Forms',
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
    forms: [
      {
        nameAr: 'افادة بالكسب او الاجر الاخير',
        nameEn: 'Last Earnings Certificate',
        fileName: 'certificate-last-earnings-wages.pdf',
      },
      {
        nameAr: 'المستندات الواجب تقديمها لتصفية تعويض نهاية الخدمة',
        nameEn: 'Required Documents for Settlement',
        fileName: 'documents-required-end-service-compensation-settlement.pdf',
      },
      {
        nameAr: 'تفويض لتسديد مبالغ مستحقة تعويض نهاية خدمة',
        nameEn: 'Payment Authorization',
        fileName:
          'authorization-payment-due-amounts-end-service-compensation.pdf',
      },
      {
        nameAr: 'دعوة لتحديد الاجور والاشتراكات',
        nameEn: 'Wages and Contributions Notice',
        fileName: 'notice-determine-wages-contributions.pdf',
      },
      {
        nameAr: 'طلب تصفية تعويض نهاية خدمة',
        nameEn: 'Settlement Request',
        fileName: 'request-end-service-compensation-settlement.pdf',
      },
    ],
  },
];

export default function FormsPage() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (folderName: string) => {
    setOpenSections((prev) =>
      prev.includes(folderName)
        ? prev.filter((name) => name !== folderName)
        : [...prev, folderName]
    );
  };

  const handleDownload = (folderName: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (folderName: string, fileName: string) => {
    window.open(fileName, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Forms & Documents</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8"
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Forms & Documents&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="inline-block text-2xl sm:text-3xl lg:text-4xl text-white/80">
                النماذج والوثائق
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Download essential Lebanese tax, social security, and finance
              forms. Access all the official documents you need for your
              business compliance and legal requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="space-y-6">
            {formCategories.map((category) => {
              const isOpen = openSections.includes(category.folderName);

              return (
                <div
                  key={category.folderName}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleSection(category.folderName)}
                    className="w-full pl-4 pr-6 py-4 xs:pl-6 xs:pr-10 xs:py-4 lg:pl-8 lg:pr-12 lg:py-6 grid grid-rows-1 grid-cols-[100%_1fr] justify-items-end hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex w-full justify-between">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {category.icon}
                      </div>
                      <div className="text-right self-center pr-2 xs:pr-4">
                        <h2 className="text-[16px] xs:text-lg lg:text-2xl font-bold text-gray-900">
                          {category.title}
                        </h2>
                        <p className="text-[12px] xs:text-sm lg:text-base text-gray-600">
                          {category.titleEn}
                        </p>
                        <p className="text-xs lg:text-sm text-gray-500">
                          {category.forms.length} forms
                        </p>
                      </div>
                    </div>
                    <svg
                      className={`w-4 h-4 xs:w-5 xs:h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
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
                  </button>

                  {/* Forms List */}
                  {isOpen && (
                    <div className="border-t border-gray-300/50">
                      <div className="px-2 xs:px-3 xs:px-6 lg:px-8 py-4 lg:py-6 space-y-3">
                        {category.forms.map((form, index) => (
                          <div
                            key={index}
                            className="flex gap-2 items-center justify-between py-2 pr-6 xs:py-4 xs:pr-8 xs:pl-4 lg:py-5 lg:pr-10 lg:pl-6 bg-gray-200/40 xs:bg-gray-100/40 rounded-xl hover:bg-gray-50/50 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0 order-1">
                              <svg
                                className="hidden xs:inline-block w-6 h-6 lg:w-7 lg:h-7 text-red-600 flex-shrink-0"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="#dc2626"
                                  strokeWidth="2"
                                  d="M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M3 12h1.5c2 0 2.25 1.25 2.25 2s-.25 2-2.25 2H3.25v2H3v-6Zm6.5 6v-6h1.705c1.137 0 2.295.5 2.295 3s-1.158 3-2.295 3H9.5Zm7 1v-7h4m-4 3.5h3"
                                />
                              </svg>
                              <div className="min-w-0 flex-1 text-right">
                                <h3 className="font-medium lg:font-medium text-gray-900 lg:text-xl">
                                  {form.nameAr}
                                </h3>
                              </div>
                            </div>

                            <div className="flex gap-1 ml-2 flex-shrink-0">
                              {/* Preview Button */}
                              <button
                                onClick={() =>
                                  handlePreview(
                                    category.folderName,
                                    form.fileName
                                  )
                                }
                                className="p-2 lg:p-3 text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                                title="Preview"
                              >
                                <svg
                                  className="w-4 h-4 lg:w-5 lg:h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              </button>
                              {/* Download Button */}
                              <button
                                onClick={() =>
                                  handleDownload(
                                    category.folderName,
                                    form.fileName
                                  )
                                }
                                className="p-2 lg:p-3 text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg rounded-lg transition-all"
                                title="Download"
                              >
                                <svg
                                  className="w-4 h-4 lg:w-5 lg:h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-blue-800 text-sm">
                Need help? Contact us at{' '}
                <a
                  href="tel:76751480"
                  className="font-semibold hover:underline"
                >
                  76 751 480
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
