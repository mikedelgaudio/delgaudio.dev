import { h } from 'preact';
import { Link } from 'preact-router';

export interface SocialMediaButtonProps {
  href: string;
  ariaLabel: string;
  svg: h.JSX.Element;
}

const classes =
  'hidden sm:flex items-center justify-center text-cod-gray-500 w-10 h-10 dark:text-cod-gray-400 hover:bg-cod-gray-100 dark:hover:bg-cod-gray-700 focus:outline-none focus:ring-4 focus:ring-cod-gray-200 dark:focus:ring-cod-gray-700 rounded-lg text-sm p-2.5';

export default function SocialMediaButton(props: SocialMediaButtonProps) {
  const { href, ariaLabel, svg } = props;

  return (
    <Link href={href} target="_blank" class={classes}>
      {svg}
      <span class="sr-only">{ariaLabel}</span>
    </Link>
  );
}
