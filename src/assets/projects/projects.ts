export interface Project {
  header: string;
  description: string;
  link: string;
}

export const PROJECTS: Project[] = [
  {
    header: 'Blog',
    description:
      'Publishing blog posts with guides on web performance and my home lab',
    link: 'https://blog.delgaudio.dev/',
  },
  {
    header: 'Tipsy P2P',
    description:
      'Add the items from your receipt and determine how much each person owes you with tip and tax included',
    link: 'https://tipsy.delgaudio.dev/',
  },
  {
    header: 'Neu Clock',
    description: 'Simplified clock screensaver with CSS themes',
    link: 'https://neu.delgaudio.dev/',
  },
  {
    header: 'WeatherFlash',
    description: 'Next.js geolocation weather app',
    link: 'https://weatherflash.delgaudio.dev/',
  },
  {
    header: 'Bullish Bay',
    description:
      'Robinhood inspired Angular stock market watchlist and automated advisor web app',
    link: 'https://bullishbay.delgaudio.dev/',
  },
  {
    header: 'Bullish Bay Chatbot',
    description:
      'Financial Discord bot for users to receive the latest stock market news',
    link: 'https://github.com/mikedelgaudio/Bullish-Bay-Discord-Bot',
  },
];
