import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Gauge, Sparkles } from 'lucide-react';

type MotionMode = 'standard' | 'lite';

const MotionContext = createContext({ mode: 'standard' as MotionMode, toggle: () => {} });

export function MotionSystem({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<MotionMode>(() => {
    const saved = localStorage.getItem('gn-motion-mode') as MotionMode | null;
    if (saved) return saved;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    return navigator.hardwareConcurrency <= 4 || memory <= 4 || matchMedia('(prefers-reduced-motion: reduce)').matches ? 'lite' : 'standard';
  });

  useEffect(() => {
    document.documentElement.dataset.motion = mode;
    localStorage.setItem('gn-motion-mode', mode);
  }, [mode]);

  useEffect(() => {
    if (mode === 'lite') return;
    const onPointerMove = (event: PointerEvent) => {
      const x = event.clientX / innerWidth - 0.5;
      const y = event.clientY / innerHeight - 0.5;
      document.documentElement.style.setProperty('--pointer-x', `${(x * 14).toFixed(1)}px`);
      document.documentElement.style.setProperty('--pointer-y', `${(y * 10).toFixed(1)}px`);
      document.documentElement.style.setProperty('--pointer-x-reverse', `${(x * -6).toFixed(1)}px`);
      document.documentElement.style.setProperty('--pointer-y-reverse', `${(y * -4).toFixed(1)}px`);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, [mode]);

  const value = useMemo(() => ({ mode, toggle: () => setMode((current) => current === 'standard' ? 'lite' : 'standard') }), [mode]);
  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function MotionToggle() {
  const { mode, toggle } = useContext(MotionContext);
  return (
    <button className="motion-toggle" type="button" onClick={toggle} title={`动态效果：${mode === 'standard' ? '标准' : '简洁'}`}>
      {mode === 'standard' ? <Sparkles size={14} /> : <Gauge size={14} />}
      <span>{mode === 'standard' ? '动态' : '简洁'}</span>
    </button>
  );
}
