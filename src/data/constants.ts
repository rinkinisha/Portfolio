// ──────────────────────────────────────
// Single source of truth for all profile data
// ──────────────────────────────────────

export const PROFILE = {
  name: 'Rinki Nisha',
  shortName: 'Rinki',
  alias: 'Rinki',
  title: 'Full Stack Developer',
  email: 'rinki.nisha02@gmail.com',
  phone: '7654164893',
  website: 'rinkinisha.github.io',
  formspreeId: '', // Set your Formspree Form ID here to enable emails (or configure via VITE_FORMSPREE_ID in .env)
  resumeUrl: 'https://drive.google.com/file/d/1QO_Wkqe4m6OP9UlC7qAuwtFBxy8EbH8z/view?usp=sharing',
} as const;

export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/rinkinisha',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rinki-nisha-8b762b332/',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:rinki.nisha02@gmail.com',
  },
] as const;

export type SocialLinkId = (typeof SOCIAL_LINKS)[number]['id'];

/** Helper to get a social link by id */
export const getSocialLink = (id: SocialLinkId) =>
  SOCIAL_LINKS.find((link) => link.id === id)!;
