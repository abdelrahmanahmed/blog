import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'Personal',
          href: getPermalink('/'),
        },
      ],
    },
    {
      text: 'Blog (coming soon)',
    },
  ],
  actions: [{ text: 'Hire Me', href: 'https://www.linkedin.com/in/wahdan', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/wahdan/' },
    { ariaLabel: 'Blog', icon: 'tabler:article', href: 'https://dev.to/abdelrahmanahmed' },
    { ariaLabel: 'stackoverflow', icon: 'tabler:brand-stackoverflow', href: 'https://stackoverflow.com/users/1846087/wahdan' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/abdelrahmanahmed' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© 2024 Abdelrahman Wahdan. All rights reserved.`,
};
