"use client";

import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  lang: "es" | "en";
};

const Projects: FC<Props> = ({ lang }) => {
  const texts = {
    es: {
      title: "Mis Proyectos",
      projects: [
        {
          name: "Pharmasync",
          desc: "IA asistente para gestión farmacéutica y consultas inteligentes.",
        },
        {
          name: "Analityx",
          desc: "Plataforma de análisis de mercado impulsada por IA.",
        },
        {
          name: "BillsMonitor",
          desc: "Aplicación para gestionar y monitorear finanzas con IA integrada.",
        },
        {
          name: "NeuroPlay",
          desc: "Juego interactivo con IA que adapta la dificultad en tiempo real.",
        },
        {
          name: "VisionFlow",
          desc: "Herramienta de visión computacional para reconocimiento avanzado.",
        },
      ],
    },
    en: {
      title: "My Projects",
      projects: [
        {
          name: "Pharmasync",
          desc: "AI assistant for pharmaceutical management and smart queries.",
        },
        {
          name: "Analityx",
          desc: "Market analysis platform powered by AI.",
        },
        {
          name: "BillsMonitor",
          desc: "App to manage and monitor finances with integrated AI.",
        },
        {
          name: "NeuroPlay",
          desc: "Interactive game with AI that adapts difficulty in real time.",
        },
        {
          name: "VisionFlow",
          desc: "Computer vision tool for advanced recognition.",
        },
      ],
    },
  }[lang];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      {/* Título */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          background: "var(--main-title-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {texts.title}
      </motion.h2>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {texts.projects.map((proj, i) => (
          <motion.div
            key={i}
            className="group relative rounded-2xl p-6 border cursor-pointer overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1.5px solid var(--accent-2)",
              boxShadow:
                "0 0 32px 2px var(--accent-2), 0 2px 8px 0 rgba(0,0,0,0.05)",
            }}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Fondo animado */}
            <div
              className="absolute inset-0 transition duration-500 blur-2xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, var(--accent-2)20%, var(--accent-1) 80%, transparent)",
                opacity: 0.13,
              }}
            />
            <h3
              className="text-xl font-bold relative z-10"
              style={{ color: "var(--accent-2)" }}
            >
              {proj.name}
            </h3>
            <p className="mt-2 relative z-10" style={{ color: "var(--muted)" }}>
              {proj.desc}
            </p>
            {/* Botón */}
            <motion.a
              href="#"
              className="mt-4 inline-block px-4 py-2 rounded-lg font-semibold text-sm shadow-md relative z-10 hover:scale-105 transition-transform"
              style={{
                color: "white",
                background:
                  "linear-gradient(90deg, var(--accent-2), var(--accent-1))",
                border: "none",
              }}
              whileHover={{ y: -2 }}
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
