import avatar from '../../assets/avatar.webp';
import { EMAIL, GITHUB, LINKEDIN } from '../../content/profile';

function Footer() {
  return (
    <footer class="mt-16 py-8 border-t border-hairline flex flex-wrap items-center gap-3 text-sm leading-[22px] text-ink-muted">
      <img
        src={avatar}
        alt="Mike DelGaudio"
        width={36}
        height={36}
        class="w-9 h-9 rounded-full object-cover"
      />
      <p class="flex-1 min-w-[220px]">
        Get in touch at{' '}
        <a href={`mailto:${EMAIL}`} data-native class="font-medium">
          {EMAIL}
        </a>
        , or find me on{' '}
        <a href={GITHUB} target="_blank" rel="noopener" data-native>
          GitHub
        </a>{' '}
        and{' '}
        <a href={LINKEDIN} target="_blank" rel="noopener" data-native>
          LinkedIn
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
