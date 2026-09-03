'use client';

import { useState } from 'react';
import PosterVisual from './PosterVisual';
import { travelPosters, xiangchaPosters } from './posters';

const orbitPosters = [
  xiangchaPosters[1],
  travelPosters[3],
  xiangchaPosters[7],
  travelPosters[4],
  xiangchaPosters[3],
  travelPosters[0],
  xiangchaPosters[11],
];

function circularOffset(index: number, selected: number, length: number) {
  let offset = index - selected;
  const midpoint = Math.floor(length / 2);
  if (offset > midpoint) offset -= length;
  if (offset < -midpoint) offset += length;
  return offset;
}

function orbitTransform(offset: number) {
  const distance = Math.abs(offset);
  const direction = Math.sign(offset);
  const xSteps = [0, 275, 425, 535];
  const scales = [1.28, .72, .5, .36];
  const x = xSteps[distance] * direction;
  const rotate = direction * -20;
  return `translate(-50%, -50%) translateX(${x}px) translateZ(${-distance * 105}px) rotateY(${rotate}deg) scale(${scales[distance]})`;
}

export default function FeaturedOrbit() {
  const [selected, setSelected] = useState(0);

  function move(direction: number) {
    setSelected((current) => (current + direction + orbitPosters.length) % orbitPosters.length);
  }

  function selectPoster(index: number) {
    if (index === selected) window.location.assign('/posters');
    else setSelected(index);
  }

  return (
    <section className="orbit-section" id="works" aria-label="精选作品环绕画廊">
      <div className="orbit-heading">
        <div><strong>精选作品</strong></div>
        <p>点击两侧作品进行选择<br />再次点击中央作品查看全部海报</p>
      </div>

      <div className="orbit-stage">
        <button className="orbit-hit orbit-hit-left" type="button" onClick={() => move(-1)} aria-label="点击左侧切换到上一个作品" />
        <button className="orbit-hit orbit-hit-right" type="button" onClick={() => move(1)} aria-label="点击右侧切换到下一个作品" />
        {orbitPosters.map((poster, index) => {
          const offset = circularOffset(index, selected, orbitPosters.length);
          const distance = Math.abs(offset);
          return (
            <button
              className={`orbit-card ${offset === 0 ? 'is-selected' : ''}`}
              key={poster.id}
              type="button"
              onClick={() => selectPoster(index)}
              aria-label={offset === 0 ? `查看${poster.category}全部作品` : `选择${poster.category}作品`}
              style={{ transform: orbitTransform(offset), zIndex: 10 - distance, opacity: 1 - distance * .17 }}
            >
              <PosterVisual {...poster} eager={distance <= 1} />
              {offset === 0 && <span className="view-case">查看全部</span>}
            </button>
          );
        })}
      </div>

      <div className="orbit-controls">
        <button type="button" onClick={() => move(-1)} aria-label="上一个作品">←</button>
        <span>{String(selected + 1).padStart(2, '0')} / {String(orbitPosters.length).padStart(2, '0')}</span>
        <button type="button" onClick={() => move(1)} aria-label="下一个作品">→</button>
      </div>
    </section>
  );
}
