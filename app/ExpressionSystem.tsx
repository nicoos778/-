'use client';

import { useEffect, useState } from 'react';
import { basePath } from './posters';

const expressions = [
  { name: '开心', col: 0, row: 0 },
  { name: '大笑', col: 1, row: 0 },
  { name: '生气', col: 2, row: 0 },
  { name: '难过', col: 3, row: 0 },
  { name: '惊讶', col: 0, row: 1 },
  { name: '害羞', col: 1, row: 1 },
  { name: '得意', col: 2, row: 1 },
  { name: '平静', col: 3, row: 1 },
];

function Crop({ col, row, alt = '' }: { col: number; row: number; alt?: string }) {
  return (
    <span className="expression-crop">
      <img
        src={`${basePath}/works/ip/3d-emotions.png`}
        alt={alt}
        style={{ left: `-${col * 100}%`, top: `-${row * 100}%` }}
      />
    </span>
  );
}

export default function ExpressionSystem() {
  const [active, setActive] = useState(0);
  const current = expressions[active];

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % expressions.length), 2800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="expression-system" aria-label="互动表情系统">
      <div className="expression-feature" key={active}>
        <Crop col={current.col} row={current.row} alt={`情绪仔3D${current.name}表情`} />
        <div><span>当前表情</span><strong>{current.name}</strong></div>
      </div>
      <div className="expression-picker">
        {expressions.map((expression, index) => (
          <button
            className={index === active ? 'is-active' : ''}
            type="button"
            aria-label={`查看${expression.name}表情`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
            key={expression.name}
          >
            <Crop col={expression.col} row={expression.row} />
            <span>{expression.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
