"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa6";

type Props = {
  lang: "es" | "en";
};

const Experience: FC<Props> = ({ lang }) => {
  const texts = {
    es: {
      title: "Experiencia Académica",
      studies: [
        {
          icon: <FaGraduationCap />,
          title: "Ingeniería de Software",
          place: "Universidad Cooperativa de Colombia",
          desc: "Actualmente cursando 5to semestre, con enfoque en desarrollo de software e innovación tecnológica.",
          date: "2021 - Actualidad",
        },
        {
          icon: <FaCertificate />,
          title: "Certificado en Desarrollo FullStack",
          place: "Platzi / Udemy / Certificación online",
          desc: "Enfoque en React, Node.js, TypeScript y arquitecturas modernas.",
          date: "2024",
        },
        {
          icon: <FaCertificate />,
          title: "Certificado en Inteligencia Artificial",
          place: "Google Cloud & OpenAI",
          desc: "Modelos de IA aplicados a proyectos reales: análisis de datos, asistentes virtuales y más.",
          date: "2025",
        },
      ],
    },
    en: {
      title: "Academic Experience",
      studies: [
        {
          icon: <FaGraduationCap />,
          title: "Software Engineering",
          place: "Universidad Cooperativa de Colombia",
          desc: "Currently studying 5th semester, focused on software development and tech innovation.",
          date: "2021 - Present",
        },
        {
          icon: <FaCertificate />,
          title: "FullStack Development Certificate",
          place: "Platzi / Udemy / Online Certification",
          desc: "Focus on React, Node.js, TypeScript and modern architectures.",
          date: "2024",
        },
        {
          icon: <FaCertificate />,
          title: "Artificial Intelligence Certificate",
          place: "Google Cloud & OpenAI",
          desc: "AI models applied to real projects: data analysis, virtual assistants, and more.",
          date: "2025",
        },
      ],
    },
  }[lang];

  return (
    <section id="experience" className="min-h-screen relative py-70 px-6 md:px-20">
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

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Línea central animada */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />

        <div className="space-y-16">
          {texts.studies.map((item, i) => (
            <motion.div
              key={i}
              className={`relative flex items-center ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className={`glass glow w-[90%] md:w-[45%] p-6 rounded-2xl shadow-xl border border-cyan-500/20 ${
                  i % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <div className="flex items-center gap-3 text-cyan-400 text-2xl mb-3">
                  {item.icon}
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{item.place}</p>
                <p className="mt-2 text-gray-300">{item.desc}</p>
                <p className="mt-2 text-xs text-gray-500">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
