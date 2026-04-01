interface MLogoProps {
  class?: string;
}

function MLogo({ class: className = '' }: MLogoProps) {
  return (
    <svg
      viewBox="0 0 500 520"
      fill="none"
      class={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={[
          // Outer shape — clockwise from bottom-left
          'M 28,500',
          'Q 18,502 14,492',
          'L 14,30',
          'Q 14,18 28,18',
          'L 110,18',
          'Q 120,18 126,28',
          'L 250,210',
          'L 374,28',
          'Q 380,18 390,18',
          'L 472,18',
          'Q 486,18 486,30',
          'L 486,492',
          'Q 482,502 472,500',
          'L 380,500',
          'Q 368,500 368,488',
          'L 368,160',
          'L 258,318',
          'Q 250,330 242,318',
          'L 132,160',
          'L 132,488',
          'Q 132,500 120,500',
          'Z',
        ].join(' ')}
        stroke="var(--theme-accent)"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        opacity="0.12"
      />
    </svg>
  );
}

export default MLogo;
