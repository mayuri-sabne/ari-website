"use client";

interface RatingStarsProps {
  rating: number; // 0–5
  size?: number;
}

export default function RatingStars({ rating, size = 20 }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={size} fill="gold" />
      ))}

      {/* Partial Star */}
      {partial > 0 && (
        <PartialStar size={size} fill="gold" percent={partial * 100} />
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={size} fill="#555" />
      ))}

      <span className="text-sm text-gray-300 ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function Star({ size, fill }: { size: number; fill: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={fill}
      stroke="none"
    >
      <path d="M10 1.5l2.9 5.9 6.6 1-4.8 4.7 1.2 6.6L10 16l-5.9 3.1 1.2-6.6L.5 8.4l6.6-1z" />
    </svg>
  );
}

function PartialStar({
  size,
  fill,
  percent,
}: {
  size: number;
  fill: string;
  percent: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className="relative"
    >
      {/* Empty base */}
      <path
        d="M10 1.5l2.9 5.9 6.6 1-4.8 4.7 1.2 6.6L10 16l-5.9 3.1 1.2-6.6L.5 8.4l6.6-1z"
        fill="#555"
      />

      {/* Filled overlay */}
      <clipPath id={`clip-${percent}`}>
        <rect x="0" y="0" width={`${percent}%`} height="100%" />
      </clipPath>

      <path
        clipPath={`url(#clip-${percent})`}
        d="M10 1.5l2.9 5.9 6.6 1-4.8 4.7 1.2 6.6L10 16l-5.9 3.1 1.2-6.6L.5 8.4l6.6-1z"
        fill={fill}
      />
    </svg>
  );
}
