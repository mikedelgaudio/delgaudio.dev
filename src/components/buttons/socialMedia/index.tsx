import { h } from 'preact';
import { Link } from 'preact-router';

export interface SocialMediaButtonProps {
  href: string;
  ariaLabel: string;
  svg: h.JSX.Element;
}

const classes =
  'hidden sm:flex items-center justify-center text-on-surface-muted w-10 h-10 hover:bg-surface-hover focus:outline-hidden focus:ring-4 focus:ring-ring rounded-lg text-sm p-2.5';

export default function SocialMediaButton(props: SocialMediaButtonProps) {
  const { href, ariaLabel, svg } = props;

  return (
    <Link href={href} target="_blank" class={classes}>
      {svg}
      <span class="sr-only">{ariaLabel}</span>
    </Link>
  );
}
