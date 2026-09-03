'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  { icon: '◎', title: '品牌视觉', items: ['品牌传播基调', '节日主题创意', '视觉规范延展'] },
  { icon: '✦', title: '平面设计', items: ['宣传海报设计', '社交媒体素材', '活动推广物料', '图片精修调色', '版式设计优化'] },
  { icon: '✎', title: '内容制作', items: ['营销文案撰写', '短视频剪辑', '字幕视觉包装', '智能工具协作'] },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.24 },
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`service-showcase ${visible ? 'is-visible' : ''}`} id="services" ref={sectionRef}>
      <h2>我能做什么</h2>
      <div className="service-stage">
        {services.map((service, index) => (
          <article className={`service-note service-note-${index + 1}`} key={service.title}>
            <div className="service-icon" aria-hidden="true">{service.icon}</div>
            <h3>{service.title}</h3>
            <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
