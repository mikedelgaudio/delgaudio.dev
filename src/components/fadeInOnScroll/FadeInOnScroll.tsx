import { useEffect, useRef, useState } from 'preact/hooks';
import { JSX } from 'preact/jsx-runtime';
import './FadeInOnScroll.styles.css';

function FadeInOnScroll({
  children,
  threshold = 0.5,
  direction = 'up',
}: {
  children: JSX.Element | JSX.Element[];
  threshold?: number;
  direction?: 'up' | 'left' | 'right' | 'down';
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const fadeIn = () => setIsVisible(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && ref.current) {
            fadeIn();
            observer.unobserve(ref.current);
          }
        });
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, threshold]);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''} ${
        direction === 'up' ? 'fly-in-up' : `fly-in-${direction}`
      }`}
    >
      {children}
    </div>
  );
}

export default FadeInOnScroll;
