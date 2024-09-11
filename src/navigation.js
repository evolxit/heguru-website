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
      href: getPermalink('/about'),
    },
    {
      text: 'Testimonials',
      href: getPermalink('/about'),
    },
    {
      text: 'Parents',
      href: getPermalink('/about'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/about'),
    },
    {
      text: 'Activity',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/about'),
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
  ],
  secondaryLinks: [
    { text: 'Gallery', href: getPermalink('/about') },
    { text: 'Reviews', href: getPermalink('/about') },
  ],
  socialLinks: [
    // {
    //   ariaLabel: 'Facebook',
    //   icon: 'tabler:brand-facebook',
    //   href: 'https://www.facebook.com/Pine-Hill-Resort-739814942807242',
    // },
  ],
  footNote:
    '<div class="flex md:-mt-20"><a href="https://www.tripadvisor.com/Hotel_Review-g1016308-d1600275-Reviews-Pine_Hill_Resort_Kalaw-Kalaw_Shan_State.html" target="_blank" class="inline-block mr-5"></a> <a href="https://www.agoda.com/pine-hill-resort/hotel/kalaw-mm.html" target="_blank"  class="inline-block mr-3 bg-white pt-5 px-3 rounded"></a> <a href="http://www.booking.com/hotel/mm/pine-hill-resort.en-gb.html" target="_blank" class="inline-block mr-3 bg-white pt-5 px-3 rounded"></a> <a href="https://www.facebook.com/Pine-Hill-Resort-739814942807242" target="_blank"  class="inline-block mr-3 bg-white pt-5 px-3 rounded"><img src="/icons/facebook.png" class="w-12 h-auto rounded" /></a></div>',
};
