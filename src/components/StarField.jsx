import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const starsRef = useRef([]);
  const nebulaRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create stars
    const STAR_COUNT = 350;
    starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.3,
      speed: Math.random() * 0.3 + 0.05,
      brightness: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.7
        ? `hsla(${180 + Math.random() * 60}, 100%, 75%, `
        : Math.random() > 0.5
          ? `hsla(${270 + Math.random() * 30}, 80%, 70%, `
          : `hsla(0, 0%, 90%, `
    }));

    // Create nebula particles
    nebulaRef.current = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 300 + 150,
      color: Math.random() > 0.5
        ? [0, 240, 255]
        : Math.random() > 0.5
          ? [168, 85, 247]
          : [124, 58, 237],
      drift: { x: (Math.random() - 0.5) * 0.15, y: (Math.random() - 0.5) * 0.1 }
    }));

    const handleMouse = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    let time = 0;
    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebula clouds
      nebulaRef.current.forEach((n) => {
        n.x += n.drift.x;
        n.y += n.drift.y;
        if (n.x < -n.radius) n.x = canvas.width + n.radius;
        if (n.x > canvas.width + n.radius) n.x = -n.radius;
        if (n.y < -n.radius) n.y = canvas.height + n.radius;
        if (n.y > canvas.height + n.radius) n.y = -n.radius;

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
        grad.addColorStop(0, `rgba(${n.color[0]},${n.color[1]},${n.color[2]}, 0.025)`);
        grad.addColorStop(0.5, `rgba(${n.color[0]},${n.color[1]},${n.color[2]}, 0.008)`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(n.x - n.radius, n.y - n.radius, n.radius * 2, n.radius * 2);
      });

      // Draw stars with parallax and twinkle
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      starsRef.current.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = 0.4 + Math.sin(star.twinklePhase) * 0.6;

        // Parallax
        const parallaxX = (mx - cx) * star.speed * 0.02;
        const parallaxY = (my - cy) * star.speed * 0.02;
        const drawX = star.x + parallaxX;
        const drawY = star.y + parallaxY;

        // Slowly drift
        star.y -= star.speed * 0.2;
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }

        const opacity = twinkle * 0.8;
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color + opacity + ')';
        ctx.fill();

        // Glow for larger stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = star.color + (opacity * 0.15) + ')';
          ctx.fill();
        }
      });

      // Mouse glow
      if (mx > 0 && my > 0) {
        const mouseGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 200);
        mouseGrad.addColorStop(0, 'rgba(0, 240, 255, 0.04)');
        mouseGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.015)');
        mouseGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGrad;
        ctx.fillRect(mx - 200, my - 200, 400, 400);
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}
