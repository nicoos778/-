'use client';

import { useEffect, useState } from 'react';
import { basePath } from './posters';

const boards = [
  '品牌海报',
  '社区商业',
  '住宅推广',
  '节点营销',
  '家庭场景',
  '横幅物料',
  '商业街区',
  '社区商铺',
  '生活方式',
  '品质住宅',
];

const boardSrc = (index: number) => `${basePath}/works/real-estate/${String(index + 1).padStart(2, '0')}.webp?v=2`;

export default function RealEstateShowcase() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selected]);

  return (
    <section className="real-estate-showcase" id="real-estate" aria-labelledby="real-estate-title">
      <header className="real-estate-heading">
        <div className="real-estate-kicker">
          <span>REAL ESTATE VISUALS · 03</span>
          <strong>地产项目视觉</strong>
        </div>
        <div>
          <h3 id="real-estate-title">房地产视觉</h3>
          <p>参与多个地产项目视觉执行，覆盖住宅推广、社区商业、节点海报与横幅物料，呈现多项目并行下的快速落地能力。</p>
        </div>
        <div className="real-estate-tags" aria-label="项目类型">
          <span>海报设计</span>
          <span>社区商业</span>
          <span>横幅物料</span>
        </div>
      </header>

      <div className="real-estate-rail" aria-label="房地产视觉作品，横向滑动浏览">
        {boards.map((label, index) => (
          <figure key={label}>
            <button className="real-estate-preview" type="button" onClick={() => setSelected(index)} aria-label={`放大查看${label}`}>
              <img
                src={boardSrc(index)}
                alt={`房地产视觉作品集页面：${label}`}
                loading="lazy"
              />
              <span aria-hidden="true">放大查看 ↗</span>
            </button>
            <figcaption>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{label}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      <footer>
        <span>10 组视觉页面</span>
        <span>左右滑动 · 点击放大</span>
      </footer>

      {selected !== null && (
        <div className="real-estate-lightbox" role="dialog" aria-modal="true" aria-label={`放大查看${boards[selected]}`} onClick={() => setSelected(null)}>
          <button className="real-estate-lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="关闭放大图片">关闭 ×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img
              src={boardSrc(selected)}
              alt={`房地产视觉作品集页面：${boards[selected]}`}
            />
            <figcaption><span>{String(selected + 1).padStart(2, '0')}</span>{boards[selected]}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
