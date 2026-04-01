// Tiny pixel droids that walk along the footer with collision physics
// Canvas-based for efficient walk-frame animation
import { useEffect, useRef } from 'preact/hooks';

const CELL = 2; // canvas pixels per grid cell
const GRID_W = 16;
const SPRITE_PX = GRID_W * CELL; // 32px per sprite
const DROID_COUNT = 5;
const MIN_SPEED = 0.25;
const MAX_SPEED = 0.5;
const WALK_TOGGLE = 16; // px traveled before switching walk frame
const BLINK_MIN = 2500; // ms
const BLINK_MAX = 5000;
const BLINK_DUR = 150;

// Body (rows 0-12) shared by all frames
const BODY = [
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
];

// Two walk frames — feet toggle between apart and together
const FEET_A = ['..FF......FF....', '..FF......FF....', '................'];
const FEET_B = ['....FF..FF......', '....FF..FF......', '................'];

const WALK_A = [...BODY, ...FEET_A];
const WALK_B = [...BODY, ...FEET_B];

function makeBlink(grid: string[]) {
  return grid.map((row, y) => {
    if (y === 5) return row.replace(/[EP]/g, 'B');
    if (y === 6) return row.replace(/[EP]/g, 'D');
    return row;
  });
}

const BLINK_A = makeBlink(WALK_A);
const BLINK_B = makeBlink(WALK_B);

interface Droid {
  x: number;
  vx: number;
  walkDist: number;
  blinkTimer: number;
  isBlinking: boolean;
  blinkEnd: number;
}

type Colors = Record<string, string>;

function readThemeColors(): Colors {
  const s = getComputedStyle(document.documentElement);
  return {
    B: s.getPropertyValue('--theme-accent').trim(),
    D: s.getPropertyValue('--theme-border').trim(),
    E: '#ffffff',
    P: '#111111',
    A: s.getPropertyValue('--theme-border').trim(),
    T: s.getPropertyValue('--theme-accent').trim(),
    F: s.getPropertyValue('--theme-border').trim(),
    M: s.getPropertyValue('--theme-bg').trim(),
  };
}

function drawSprite(
  ctx: CanvasRenderingContext2D,
  grid: string[],
  x: number,
  y: number,
  flip: boolean,
  colors: Colors,
) {
  ctx.save();
  if (flip) {
    ctx.translate(x + SPRITE_PX, y);
    ctx.scale(-1, 1);
  } else {
    ctx.translate(x, y);
  }
  for (let gy = 0; gy < grid.length; gy++) {
    for (let gx = 0; gx < grid[gy].length; gx++) {
      const ch = grid[gy][gx];
      if (ch === '.') continue;
      const c = colors[ch];
      if (!c) continue;
      ctx.fillStyle = c;
      ctx.fillRect(gx * CELL, gy * CELL, CELL, CELL);
    }
  }
  ctx.restore();
}

