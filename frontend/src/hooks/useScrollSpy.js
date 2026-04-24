// hooks/useScrollSpy.js
// Tracks which section is currently visible for active nav link

import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState('');
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });

      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveId(closest.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return { activeId, scrolled };
};

export default useScrollSpy;
