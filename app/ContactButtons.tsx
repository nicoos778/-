'use client';

import { useEffect, useRef, useState } from 'react';

type ContactType = 'email' | 'phone';

const contactInfo = {
  email: { label: '我的邮箱', value: 'cavxxx@foxmail.com' },
  phone: { label: '我的电话', value: '193 0845 5943' },
};

export default function ContactButtons() {
  const [active, setActive] = useState<ContactType | null>(null);
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) setActive(null);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActive(null);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function toggle(type: ContactType) {
    setCopied(false);
    setActive((current) => current === type ? null : type);
  }

  async function copyContact() {
    if (!active) return;
    await navigator.clipboard.writeText(contactInfo[active].value.replaceAll(' ', ''));
    setCopied(true);
  }

  return (
    <div className="contact-buttons" ref={wrapperRef}>
      {active && (
        <div className="contact-popover" role="dialog" aria-label={contactInfo[active].label}>
          <button className="popover-close" type="button" onClick={() => setActive(null)} aria-label="关闭弹窗">×</button>
          <span>{contactInfo[active].label}</span>
          <strong>{contactInfo[active].value}</strong>
          <button className="copy-button" type="button" onClick={copyContact}>{copied ? '已复制' : '复制信息'}</button>
        </div>
      )}
      <div className="social-links">
        <button type="button" onClick={() => toggle('email')} aria-label="查看邮箱" aria-expanded={active === 'email'}>邮</button>
        <button type="button" onClick={() => toggle('phone')} aria-label="查看电话" aria-expanded={active === 'phone'}>电</button>
        <a href="#experience" aria-label="查看简历">历</a>
      </div>
    </div>
  );
}
