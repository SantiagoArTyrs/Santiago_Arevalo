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
    <section id="projects" className="relative py-20 px-6 md:px-20">
      {/* Título */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {texts.title}
      </motion.h2>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {texts.projects.map((proj, i) => (
          <motion.div
            key={i}
            className="group relative glass glow rounded-2xl p-6 border border-cyan-500/20 cursor-pointer overflow-hidden"
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Fondo animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

            <h3 className="text-xl font-bold text-cyan-400 relative z-10">
              {proj.name}
            </h3>
            <p className="text-gray-300 mt-2 relative z-10">{proj.desc}</p>

            {/* Botón */}
            <motion.a
              href="#"
              className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm shadow-md relative z-10 hover:scale-105 transition-transform"
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
