import { withBase } from '../utils/paths';

// Contact details and profile links. Keep in sync with docs/content-source-of-truth.md.
export const site = {
  name: 'Ismail Triki',
  title: 'Cloud Engineering Graduate | DevOps & DevSecOps',
  location: 'Marburg, Germany',
  email: 'ismail.triki.2020@gmail.com',
  github: 'https://github.com/iiismailtriki',
  githubHandle: 'iiismailtriki',
  linkedin: 'https://www.linkedin.com/in/ismail-triki-3571a21a7/',
  linkedinHandle: 'in/ismail-triki-3571a21a7',
  url: 'https://iiismailtriki.github.io/ismail-portfolio/',
  cv: withBase('/cv.pdf'),
  // German-language CV (same facts, approved translation).
  cvDe: withBase('/cv-de.pdf'),
};

export const caseStudies = [
  { href: withBase('/devsecops-case-study/'), title: 'DevSecOps Deployment Tracker' },
  { href: withBase('/soc-case-study/'), title: 'Cloud-Native SOC Platform' },
  { href: withBase('/espreats-case-study/'), title: "Espr'Eats — OpenStack Cloud Infrastructure" },
];
