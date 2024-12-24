import { h } from 'preact';
import { Link } from 'preact-router';

export interface SocialMediaButtonProps {
  href: string;
  ariaLabel: string;
  svg: h.JSX.Element;
}

const classes =
  'hidden sm:flex items-center justify-center text-slate-500 w-10 h-10 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-lg text-sm p-2.5';

export default function SocialMediaButton(props: SocialMediaButtonProps) {
  const { href, ariaLabel, svg } = props;

  return (
    <Link href={href} target="_blank" class={classes}>
      {svg}
      <span class="sr-only">{ariaLabel}</span>
    </Link>
  );
}
