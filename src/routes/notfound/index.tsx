import { useTitle } from '../../hooks/useTitle';

function NotFound() {
  useTitle('Not found');

  return (
    <section class="pt-12 sm:pt-20">
      <h1 class="font-display font-normal text-[40px] leading-[46px] tracking-[-0.015em] text-ink mb-4">
        Page not found
      </h1>
      <p class="text-ink-muted mb-6">There’s nothing at this address.</p>
      <a href="/">Back to the home page</a>
    </section>
  );
}

export default NotFound;
