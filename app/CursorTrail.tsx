'use client';

import { useEffect, useRef, useState } from 'react';

type TrailItem = {
  id: number;
  x: number;
  y: number;
  variant: number;
  rotation: number;
};

const posters = [
  { title: '茶', subtitle: '品牌视觉' },
  { title: '山', subtitle: '文旅推广' },
  { title: '节', subtitle: '活动物料' },
  { title: '影', subtitle: '视频包装' },
  { title: '字', subtitle: '版式设计' },
];

export default function CursorTrail() {
  const [items, setItems] = useState<TrailItem[]>([]);
  const sequence = useRef(0);
  const lastPoint = useRef({ x: -100, y: -100, time: 0 });
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const now = Date.now();
    const distance = Math.hypot(x - lastPoint.current.x, y - lastPoint.current.y);

    if (distance < 54 || now - lastPoint.current.time < 65) return;

    const id = now + sequence.current;
    const variant = sequence.current % posters.length;
    const rotation = ((sequence.current % 5) - 2) * 3;
    sequence.current += 1;
    lastPoint.current = { x, y, time: now };

    setItems((current) => [...current.slice(-7), { id, x, y, variant, rotation }]);
    timers.current.push(setTimeout(() => {
      setItems((current) => current.filter((item) => item.id !== id));
    }, 1050));
  }

  return (
    <div className="cursor-gallery" onPointerMove={handlePointerMove} aria-hidden="true">
      <p>移动鼠标探索作品</p>
      {items.map((item) => {
        const poster = posters[item.variant];
        return (
          <div
            className={`trail-card trail-card-${item.variant + 1}`}
            key={item.id}
            style={{ left: item.x, top: item.y, '--rotation': `${item.rotation}deg` } as React.CSSProperties}
          >
            <span>{poster.subtitle}</span>
            <strong>{poster.title}</strong>
            <i />
          </div>
        );
      })}
    </div>
  );
}
