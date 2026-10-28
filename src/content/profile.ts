export interface WorkItem {
  title: string;
  meta: string;
  // A public page about the work, with a label that says what it is
  link?: { href: string; label: string };
  body: string;
}

export interface Role {
  when: string;
  title: string;
  org: string;
  what: string;
  skills: string[];
}

export interface SideProject {
  name: string;
  link: string;
  what: string;
  // What the link opens, said next to it so nobody expects a live site
  linkType: 'demo video' | 'source' | 'live site';
}

export const WORK: WorkItem[] = [
  {
    title: 'File-navigation tools for Copilot in SharePoint',
    meta: 'Microsoft · 2024–now',
    link: {
      href: 'https://support.microsoft.com/en-us/sharepoint/copilot-in-sharepoint/copilot-in-sharepoint-an-overview',
      label: 'Product overview',
    },
    body: 'I build and orchestrate the tools the Copilot in SharePoint agent uses to find its way through files: grep, glob, find and search across sites and libraries. I design them like an SDK, with clear contracts, output that fits the context window, and failures the agent can recover from. Shipped to Copilot in SharePoint customers.',
  },
  {
    title: 'SharePoint Document Library redesign',
    meta: 'Microsoft · 2024',
    link: {
      href: 'https://techcommunity.microsoft.com/blog/spblog/ux-updates-ai-actions--forms-in-document-libraries/4466700',
      label: 'Microsoft blog post',
    },
    body: 'I led frontend engineering for the new command bar, navigation and view management, and kept time-to-interactive steady through the redesign. Shipped to every SharePoint user worldwide, more than 100 million people a month.',
  },
];

export const EXPERIENCE: Role[] = [
  {
    when: '2024–now',
    title: 'Software Engineer II',
    org: 'Microsoft',
    what: 'Built and orchestrate the file-navigation tools (grep, glob, find, search) behind Copilot in SharePoint; led frontend for the Document Library redesign, GA to 100M+ monthly users.',
    skills: ['TypeScript', 'React', 'LLM orchestration'],
  },
  {
    when: '2023–2024',
    title: 'Software Engineer',
    org: 'Microsoft',
    what: 'Moved Fluent UI React components to native Preact in OneDrive/SharePoint; built a Playwright test runner for SPFx extensions.',
    skills: ['Preact', 'React', 'Playwright'],
  },
  {
    when: '2022',
    title: 'Software Engineer Intern',
    org: 'Microsoft',
    what: 'Developer analytics dashboards for the Windows platform team in React, TypeScript and MobX.',
    skills: ['React', 'TypeScript', 'MobX'],
  },
  {
    when: '2020–2023',
    title: 'Software Engineer Intern',
    org: 'Colgate-Palmolive',
    what: 'Hill’s B2B eCommerce: a CI gate that stopped 96% of build errors before production; load time down 32%.',
    skills: ['Angular', 'NgRx', 'GitHub Actions'],
  },
  {
    when: '2021',
    title: 'Technical Writer Intern',
    org: 'Google',
    what: 'Fuchsia setup and configuration docs that shortened onboarding for 500+ engineers.',
    skills: ['Technical writing', 'HTML/CSS', 'JavaScript'],
  },
  {
    when: '2019',
    title: 'Web Developer Intern',
    org: 'U.S. District Court, SDNY',
    what: 'Rebuilt the public site to a 99 Lighthouse accessibility score.',
    skills: ['PHP', 'JavaScript', 'Accessibility'],
  },
  {
    when: 'Education',
    title: 'B.S. Computer Science',
    org: 'Stevens Institute of Technology',
    what: 'Co-op program, Dean’s List.',
    skills: [],
  },
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    name: 'Squoosh',
    link: 'https://squoosh.app',
    linkType: 'live site',
    what: 'designed and built three homepage sections for Google Chrome Labs’ open-source image compression app.',
  },
  {
    name: 'Tipsy P2P',
    link: 'https://youtu.be/6Z0dQWLPbDQ',
    linkType: 'demo video',
    what: 'split a receipt with tip and tax per person.',
  },
  {
    name: 'Neu Clock',
    link: 'https://youtu.be/6Bj-XLQFKt4',
    linkType: 'demo video',
    what: 'a minimal clock screensaver with CSS themes.',
  },
  {
    name: 'WeatherFlash',
    link: 'https://youtu.be/aTTbcB2DV74',
    linkType: 'demo video',
    what: 'a Next.js geolocation weather app.',
  },
  {
    name: 'Bullish Bay',
    link: 'https://youtu.be/ghHd_5BCSfo',
    linkType: 'demo video',
    what: 'a stock watchlist built from SEC filings.',
  },
  {
    name: 'Bullish Bay Chatbot',
    link: 'https://github.com/mikedelgaudio/Bullish-Bay-Discord-Bot',
    linkType: 'source',
    what: 'a Discord bot for daily market news.',
  },
];

export interface Post {
  title: string;
  date: string;
  href: string;
}

// Recent posts from blog.delgaudio.dev, newest first; update when a post ships
export const POSTS: Post[] = [
  {
    title: 'When CSS can’t express priority: notes on a layout engine',
    date: 'Aug 2026',
    href: 'https://blog.delgaudio.dev/posts/responsive-conductor-vs-pretext/',
  },
  {
    title:
      'Building DockBuddies: pixel-art droids that watch your Copilot sessions',
    date: 'May 2026',
    href: 'https://blog.delgaudio.dev/posts/building-dockbuddies/',
  },
];

export const BLOG = 'https://blog.delgaudio.dev/';
export const EMAIL = 'hello@delgaudio.dev';
export const GITHUB = 'https://github.com/mikedelgaudio';
export const LINKEDIN = 'https://www.linkedin.com/in/michael-delgaudio/';
