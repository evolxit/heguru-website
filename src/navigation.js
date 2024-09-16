import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Programs',
      href: getPermalink('/programs'),
    },
    {
      text: 'Testimonials',
      href: getPermalink('/reviews'),
    },
    {
      text: 'Parents',
      href: getPermalink('/about'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/faq'),
    },
    {
      text: 'Activity',
      href: getPermalink('/activity'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: '',
      links: [
        { text: 'Programs', href: getPermalink('/programs') },
        { text: 'Activity', href: getPermalink('/activity') },
      ],
    },
    {
      title: '',
      links: [
        { text: 'Parents', href: getPermalink('/') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Testimonials', href: getPermalink('/reviews') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Activity', href: getPermalink('/activity') },
    { text: 'Testimonials', href: getPermalink('/reviews') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/Heguruyangoncentre?mibextid=LQQJ4d',
    },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/heguru_education_singapore?igsh=aWkwcXZoMDU3ajBp',
    },
  ],
  footNote: '',
};
