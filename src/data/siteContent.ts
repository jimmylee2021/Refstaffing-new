export type Benefit = {
  title: string
  description: string
}

export type Service = {
  title: string
  description: string
  image: string
  alt: string
}

export const benefits: Benefit[] = [
  {
    title: 'Comprehensive recruitment and compliance procedures',
    description:
      'We apply structured pre-employment checks before agency workers are cleared for suitable assignments.',
  },
  {
    title: 'Appropriate business insurance in place',
    description:
      'Complete operational peace of mind with active Employers’ Liability, Public Liability, and Professional Indemnity cover.',
  },
  {
    title: 'Enhanced DBS and Right to Work checks',
    description:
      'Rigorous criminal record screening and Home Office identity verification completed prior to placement.',
  },
  {
    title: 'Employment-reference verification',
    description:
      'Thorough professional reference reviews to validate past work history, reliability, and conduct.',
  },
  {
    title: 'Mandatory and role-specific training monitoring',
    description:
      'Active tracking of core care certificates, refresher courses, and specialized competence updates.',
  },
  {
    title: 'Ongoing compliance and quality assurance',
    description:
      'Regular file audits, performance reviews, and continuous monitoring to maintain professional standards.',
  },
  {
    title: 'Responsive client and worker support',
    description:
      'Dedicated operational assistance offering clear, professional communication for care facilities and staff.',
  },
  {
    title: 'Flexible staffing solutions subject to availability',
    description:
      'Adaptable booking options designed to support single shifts, temporary cover, or recurring shift schedules.',
  },
]

export const services: Service[] = [
  {
    title: 'Residential Care Homes',
    description:
      'Reliable cover to support full-time residential teams with everyday care, routine supervision, and continuous resident support.',
    image: '/assets/residential-care.png',
    alt: 'Care professional supporting a resident in a care home',
  },
  {
    title: 'Supported Living Services',
    description:
      'Dedicated agency workers who promote independence, life skills, and safe daily routines for individuals in supported housing settings.',
    image: '/assets/supported-living.png',
    alt: 'Care professional assisting a person in supported living',
  },
  {
    title: 'Dementia Services',
    description:
      'Compassionate staff trained in person-centred care, gentle redirection, and supportive routines for individuals living with memory loss.',
    image: '/assets/dementia-care.png',
    alt: 'Care professional providing attentive support',
  },
  {
    title: 'Community-Based Care Settings',
    description:
      'Flexible, dependable personnel to assist with home visits, outreach support, and daily care routines in local community environments.',
    image: '/assets/community-care.png',
    alt: 'Care professional providing community-based support',
  },
]
