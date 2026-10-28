import { ComponentChildren, JSX } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

type RevealProps = {
  as?: 'section' | 'li' | 'h2' | 'div';
  children: ComponentChildren;
} & Omit<JSX.HTMLAttributes<HTMLElement>, 'as' | 'ref'>;

// An element that fades and rises into place the first time it scrolls into
// view. Each item reveals on its own as you reach it, so the motion follows the
// reader rather than a timed cascade. Anything skipped past by an anchor jump,
// or viewed with reduced motion, shows immediately.
function Reveal({
  as: Tag = 'div',
  children,
  class: className = '',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      // Trigger once the element is a little way onto the screen, so the
      // motion is seen; the large top margin counts anything above the
      // viewport as seen
      { rootMargin: '100000px 0px -48px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // The tag varies, so TypeScript can't narrow the ref to one element type
      ref={ref as never}
      data-shown={shown || undefined}
      class={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
