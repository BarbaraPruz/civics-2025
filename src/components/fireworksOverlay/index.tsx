// FireworksOverlay.tsx
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  decay: number;
  radius: number;
}

interface Shell {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  exploded: boolean;
  trail: { x: number; y: number }[];
}

const COLORS = [
  "#FF3B3B",
  "#FF6B6B",
  "#FF9999",
  "#ffffff",
  "#e0e0ff",
  "#c8d8ff",
  "#3B6FFF",
  "#5B8FFF",
  "#7AAFFF",
  "#FFD700",
  "#FFA500",
];

function createParticle(x: number, y: number, color: string): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = Math.random() * 5 + 1.5;
  return {
    x,
    y,
    color,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    alpha: 1,
    decay: Math.random() * 0.015 + 0.01,
    radius: Math.random() * 2.5 + 1,
  };
}

function createShell(w: number, h: number): Shell {
  return {
    x: Math.random() * w * 0.7 + w * 0.15,
    y: h,
    targetY: Math.random() * h * 0.5 + h * 0.05,
    vy: -(Math.random() * 8 + 6),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    exploded: false,
    trail: [],
  };
}

interface FireworksOverlayProps {
  onDismiss?: () => void;
}

export default function FireworksOverlay({ onDismiss }: FireworksOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let particles: Particle[] = [];
    let shells: Shell[] = [];
    let frame = 0;
    let rafId: number;

    const loop = () => {
      const w = canvas.width,
        h = canvas.height;
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      ctx.fillRect(0, 0, w, h);

      frame++;
      if (frame % 30 === 0) shells.push(createShell(w, h));

      // Update shells
      shells = shells.map((shell) => {
        if (shell.exploded) return shell;
        shell.trail.push({ x: shell.x, y: shell.y });
        if (shell.trail.length > 10) shell.trail.shift();
        shell.vy += 0.2;
        shell.y += shell.vy;

        if (shell.vy >= 0 || shell.y <= shell.targetY) {
          shell.exploded = true;
          const count = Math.floor(Math.random() * 80) + 60;
          for (let i = 0; i < count; i++)
            particles.push(createParticle(shell.x, shell.y, shell.color));
          if (Math.random() > 0.5) {
            const c2 = COLORS[Math.floor(Math.random() * COLORS.length)];
            for (let i = 0; i < 30; i++)
              particles.push(createParticle(shell.x, shell.y, c2));
          }
        }

        // Draw trail
        shell.trail.forEach((pt, i) => {
          ctx.save();
          ctx.globalAlpha = (i / shell.trail.length) * 0.6;
          ctx.fillStyle = "#ffffcc";
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        return shell;
      });

      // Draw particles
      particles.forEach((p) => {
        p.vy += 0.06;
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      particles = particles.filter((p) => p.alpha > 0);

      rafId = requestAnimationFrame(loop);
    };

    loop();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center pt-[15vh] bg-black/80"
      onClick={onDismiss}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
{/* US Flag version      <div className="relative z-10 text-center pointer-events-none flex flex-col items-center gap-3">
        <svg
          width="108"
          height="72"
          viewBox="0 0 90 60"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <rect x="0" y="0" width="90" height="60" fill="#B22234" />
          <rect x="0" y="4.6" width="90" height="4.6" fill="#fff" />
          <rect x="0" y="13.8" width="90" height="4.6" fill="#fff" />
          <rect x="0" y="23.1" width="90" height="4.6" fill="#fff" />
          <rect x="0" y="32.3" width="90" height="4.6" fill="#fff" />
          <rect x="0" y="41.5" width="90" height="4.6" fill="#fff" />
          <rect x="0" y="50.8" width="90" height="4.6" fill="#fff" />
          <rect x="0" y="0" width="36" height="32.3" fill="#3C3B6E" />
          <g fill="white" fontSize="5" textAnchor="middle">
            <text x="4" y="6">
              ★
            </text>
            <text x="10" y="6">
              ★
            </text>
            <text x="16" y="6">
              ★
            </text>
            <text x="22" y="6">
              ★
            </text>
            <text x="28" y="6">
              ★
            </text>
            <text x="34" y="6">
              ★
            </text>
            <text x="7" y="11">
              ★
            </text>
            <text x="13" y="11">
              ★
            </text>
            <text x="19" y="11">
              ★
            </text>
            <text x="25" y="11">
              ★
            </text>
            <text x="31" y="11">
              ★
            </text>
            <text x="4" y="16">
              ★
            </text>
            <text x="10" y="16">
              ★
            </text>
            <text x="16" y="16">
              ★
            </text>
            <text x="22" y="16">
              ★
            </text>
            <text x="28" y="16">
              ★
            </text>
            <text x="34" y="16">
              ★
            </text>
            <text x="7" y="21">
              ★
            </text>
            <text x="13" y="21">
              ★
            </text>
            <text x="19" y="21">
              ★
            </text>
            <text x="25" y="21">
              ★
            </text>
            <text x="31" y="21">
              ★
            </text>
            <text x="4" y="26">
              ★
            </text>
            <text x="10" y="26">
              ★
            </text>
            <text x="16" y="26">
              ★
            </text>
            <text x="22" y="26">
              ★
            </text>
            <text x="28" y="26">
              ★
            </text>
            <text x="34" y="26">
              ★
            </text>
            <text x="7" y="31">
              ★
            </text>
            <text x="13" y="31">
              ★
            </text>
            <text x="19" y="31">
              ★
            </text>
            <text x="25" y="31">
              ★
            </text>
            <text x="31" y="31">
              ★
            </text>
          </g>
        </svg>

        <h1 className="text-5xl font-bold text-white tracking-widest drop-shadow-lg">
          Congratulations! You Passed!
        </h1>
        <p className="text-xl text-white/80">
          To pass the civics test, you need to correctly answer 12 of 20
          questions.
        </p>
      </div> */}
      <div className="relative z-10 text-center pointer-events-none">
        <h1 className="text-5xl font-bold text-white mb-3 md:tracking-widest drop-shadow-lg">
          🎉 Congratulations! You Passed! 🎉
        </h1>
        <p className="text-xl text-white/80 mb-8">To pass the civics test, you need to correctly answer 12 of 20 questions.</p>
      </div>
      <button
        onClick={onDismiss}
        className="relative z-10 mt-4 px-8 py-3 bg-white text-blue-800 font-bold rounded-full text-lg hover:bg-blue-100 transition"
      >
        Back to More Questions
      </button>
    </div>
  );
}
