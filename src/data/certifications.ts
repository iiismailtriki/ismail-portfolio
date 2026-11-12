import type { ImageMetadata } from 'astro';
import saaBadge from '../assets/certifications/aws-solutions-architect-associate.png';
import ccpBadge from '../assets/certifications/aws-cloud-practitioner.png';
import nutanixBadge from '../assets/certifications/nutanix-ncp-mci6.png';

// Single source for credentials (hero, certifications section, JSON-LD).
// Names match the Credly badges exactly. Issue/expiry dates and credential IDs are
// intentionally omitted — the Credly page is the verifiable record.
export interface Certification {
  name: string;
  short: string;
  issuer: string;
  href: string;
  image: ImageMetadata;
  level: 'Associate' | 'Foundational' | 'Professional';
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    short: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/fef01525-791c-400e-b3c5-98ea212d54d1/public_url',
    image: saaBadge,
    level: 'Associate',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    short: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/58168a8e-4f53-4ed0-a898-b92fbb761c50/linked_in?t=t4qoma',
    image: ccpBadge,
    level: 'Foundational',
  },
  {
    name: 'Nutanix Certified Professional — Multicloud Infrastructure 6',
    short: 'Nutanix NCP-MCI 6',
    issuer: 'Nutanix',
    href: 'https://www.credly.com/badges/efe60dc4-cab6-4cdc-a6d7-b256674a40b7/linked_in?t=t3x6lz',
    image: nutanixBadge,
    level: 'Professional',
  },
];

export const [primaryCertification] = certifications;
