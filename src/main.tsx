import { hydrate, prerender as renderToHtml } from 'preact-iso';
import App from './app';
import './index.css';

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app') as HTMLElement);
}

// Per-page head for the static HTML written at build time
const PAGES: Record<string, { title: string; path: string }> = {
  '/': { title: 'Mike DelGaudio - Software Engineer', path: '/' },
};

// Called by @preact/preset-vite during `vite build` for each route it finds
export async function prerender(data: { url: string }) {
  const { html, links } = await renderToHtml(<App url={data.url} />);
  const page = PAGES[data.url] ?? PAGES['/'];
  return {
    html,
    links,
    head: {
      lang: 'en',
      title: page.title,
      elements: new Set([
        {
          type: 'link',
          props: {
            rel: 'canonical',
            href: `https://delgaudio.dev${page.path}`,
          },
        },
        {
          type: 'meta',
          props: {
            property: 'og:url',
            content: `https://delgaudio.dev${page.path}`,
          },
        },
      ]),
    },
  };
}
