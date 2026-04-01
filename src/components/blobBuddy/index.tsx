interface BlobBuddyProps {
  class?: string;
}

// 16x16 pixel grid from DockBuddies AgentSprite
// B=body, D=bodyDark, E=eye, P=eyePupil, A=antenna, T=antennaTop, F=feet, M=mouth
const GRID = [
  '......T..T......',
  '......A..A......',
  '......A..A......',
  '....DBBBBBD.....',
  '...DBBBBBBBD....',
  '..DBEEPBEEPBD...',
  '..DBEEPBEEPBD...',
  '..DBMBBBMBBBD...',
  '..DBBMMMBBBD....',
  '...DBBBBBBBD....',
  '...DBBBBBBD.....',
  '....DBBBBBD.....',
  '....DBBBBBD.....',
  '...FF....FF.....',
  '...FF....FF.....',
  '................',
];

// Blink grid: eyes closed (row 5: eye→body, row 6: eye→bodyDark)
const BLINK_GRID = GRID.map((row, y) => {
  if (y === 5) return row.replace(/[EP]/g, 'B');
  if (y === 6) return row.replace(/[EP]/g, 'D');
  return row;
});

const PX = 4; // pixels per grid cell

// Color mapping uses CSS variables for theme awareness
const COLORS: Record<string, string> = {
  B: 'var(--theme-accent)',
  D: 'var(--theme-border)',
  E: '#ffffff',
  P: '#111111',
  A: 'var(--theme-border)',
  T: 'var(--theme-accent)',
  F: 'var(--theme-border)',
  M: 'var(--theme-bg)',
};

function renderGrid(grid: string[]) {
  const rects: preact.JSX.Element[] = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const ch = grid[y][x];
      if (ch === '.' || !COLORS[ch]) continue;
      rects.push(
        <rect
          key={`${x}-${y}`}
          x={x * PX}
          y={y * PX}
          width={PX}
          height={PX}
          fill={COLORS[ch]}
          class={ch === 'T' ? 'blob-glow-pixel' : undefined}
        />,
      );
    }
  }
  return rects;
}

function BlobBuddy({ class: className = '' }: BlobBuddyProps) {
  const w = 16 * PX;
  const h = 16 * PX;

  return (
    <div class={`blob-buddy ${className}`} aria-hidden="true">
      {/* Speech bubble */}
      <div class="blob-speech-bubble">hi!</div>

      {/* Open eyes (default) */}
      <svg
        class="blob-sprite blob-open"
        viewBox={`0 0 ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: 'pixelated' }}
      >
        {renderGrid(GRID)}
      </svg>

      {/* Closed eyes (blink) */}
      <svg
        class="blob-sprite blob-blink"
        viewBox={`0 0 ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: 'pixelated' }}
      >
        {renderGrid(BLINK_GRID)}
      </svg>
    </div>
  );
}

export default BlobBuddy;
