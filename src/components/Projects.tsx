// Projects.tsx
"use client";

import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Tipos claros y concisos para estructura y consistencia
type Lang = "es" | "en";
type Project = { name: string; desc: string; github?: string; image?: string };
type Texts = { title: string; projects: Project[] };

// Data internacionalizada usando as const para inmutabilidad segura
const TEXTS: Record<Lang, Texts> = {
  es: {
    title: "Mis Proyectos",
    projects: [
      { name: "FPS", desc: "Videojuego FPS hecho en unity 6.", github:"https://github.com/SantiagoArTyrs/videojuego_unity.git", image: "/FPS.jpg" },
      { name: "Reloj Universal", desc: "Aplicación de reloj mundial hecha en Python con interfaz gráfica y soporte para múltiples zonas horarias", github:"https://github.com/SantiagoArTyrs/Reloj_Universal.git", image: "clock.jpg" },
      { name: "PerformanceMonitor", desc: "Sistema backend hecho en Spring Boot para monitorear rendimiento de métodos con Decorators, usando PostgreSQL y API RESTful", github:"https://github.com/SantiagoArTyrs/performance-monitor.git", image: "/performance_m.jpg" },
      { name: "MusicPlayer", desc: "Aplicación hecha en Vue 3 para escuchar canciones con interfaz moderna y minimalista", github:"https://github.com/SantiagoArTyrs/MusicPlayer.git", image: "/music_player.jpg" },
      { name: "PharmaSync", desc: "Plataforma avanzada de asistencia farmacéutica que utiliza inteligencia artificial para proporcionar soporte clínico confiable y respuestas precisas sobre consultas médicas y farmacológicas", github:"https://github.com/SantiagoArTyrs/PharmaSync.git", image: "/pharmasync.jpg" },
    ],
  },
  en: {
    title: "My Projects",
    projects: [
      { name: "FPS", desc: "FPS video game made in Unity 6.", github:"https://github.com/SantiagoArTyrs/videojuego_unity.git", image: "/FPS.jpg" },
      { name: "Reloj Universal", desc: "World clock application made in Python with a graphical interface and support for multiple time zones.", github:"https://github.com/SantiagoArTyrs/Reloj_Universal.git", image: "clock.jpg" },
      { name: "PerformanceMonitor", desc: "Backend system made in Spring Boot to monitor method performance with Decorators, using PostgreSQL and RESTful API.", github:"https://github.com/SantiagoArTyrs/performance-monitor.git", image: "/performance_m.jpg" },
      { name: "MusicPlayer", desc: "Vue 3 application for listening to songs with a modern and minimalist interface.", github:"https://github.com/SantiagoArTyrs/MusicPlayer.git", image: "/music_player.jpg" },
      { name: "PharmaSync", desc: "Advanced AI-powered pharmaceutical assistance platform providing reliable clinical support and accurate answers to medical and pharmacological questions.", github:"https://github.com/SantiagoArTyrs/PharmaSync.git", image: "/pharmasync.jpg" },
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
    className="group relative flex flex-col rounded-2xl border overflow-hidden shadow-lg border-[var(--accent-2)] bg-white/5 focus-within:ring-2 focus-within:ring-[var(--accent-2)] transition-transform duration-300 hover:scale-105 outline-none"
    style={{ boxShadow: "0 0 32px 2px var(--accent-2), 0 2px 8px 0 rgba(0,0,0,0.05)" }}
    initial={cardInitial}
    whileInView={cardAnimate}
    whileHover={!shouldReduceMotion ? { scale: 1.05, rotateY: 5, rotateX: -3 } : undefined}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    viewport={{ once: true, amount: 0.2 }}
    tabIndex={0}
    aria-label={lang === "es" ? `Proyecto ${proj.name}` : `Project ${proj.name}`}
  >
    {/* Imagen superior con aspect ratio */}
    {proj.image && (
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img
          src={proj.image}
          alt={proj.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    )}

    {/* Fondo animado decorativo */}
    <div
      className="absolute inset-0 pointer-events-none blur-2xl transition duration-500"
      style={{ background: "linear-gradient(120deg, var(--accent-2) 20%, var(--accent-1) 80%, transparent)", opacity: 0.13 }}
      aria-hidden="true"
    />

    {/* Contenido */}
    <div className="p-6 relative z-10 flex flex-col gap-3">
      <h3 className="text-xl font-bold text-[var(--accent-2)]">{proj.name}</h3>
      <p className="text-[var(--muted)]">{proj.desc}</p>

      <div className="mt-4 flex justify-center">
        {/* Enlace GitHub */}
        {proj.github && (
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:scale-105 transition-transform bg-[linear-gradient(90deg,var(--accent-2),var(--accent-1))] text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
            aria-label={lang === "es" ? `Abrir GitHub de ${proj.name}` : `Open GitHub of ${proj.name}`}
          >
            {/* Icono GitHub SVG inline */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.55-3.9-1.55-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.18.08 1.81 1.22 1.81 1.22 1.04 1.79 2.72 1.27 3.38.97.11-.76.41-1.27.75-1.56-2.57-.29-5.28-1.29-5.28-5.73 0-1.27.45-2.32 1.2-3.14-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.21 1.2.93-.26 1.93-.39 2.93-.39s2 .13 2.93.39c2.23-1.51 3.21-1.2 3.21-1.2.63 1.59.23 2.76.11 3.05.75.82 1.2 1.87 1.2 3.14 0 4.45-2.71 5.44-5.29 5.73.42.36.8 1.06.8 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


