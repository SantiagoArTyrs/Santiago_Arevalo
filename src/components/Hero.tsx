"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  lang: "es" | "en";
};

type Particle = {
  width: number;
  height: number;
  top: string;
  left: string;
  duration: number;
};

const Hero: FC<Props> = ({ lang }) => {
  const texts = {
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
      cv: "Resume",
      projects: "View projects",
    },
  }[lang];

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = [...Array(25)].map(() => ({
      width: Math.random() * 8 + 4,
      height: Math.random() * 8 + 4,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 4 + 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--bg-1), var(--bg-2))",
        color: "var(--muted)",
      }}
    >
      {/* Fondo animado */}
      <div
        className="absolute inset-0 animate-gradient bg-[length:200%_200%]"
        style={{
          background:
            "linear-gradient(to bottom right, var(--accent-2), var(--accent-1), var(--bg-2))",
        }}
      />
      {/* Partículas */}
      <motion.div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
              background: "var(--accent-2)",
              opacity: 0.3,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      {/* Contenido */}
      <motion.p
        className="text-lg z-10"
        style={{ color: "var(--muted)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {texts.hi}
      </motion.p>
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {texts.title}
      </motion.h1>

      {/* Tags/Información */}
      <motion.div
        className="flex justify-center gap-3 mt-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span
          className="px-6 py-3 rounded-xl glass glow font-semibold transition-transform hover:scale-110"
          style={{
            color: "white",
            background:
              "linear-gradient(90deg, var(--accent-2), var(--accent-1))",
            border: "none",
          }}
        >
          {texts.handle}
        </span>
        <span
          className="px-6 py-3 rounded-xl glass glow font-semibold transition-transform hover:scale-110"
          style={{
            color: "white",
            background:
              "linear-gradient(90deg, var(--accent-2), var(--accent-1))",
            border: "none",
          }}
        >
          {texts.subtitle}
        </span>
      </motion.div>
      <motion.p
        className="mt-6 text-xl max-w-2xl z-10"
        style={{ color: "var(--muted)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {texts.slogan}
      </motion.p>
      {/* Botones */}
      <motion.div
        className="flex gap-6 mt-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a
          href="/cv.pdf"
          className="px-6 py-3 rounded-xl glass glow font-semibold transition-transform hover:scale-110"
          style={{
            color: "white",
            background:
              "linear-gradient(90deg, var(--accent-2), var(--accent-1))",
            border: "none",
          }}
        >
          {texts.cv}
        </a>
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl glass glow font-semibold transition-transform hover:scale-110"
          style={{
            color: "white",
            background:
              "linear-gradient(90deg, var(--accent-2), var(--accent-1))",
            border: "none",
          }}
        >
          {texts.projects}
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
