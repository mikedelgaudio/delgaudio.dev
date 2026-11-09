// GA4 events beyond the automatic page view. The gtag snippet lives in index.html.
//
// Areas of the page carry data-track-group (hero, nav, work, writing, experience,
// projects, footer). A link's label is its data-track-label, else its
// aria-label, else its visible text.
//
// Events:
//   link_click     every link: link_group, link_label, link_url
//   generate_lead  email or LinkedIn clicks: method, link_group
//   section_view   once per section when it scrolls into view: section

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const LEAD_METHODS: [test: (url: string) => boolean, method: string][] = [
  [url => url.startsWith('mailto:'), 'email'],
  [url => url.includes('linkedin.com/'), 'linkedin'],
];

function send(name: string, params: Record<string, string>) {
  window.gtag?.('event', name, params);
}

function labelFor(a: HTMLAnchorElement) {
  return (
    a.dataset.trackLabel ||
    a.getAttribute('aria-label') ||
    (a.textContent ?? '').replace('(opens in a new tab)', '').trim()
  );
}

function trackClicks() {
  document.addEventListener('click', e => {
    const a = (e.target as Element | null)?.closest?.('a');
    if (!(a instanceof HTMLAnchorElement) || !a.href) return;

    const group =
      a.closest<HTMLElement>('[data-track-group]')?.dataset.trackGroup ??
      'other';
    send('link_click', {
      link_group: group,
      link_label: labelFor(a),
      link_url: a.href,
    });

    const lead = LEAD_METHODS.find(([test]) => test(a.href));
    if (lead) send('generate_lead', { method: lead[1], link_group: group });
  });
}

function trackSections() {
  const sections = document.querySelectorAll<HTMLElement>(
    'section[data-track-group]',
  );
  if (!sections.length || !('IntersectionObserver' in window)) return;

  // Counts once the section's top passes 60% of the way down the screen
  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        send('section_view', { section: el.dataset.trackGroup ?? '' });
        observer.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -40% 0px' },
  );
  sections.forEach(section => {
    if (section.dataset.trackGroup !== 'hero') observer.observe(section);
  });
}

export function initAnalytics() {
  trackClicks();
  trackSections();
}
