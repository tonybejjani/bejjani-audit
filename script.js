/** @format */
/* hamburger menu selectors */
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

/* header scroll selectors */
const headerEl = document.querySelector('.header');
const heroEl = document.querySelector('.hero');

/* smooth scrolling selectors */
const linkServices = document.querySelector('.nav__link-services');
const sectionServices = document.querySelector('.services');

const linkAbout = document.querySelector('.nav__link-about');
const sectionAbout = document.querySelector('.about');

/* Header Scroll Behavior */
let isScrolling = false;

function handleHeaderScroll() {
  const heroHeight = heroEl.offsetHeight;
  const scrollY = window.scrollY;

  // Add scrolled class when scrolled past 30% of hero section
  if (scrollY > heroHeight * 0.3) {
    headerEl.classList.add('header--scrolled');
  } else {
    headerEl.classList.remove('header--scrolled');
  }

  isScrolling = false;
}

// Throttle scroll events for better performance
function onScroll() {
  if (!isScrolling) {
    requestAnimationFrame(handleHeaderScroll);
    isScrolling = true;
  }
}

// Listen for scroll events
window.addEventListener('scroll', onScroll, { passive: true });

/* Hamburger menu behaviour */
hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navEl.addEventListener('click', () => {
  navEl.classList.remove('nav--open');
  hamburgerEl.classList.remove('hamburger--open');
});

/* Smooth Scrolling behaviour */
linkServices.addEventListener('click', function (e) {
  e.preventDefault();

  SmoothVerticalScrolling(sectionServices, 300, 'top');
});

linkAbout.addEventListener('click', function (e) {
  e.preventDefault();

  SmoothVerticalScrolling(sectionAbout, 300, 'top');
});

function SmoothVerticalScrolling(element, time, position) {
  var eTop = element.getBoundingClientRect().top;
  var eAmt = eTop / 100 - 1;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, position);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, position) {
  if (position == 'center' || position == '') window.scrollBy(0, eAmt / 2);
  if (position == 'top') window.scrollBy(0, eAmt);
}

/* Service Modal Functionality */
const serviceModalData = {
  audit: {
    title: 'Audit & Assurance',
    icon: '#icon-bar-chart',
    description: 'Our comprehensive audit and assurance services provide independent verification of your financial statements, ensuring accuracy, compliance, and transparency for stakeholders.',
    features: [
      'Financial statement audits',
      'Internal audit services',
      'Compliance auditing',
      'Risk assessment and management',
      'Fraud detection and prevention',
      'Regulatory compliance reviews'
    ],
    benefits: [
      'Enhanced credibility with stakeholders',
      'Improved internal controls',
      'Risk mitigation',
      'Regulatory compliance assurance',
      'Better decision-making insights'
    ]
  },
  accounting: {
    title: 'Accounting Services',
    icon: '#icon-accounting',
    description: 'Complete accounting and bookkeeping solutions designed to maintain accurate financial records and provide valuable insights into your business performance.',
    features: [
      'Full bookkeeping services',
      'Monthly financial statements',
      'Accounts payable and receivable',
      'Bank reconciliation',
      'Financial reporting',
      'Budget preparation and analysis'
    ],
    benefits: [
      'Accurate financial records',
      'Time savings for business owners',
      'Better cash flow management',
      'Informed business decisions',
      'Compliance with accounting standards'
    ]
  },
  tax: {
    title: 'Tax Services',
    icon: '#icon-tax',
    description: 'Expert tax preparation and planning services to optimize your tax position while ensuring full compliance with all tax regulations and requirements.',
    features: [
      'Individual tax preparation',
      'Corporate tax services',
      'Tax planning and strategy',
      'Tax compliance reviews',
      'IRS representation',
      'Multi-state tax filings'
    ],
    benefits: [
      'Maximized tax savings',
      'Reduced audit risk',
      'Expert IRS representation',
      'Strategic tax planning',
      'Peace of mind with compliance'
    ]
  },
  advisory: {
    title: 'Business Advisory',
    icon: '#icon-groups',
    description: 'Strategic financial guidance and business consulting services to help your organization achieve its goals and optimize operational efficiency.',
    features: [
      'Strategic planning consultation',
      'Financial analysis and modeling',
      'Performance improvement strategies',
      'Cash flow optimization',
      'Business valuation services',
      'Merger and acquisition support'
    ],
    benefits: [
      'Improved business performance',
      'Strategic growth planning',
      'Enhanced profitability',
      'Better resource allocation',
      'Competitive advantage'
    ]
  },
  payroll: {
    title: 'Payroll Management',
    icon: '#icon-currency-exchange',
    description: 'Comprehensive payroll processing and employee benefit administration services to ensure accurate, timely, and compliant payroll management.',
    features: [
      'Complete payroll processing',
      'Employee benefit administration',
      'Tax withholding and reporting',
      'Direct deposit services',
      'Year-end tax document preparation',
      'HR compliance support'
    ],
    benefits: [
      'Accurate and timely payroll',
      'Compliance with regulations',
      'Reduced administrative burden',
      'Employee satisfaction',
      'Cost-effective solutions'
    ]
  },
  reporting: {
    title: 'Financial Reporting',
    icon: '#icon-reporting',
    description: 'Detailed financial analysis and reporting services that provide clear insights into your business performance and support informed decision-making.',
    features: [
      'Monthly financial reports',
      'Key performance indicators (KPI) analysis',
      'Cash flow projections',
      'Budget vs. actual analysis',
      'Custom dashboard creation',
      'Financial trend analysis'
    ],
    benefits: [
      'Clear business insights',
      'Improved decision-making',
      'Better financial control',
      'Performance tracking',
      'Strategic planning support'
    ]
  }
};

const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.querySelector('.modal-title');
const modalIconSvg = document.getElementById('modal-icon-svg');
const modalDescription = document.querySelector('.modal-description');
const modalFeaturesList = document.querySelector('.modal-features-list');
const modalBenefitsList = document.querySelector('.modal-benefits-list');
const modalClose = document.querySelector('.modal-close');
const modalCtaBtn = document.querySelector('.modal-cta-btn');

function openModal(serviceType) {
  const data = serviceModalData[serviceType];
  if (!data) return;

  // Update modal content
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;
  
  // Update icon
  modalIconSvg.innerHTML = `<use xlink:href="./img/sprite-svg-icons.svg${data.icon}"></use>`;
  
  // Clear and populate features list
  modalFeaturesList.innerHTML = '';
  data.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    modalFeaturesList.appendChild(li);
  });
  
  // Clear and populate benefits list
  modalBenefitsList.innerHTML = '';
  data.benefits.forEach(benefit => {
    const li = document.createElement('li');
    li.textContent = benefit;
    modalBenefitsList.appendChild(li);
  });
  
  // Show modal
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Event listeners for service links
document.querySelectorAll('.service-card__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const serviceType = link.getAttribute('data-modal');
    openModal(serviceType);
  });
});

// Event listeners for modal close
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// Update CTA button to close modal and scroll to contact
modalCtaBtn.addEventListener('click', (e) => {
  e.preventDefault();
  closeModal();
  
  // Scroll to contact section
  setTimeout(() => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 300);
});
