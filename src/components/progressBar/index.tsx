interface ProgressBarProps {
  current: number;
  total: number;
}

function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = total === 0 ? 0 : Math.min((current / total) * 100, 100);

  return (
    <div className="w-full">
      {/* Labels */}
      <div className="flex items-baseline justify-between mb-1.5 px-0.5">
        <div className="flex items-baseline gap-1.5">
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-2xl font-medium tabular-nums leading-none"
            css={{ color: "#63dcb4" }}
          >
            <span className="text-sm" style={{ color: "#63dcb4" }}>
              {current}
            </span>
          </span>
          <span
            style={{ fontFamily: "'DM Mono', monospace", color: "#4a7fa5" }}
            className="text-xs tracking-wide"
          >
            answered
          </span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span
            style={{ fontFamily: "'DM Mono', monospace", color: "#4a7fa5" }}
            className="text-xs tracking-wide"
          >
            of
          </span>
          <span
            style={{ fontFamily: "'DM Mono', monospace", color: "#63dcb4" }}
            className="text-sm font-medium tabular-nums leading-none"
          >
            {total}
          </span>
        </div>
      </div>

      {/* Track */}
      <div
        className="relative w-full h-3 rounded-full overflow-hidden"
        style={{ background: "#0a1628", boxShadow: "inset 0 0 0 1px #1e3a5f" }}
      >
        {/* Fill */}
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background:
              "linear-gradient(90deg, #63dcb4 0%, #a8f0d8 40%, #63dcb4 80%)",
            backgroundSize: "200% auto",
            boxShadow: "0 0 12px 2px rgba(99, 220, 180, 0.45)",
            transition: "width 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
            animation: pct > 0 ? "shimmer 2.5s linear infinite" : "none",
          }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;
