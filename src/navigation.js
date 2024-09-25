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

      links: [
        {
          text: 'All Programs',
          href: getPermalink('/programs'),
        },
        {
          text: 'School Calendar',
          href: '#',
        },
        {
          text: 'Schedule PIS',
          href: '#',
        },
      ],
    },
    {
      text: 'Testimonials',
      href: getPermalink('/reviews'),
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
    {
      ariaLabel: 'Twitter',
      icon: 'tabler:brand-twitter',
      href: 'https://www.facebook.com/Heguruyangoncentre?mibextid=LQQJ4d',
    },
    {
      ariaLabel: 'Youtube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.instagram.com/heguru_education_singapore?igsh=aWkwcXZoMDU3ajBp',
    },
  ],
  footNote: '',
};
