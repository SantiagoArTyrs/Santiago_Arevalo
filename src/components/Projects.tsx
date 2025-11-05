// Projects.tsx
"use client";

import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Tipos claros y concisos para estructura y consistencia
type Lang = "es" | "en";
type Project = { name: string; desc: string };
type Texts = { title: string; projects: Project[] };

// Data internacionalizada usando as const para inmutabilidad segura
const TEXTS: Record<Lang, Texts> = {
  es: {
    title: "Mis Proyectos",
    projects: [
      { name: "Pharmasync", desc: "IA asistente para gestión farmacéutica y consultas inteligentes." },
      { name: "Analityx", desc: "Plataforma de análisis de mercado impulsada por IA." },
      { name: "BillsMonitor", desc: "Aplicación para gestionar y monitorear finanzas con IA integrada." },
      { name: "NeuroPlay", desc: "Juego interactivo con IA que adapta la dificultad en tiempo real." },
      { name: "VisionFlow", desc: "Herramienta de visión computacional para reconocimiento avanzado." },
    ],
  },
  en: {
    title: "My Projects",
    projects: [
      { name: "Pharmasync", desc: "AI assistant for pharmaceutical management and smart queries." },
      { name: "Analityx", desc: "Market analysis platform powered by AI." },
      { name: "BillsMonitor", desc: "App to manage and monitor finances with integrated AI." },
      { name: "NeuroPlay", desc: "Interactive game with AI that adapts difficulty in real time." },
      { name: "VisionFlow", desc: "Computer vision tool for advanced recognition." },
    ],
  },
} as const;

interface Props {
  lang?: Lang;
}


const Projects: FC<Props> = ({ lang = "es" }) => {
  const texts = TEXTS[lang];
  const shouldReduceMotion = useReducedMotion();

  // Animación accesible para reduced motion
  const cardInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 };
  const cardAnimate = { opacity: 1, y: 0 };

  return (
    <section
      id="projects"
      className="exclusive-gradient relative flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center overflow-hidden"
    >
      <motion.h2
        id="projects-title"
        className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          background: "var(--main-title-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {texts.title}
      </motion.h2>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {texts.projects.map((proj) => (
          <motion.div
            key={proj.name}
            className="group relative flex flex-col rounded-2xl p-6 border overflow-hidden shadow-lg border-[var(--accent-2)] bg-white/5 focus-within:ring-2 focus-within:ring-[var(--accent-2)] transition-transform duration-300 hover:scale-105 outline-none"
            style={{
              boxShadow: "0 0 32px 2px var(--accent-2), 0 2px 8px 0 rgba(0,0,0,0.05)",
            }}
            initial={cardInitial}
            whileInView={cardAnimate}
            whileHover={!shouldReduceMotion ? { scale: 1.05, rotateY: 5, rotateX: -3 } : undefined}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            viewport={{ once: true, amount: 0.2 }}
            tabIndex={0}
            aria-label={lang === "es" ? `Proyecto ${proj.name}` : `Project ${proj.name}`}
          >
            {/* Fondo animado decorativo */}
            <div
              className="absolute inset-0 pointer-events-none blur-2xl transition duration-500"
              style={{
                background:
                  "linear-gradient(120deg, var(--accent-2) 20%, var(--accent-1) 80%, transparent)",
                opacity: 0.13,
              }}
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold relative z-10 text-[var(--accent-2)]">{proj.name}</h3>
            <p className="mt-2 relative z-10 text-[var(--muted)]">{proj.desc}</p>
            <motion.a
              href="#"
              tabIndex={0}
              className="mt-4 inline-block self-start px-4 py-2 rounded-lg font-semibold text-sm shadow-md relative z-10 hover:scale-105 transition-transform bg-[linear-gradient(90deg,var(--accent-2),var(--accent-1))] text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
              whileHover={!shouldReduceMotion ? { y: -2 } : undefined}
              aria-label={lang === "es" ? `Ver más sobre ${proj.name}` : `View more about ${proj.name}`}
            >
              {lang === "es" ? "Ver más" : "View more"}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


