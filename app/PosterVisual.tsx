import type { PosterItem } from './posters';

type PosterVisualProps = PosterItem & {
  eager?: boolean;
};

export default function PosterVisual({ src, category, width, height, eager = false }: PosterVisualProps) {
  return (
    <div className="poster-design">
      <img
        src={src}
        alt={`${category}设计作品`}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}
