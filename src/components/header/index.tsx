import { Link } from 'preact-router/match';

const Header = () => (
  <header class="py-2 text-lg bg-[rgba(255,255,255,.9)] tracking-[.15em] uppercase fixed z-10 inset-x-0">
    <div class="flex justify-between container mx-auto">
      <a href="/" class="flex items-center gap-1 p-3">
        <h1 class="">Mike DelGaudio</h1>
      </a>
      <nav class="grid gap-1 grid-cols-3">
        <Link href="/about" class="p-3 flex items-center justify-center ">
          About
        </Link>
        <Link href="/work" class="p-3 flex items-center justify-center">
          Work
        </Link>
        <Link href="/contact" class="p-3 flex items-center justify-center">
          Contact
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
