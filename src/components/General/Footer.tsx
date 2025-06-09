'use client';
import { useEffect, useState } from "react";

const name = "Giverin".split("");

const AnimatedName = () => {
  const [visible, setVisible] = useState(Array(name.length).fill(false));

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    let observer: IntersectionObserver | null = null;
    let hasAnimated = false;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true;
        name.forEach((_, i) => {
          setTimeout(() => {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }, i * 80);
        });
        observer?.disconnect();
      }
    };

    observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });
    observer.observe(footer);

    return () => observer?.disconnect();
  }, []);

  return (
    <span
      className="text-white font-mono font-extrabold uppercase tracking-widest"
      style={{
        fontSize: 120,
        lineHeight: "100px",
        letterSpacing: "0.2em",
        marginTop: 45,
        userSelect: "none",
        display: "flex",
      }}
    >
      {name.map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            transform: visible[i] ? "translateY(0)" : "translateY(120%)",
            opacity: visible[i] ? 1 : 0,
            transition: "transform 0.4s ease-in, opacity 0.4s",
            transitionDelay: `${i * 0.08}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const Footer = () => {
  return (
    <footer className="relative z-10 flex flex-col items-center gap-2 py-8 bg-white/95 border-t border-neutral-200">
      <div className="flex gap-4 z-20 text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
        <span>© 2024 Magnus Andreas Giverin</span>
        <span>|</span>
        <span>All Rights Reserved</span>
      </div>
      <div className="pb-24 text-[9px] text-orange-600 font-mono tracking-widest">
        Designed & coded with precision
      </div>
      {/* Black strip with only the top of "MAGNUS" visible */}
      <div className="hidden md:absolute left-0 bottom-0 md:w-full h-[100px] bg-black overflow-hidden md:flex items-start justify-center pointer-events-none">
        <AnimatedName />
      </div>
    </footer>
  );
};

export default Footer;