function FooterDroids() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let colors = readThemeColors();
    let cw = stage.clientWidth;
    let activeCount = cw < 640 ? 3 : DROID_COUNT;

    // Re-read colors on theme switch
    const themeObs = new MutationObserver(() => {
      colors = readThemeColors();
    });
    themeObs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    const resize = () => {
      cw = stage.clientWidth;
      activeCount = cw < 640 ? 3 : DROID_COUNT;
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(SPRITE_PX * dpr);
      canvas.style.width = `${cw}px`;
      canvas.style.height = `${SPRITE_PX}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (const d of droids) {
        if (d.x > cw - SPRITE_PX) d.x = cw - SPRITE_PX;
        if (d.x < 0) d.x = 0;
      }
    };

    const droids: Droid[] = Array.from({ length: DROID_COUNT }, (_, i) => ({
      x: (cw / (DROID_COUNT + 1)) * (i + 1) - SPRITE_PX / 2,
      vx:
        (Math.random() > 0.5 ? 1 : -1) *
        (MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED)),
      walkDist: Math.random() * WALK_TOGGLE * 2,
      blinkTimer: BLINK_MIN + Math.random() * (BLINK_MAX - BLINK_MIN),
      isBlinking: false,
      blinkEnd: 0,
    }));

    const ro = new ResizeObserver(() => resize());
    ro.observe(stage);
    resize();

    // Reduced motion: no walking, but still blink in place
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      let rmLastTime = performance.now();
      let rmRafId = 0;

      const animateBlink = (now: number) => {
        const dt = now - rmLastTime;
        rmLastTime = now;

        ctx.clearRect(0, 0, cw, SPRITE_PX);

        for (let i = 0; i < activeCount; i++) {
          const d = droids[i];
          d.blinkTimer -= dt;
          if (d.blinkTimer <= 0) {
            d.isBlinking = true;
            d.blinkEnd = now + BLINK_DUR;
            d.blinkTimer = BLINK_MIN + Math.random() * (BLINK_MAX - BLINK_MIN);
          }
          if (d.isBlinking && now >= d.blinkEnd) {
            d.isBlinking = false;
          }
          const grid = d.isBlinking ? BLINK_A : WALK_A;
          drawSprite(ctx, grid, d.x, 0, false, colors);
        }

        rmRafId = requestAnimationFrame(animateBlink);
      };

      rmRafId = requestAnimationFrame(animateBlink);
      return () => {
        cancelAnimationFrame(rmRafId);
        themeObs.disconnect();
        ro.disconnect();
      };
    }

    let lastTime = performance.now();
    let rafId = 0;

    const animate = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;

      ctx.clearRect(0, 0, cw, SPRITE_PX);

      for (let i = 0; i < activeCount; i++) {
        const d = droids[i];
        d.x += d.vx;
        d.walkDist += Math.abs(d.vx);

        // Blink timer
        d.blinkTimer -= dt;
        if (d.blinkTimer <= 0) {
          d.isBlinking = true;
          d.blinkEnd = now + BLINK_DUR;
          d.blinkTimer = BLINK_MIN + Math.random() * (BLINK_MAX - BLINK_MIN);
        }
        if (d.isBlinking && now >= d.blinkEnd) {
          d.isBlinking = false;
        }

        // Wall bounce
        if (d.x <= 0) {
          d.x = 0;
          d.vx = Math.abs(d.vx);
        } else if (d.x >= cw - SPRITE_PX) {
          d.x = cw - SPRITE_PX;
          d.vx = -Math.abs(d.vx);
        }
      }

      // Droid-droid collision (only active droids)
      for (let i = 0; i < activeCount; i++) {
        for (let j = i + 1; j < activeCount; j++) {
          const a = droids[i];
          const b = droids[j];
          const dist = Math.abs(a.x - b.x);
          if (dist < SPRITE_PX) {
            const tmp = a.vx;
            a.vx = b.vx;
            b.vx = tmp;
            const overlap = SPRITE_PX - dist;
            if (a.x < b.x) {
              a.x -= overlap / 2;
              b.x += overlap / 2;
            } else {
              a.x += overlap / 2;
              b.x -= overlap / 2;
            }
          }
        }
      }

      // Draw only active droids
      for (let i = 0; i < activeCount; i++) {
        const d = droids[i];
        const useB = Math.floor(d.walkDist / WALK_TOGGLE) % 2 === 1;
        let grid: string[];
        if (d.isBlinking) {
          grid = useB ? BLINK_B : BLINK_A;
        } else {
          grid = useB ? WALK_B : WALK_A;
        }
        drawSprite(ctx, grid, d.x, 0, d.vx < 0, colors);
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      themeObs.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <footer class="footer-droids" aria-hidden="true">
      <div class="footer-droids-stage" ref={stageRef}>
        <canvas ref={canvasRef} class="footer-droids-canvas" />
      </div>
    </footer>
  );
}

export default FooterDroids;
