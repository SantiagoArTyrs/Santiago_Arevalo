// Hero.tsx
"use client";

import { FC, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Tipado claro y Props opcional
type Props = { lang?: "es" | "en" };

// Tipado de partículas decorativas
type Particle = {
  w: number;
  h: number;
  top: string;
  left: string;
  dur: number;
};

// Copy internacionalizable, seguro y ampliable
const COPY = {
  es: {
    hi: "HOLA MUNDO, soy",
    title: "Santiago Arevalo",
    handle: "TyrSAr",
    subtitle: "FullStack Developer",
    slogan:
      "De lo pequeño se construye lo grande. — Construyo software, IA y productos con alma.",
    cv: "CV",
    projects: "Ver proyectos",
  },
  en: {
    hi: "HELLO WORLD, I am",
    title: "Santiago Arevalo",
    handle: "TyrSAr",
    subtitle: "FullStack Developer",
    slogan:
      "From small pieces, greatness grows. — I build software, AI, and products with soul.",
    cv: "CV",
    projects: "View projects",
  },
} as const;

const Hero: FC<Props> = ({ lang = "es" }) => {
  const texts = COPY[lang];
  const shouldReduceMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        w: Math.random() * 8 + 4,
        h: Math.random() * 8 + 4,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        dur: Math.random() * 4 + 3,
      }))
    );
  }, [shouldReduceMotion]);

  // Clases reutilizables para botones/etiquetas
  const sharedBtnClass =
    "px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold transition-transform hover:scale-110 text-white glass glow bg-[linear-gradient(90deg,var(--accent-2),var(--accent-1))]";
  const tagClass = sharedBtnClass;
  const btnClass =
    sharedBtnClass +
    " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-1)]";

  return (
    <section
      id="hero"
      className="exclusive-gradient relative flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center overflow-hidden"
    >
      {/* Fondo animado gradiente */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-gradient bg-[length:200%_200%]"
        style={{
          background:
            "linear-gradient(to bottom right, var(--accent-2), var(--accent-1), var(--bg-2))",
        }}
      />

      {/* Partículas decorativas */}
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden -z-10"
        >
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: p.w,
                height: p.h,
                top: p.top,
                left: p.left,
                background: "var(--accent-2)",
                opacity: 0.3,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Intro */}
      <motion.p
        className="text-base sm:text-lg z-10 text-[color:var(--muted)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {texts.hi}
      </motion.p>

      {/* Título principal */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold z-10 leading-tight pb-1 bg-clip-text text-transparent"
        style={{
          background: "var(--main-title-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {texts.title}
      </motion.h1>

      {/* Chips: Handle y Rol */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-4 z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className={tagClass}>{texts.handle}</span>
        <span className={tagClass}>{texts.subtitle}</span>
      </motion.div>

      {/* Slogan */}
      <motion.p
        className="mt-6 text-base sm:text-xl max-w-2xl z-10 text-[color:var(--muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {texts.slogan}
      </motion.p>

      {/* Botones */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a href="/cv.pdf" className={btnClass} download>
          {texts.cv}
        </a>
        <a href="#projects" className={btnClass}>
          {texts.projects}
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;


