import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; vx: number; vy: number; size: number; alpha: number; gold: boolean };

export function GnParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    let frame = 0;
    let particles: Particle[] = [];
    let visible = !document.hidden;
    let enabled = document.documentElement.dataset.motion !== 'lite';

    const resize = () => {
      const ratio = Math.min(devicePixelRatio, 1.5);
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = enabled ? Math.min(46, Math.round(innerWidth / 34)) : 0;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * innerWidth, y: Math.random() * innerHeight,
        vx: -0.08 - Math.random() * 0.18, vy: -0.18 - Math.random() * 0.35,
        size: 0.8 + Math.random() * 2.2, alpha: 0.18 + Math.random() * 0.5,
        gold: Math.random() > .82,
      }));
    };
    const draw = () => {
      if (!visible || !enabled) return;
      context.clearRect(0, 0, innerWidth, innerHeight);
      for (const particle of particles) {
        particle.x += particle.vx; particle.y += particle.vy;
        if (particle.y < -10 || particle.x < -10) { particle.x = Math.random() * innerWidth + innerWidth * .2; particle.y = innerHeight + 10; }
        context.fillStyle = particle.gold ? `rgba(242,221,160,${particle.alpha})` : `rgba(105,232,202,${particle.alpha})`;
        context.shadowColor = particle.gold ? '#d9bd6b' : '#69e8ca'; context.shadowBlur = 9;
        context.beginPath(); context.ellipse(particle.x, particle.y, particle.size, particle.size * 2.8, -.65, 0, Math.PI * 2); context.fill();
      }
      frame = requestAnimationFrame(draw);
    };
    const onVisibility = () => { visible = !document.hidden; if (visible) draw(); else cancelAnimationFrame(frame); };
    const onMotionChange = (event: Event) => {
      enabled = (event as CustomEvent<'standard' | 'lite'>).detail === 'standard';
      cancelAnimationFrame(frame);
      context.clearRect(0, 0, innerWidth, innerHeight);
      resize();
      if (enabled && visible) draw();
    };
    resize(); draw();
    addEventListener('resize', resize); document.addEventListener('visibilitychange', onVisibility);
    addEventListener('hyrule:motion-change', onMotionChange);
    return () => { cancelAnimationFrame(frame); removeEventListener('resize', resize); removeEventListener('hyrule:motion-change', onMotionChange); document.removeEventListener('visibilitychange', onVisibility); };
  }, []);

  return <canvas ref={canvasRef} className="gn-particle-canvas" aria-hidden="true" />;
}
