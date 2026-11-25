export type AboutFaqCategory = 'General' | 'Platform' | 'Services' | 'Applications'

export type AboutFaq = {
  category: AboutFaqCategory
  question: string
  answer: string
}

export const companyStandards = [
  {
    title: 'Connecting care providers with vetted staff',
    description:
      'We connect healthcare and social care organisations with carefully selected agency workers who have completed appropriate recruitment, identity, Right to Work, DBS, reference, training and pre-employment compliance checks.',
  },
  {
    title: 'Our mission & standards',
    description:
      'Our aim is to provide dependable, professional and responsive staffing support while maintaining clear recruitment, safeguarding, data-protection and quality-assurance standards.',
  },
  {
    title: 'Operational disclosure',
    description:
      'REF Staffing Ltd operates as an employment business. Client organisations remain responsible for directing and supervising agency workers and the care delivered within their services.',
  },
]

export const approachSteps = [
  {
    title: 'Dependable staffing support',
    description: 'Consistent, reliable agency coverage tailored to your operational needs.',
    icon: '/assets/about/about-users-icon.svg',
  },
  {
    title: 'Clear recruitment and compliance controls',
    description: 'Rigorous pre-employment checks to ensure complete peace of mind.',
    icon: '/assets/about/about-virus-icon.svg',
  },
  {
    title: 'Professional communication',
    description: 'Transparent, direct, and responsive interaction at every step.',
    icon: '/assets/about/about-mail-icon.svg',
  },
  {
    title: 'Ongoing worker and client support',
    description: 'Continuous assistance for facilities and agency personnel alike.',
    icon: '/assets/about/about-user-check-icon.svg',
  },
  {
    title: 'Continuous quality improvement',
    description: 'Regular audits and feedback loops to maintain standard excellence.',
    icon: '/assets/about/about-tool-icon.svg',
  },
]

export const aboutAims = [
  {
    title: 'Dependable staffing built on clear standards',
    image: '/assets/about/about-standards.png',
    alt: 'Care worker providing attentive support to a patient',
  },
  {
    title: 'Rigorous compliance & vetting',
    image: '/assets/about/about-compliance.png',
    alt: 'Healthcare professional reviewing patient information',
  },
  {
    title: 'Quality & data protection',
    image: '/assets/about/about-quality.png',
    alt: 'Healthcare team discussing a medical scan',
  },
]

export const aboutFaqCategories: AboutFaqCategory[] = [
  'General',
  'Platform',
  'Services',
  'Applications',
]

export const aboutFaqs: AboutFaq[] = [
  {
    category: 'General',
    question: 'How many stages does the application process take?',
    answer:
      'The application process has three main stages: an initial application, review, shortlisting and interview; a secure compliance form and document upload for provisionally selected applicants; then verification and completion of outstanding checks before final compliance clearance.',
  },
  {
    category: 'Platform',
    question: 'What checks are required before I can work with REF Staffing Ltd?',
    answer:
      'Checks depend on the role and may include identity and Right to Work verification, a DBS check, employment history, references, qualifications and relevant training. We will explain which documents are needed for your application.',
  },
  {
    category: 'Applications',
    question: 'Does submitting an application guarantee me a job or working hours?',
    answer:
      'No. An application does not guarantee employment, assignments, minimum hours or continuous work. Any placement is subject to suitability, completed compliance checks, client requirements and assignment availability.',
  },
  {
    category: 'Services',
    question: 'What types of workers does REF Staffing Ltd provide?',
    answer:
      'REF Staffing Ltd may provide healthcare assistants, care assistants and support workers to care settings including residential care homes and supported living services, subject to client requirements, worker suitability, compliance clearance and availability.',
  },
]
