import { getPermalink } from './utils/permalinks';

// const token = window.localStorage.getItem('token');

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Heguru Method',
          href: getPermalink('/method'),
        },
        {
          text: 'HEGL CEO Ruiko Henmi',
          href: getPermalink('/ceo'),
        },
        {
          text: '5 purposes of Heguru Education',
          href: getPermalink('/purposes'),
        },
        {
          text: 'Heguru World Wide',
          href: getPermalink('/worldwide'),
        },
      ],
    },
    {
      text: 'Programs',

      links: [
        {
          text: 'All Programs',
          href: getPermalink('/programs'),
        },
        {
          text: 'Infant & Toddler Class',
          href: getPermalink('/infant'),
        },
        {
          text: 'Preschool I',
          href: getPermalink('/preschool'),
        },
        {
          text: 'Preschool II',
          href: getPermalink('/preschool2'),
        },
        {
          text: 'Prenatal Education',
          href: getPermalink('/prenatal'),
        },
        {
          text: 'Online Program',
          href: getPermalink('/online'),
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
      links: [
        {
          text: 'Register',
          href: getPermalink('/register'),
        },
        {
          text: 'Login',
          href: getPermalink('/login'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/contact'),
        },

        {
          text: 'Terms & Conditions',
          href: getPermalink('/terms'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const authHeaderData = {
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
          text: 'Infant & Toddler Class',
          href: getPermalink('/infant'),
        },
        {
          text: 'Preschool I',
          href: getPermalink('/preschool'),
        },
        {
          text: 'Preschool II',
          href: getPermalink('/preschool2'),
        },
        {
          text: 'Prenatal Education',
          href: getPermalink('/prenatal'),
        },
        {
          text: 'Online Program',
          href: getPermalink('/online'),
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
      links: [
        {
          text: 'Contact Us',
          href: getPermalink('/contact'),
        },

        {
          text: 'Terms & Conditions',
          href: getPermalink('/terms'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
  username: 'Evolx',
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
      href: 'https://www.instagram.com/heguru_myanmar/?hl=en',
    },
    {
      ariaLabel: 'TikTok',
      icon: 'tabler:brand-tiktok',
      href: 'https://www.tiktok.com/@hegurumyanmar?_t=8q4INWfxSsM&_r=1',
    },
    {
      ariaLabel: 'Youtube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/channel/UCcPqO_fEbngScYJrJpRtWRw',
    },
  ],
  footNote: '',
};
