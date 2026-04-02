import { CSSProperties } from "react";

interface ProgressiveBlurProps {
  className?: string;
  direction?: "top" | "bottom";
  blurLayers?: number;
}

const ProgressiveBlur = ({
  className = "",
  direction = "bottom",
  blurLayers = 6,
}: ProgressiveBlurProps) => {
  const isTop = direction === "top";

  return (
    <div className={`pointer-events-none ${className}`} style={{ position: "relative" }}>
      {Array.from({ length: blurLayers }).map((_, i) => {
        const ratio = i / blurLayers;
        const nextRatio = (i + 1) / blurLayers;
        const blur = Math.pow(ratio, 2) * 12;

        const style: CSSProperties = {
          position: "absolute",
          inset: 0,
          top: isTop ? `${ratio * 100}%` : undefined,
          bottom: !isTop ? `${ratio * 100}%` : undefined,
          height: `${(nextRatio - ratio) * 100 + 2}%`,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          maskImage: isTop
            ? `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))`
            : `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))`,
          WebkitMaskImage: isTop
            ? `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))`
            : `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))`,
        };

        return <div key={i} style={style} />;
      })}
    </div>
  );
};

export { ProgressiveBlur };
