// Experience.tsx
"use client";

import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa6";

type Lang = "es" | "en";
type Study = {
  icon: React.ReactNode;
  title: string;
  place: string;
  desc: string;
  date: string;
};
type Texts = { title: string; studies: Study[] };

const TEXTS: Record<Lang, Texts> = {
  es: {
    title: "Experiencia Académica",
    studies: [
      {
        icon: <FaGraduationCap aria-hidden="true" />,
        title: "Ingeniería de Software",
        place: "Universidad Cooperativa de Colombia",
        desc: "Actualmente cursando 5to semestre, con enfoque en desarrollo de software e innovación tecnológica.",
        date: "2021 - Actualidad",
      },
      {
        icon: <FaCertificate aria-hidden="true" />,
        title: "Certificado en Desarrollo FullStack",
        place: "Platzi / Udemy / Certificación online",
        desc: "Enfoque en React, Node.js, TypeScript y arquitecturas modernas.",
        date: "2024",
      },
      {
        icon: <FaCertificate aria-hidden="true" />,
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
        icon: <FaGraduationCap aria-hidden="true" />,
        title: "Software Engineering",
        place: "Universidad Cooperativa de Colombia",
        desc: "Currently studying 5th semester, focused on software development and tech innovation.",
        date: "2021 - Present",
      },
      {
        icon: <FaCertificate aria-hidden="true" />,
        title: "FullStack Development Certificate",
        place: "Platzi / Udemy / Online Certification",
        desc: "Focus on React, Node.js, TypeScript and modern architectures.",
        date: "2024",
      },
      {
        icon: <FaCertificate aria-hidden="true" />,
        title: "Artificial Intelligence Certificate",
        place: "Google Cloud & OpenAI",
        desc: "AI models applied to real projects: data analysis, virtual assistants, and more.",
        date: "2025",
      },
    ],
  },
};

interface Props {
  lang?: Lang;
}

const Experience: FC<Props> = ({ lang = "es" }) => {
  const texts = TEXTS[lang];
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="exclusive-gradient relative flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center overflow-hidden"
    >
      <motion.h2
        id="experience-title"
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: reduce ? 0 : -28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          background: "var(--main-title-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {texts.title}
      </motion.h2>
      <div className="relative w-full max-w-4xl">
        {/* Timeline central sólo en desktop */}
        <div
          className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[var(--accent-2)] to-[var(--accent-1)] -translate-x-1/2 opacity-60 rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <ul className="flex flex-col gap-12">
          {texts.studies.map((item, i) => (
            <motion.li
              key={item.title}
              className={`
                relative flex flex-col lg:flex-row items-center w-full
                ${
                  i % 2 === 0
                    ? "lg:self-start lg:justify-start lg:text-left"
                    : "lg:self-end lg:justify-end lg:text-right"
                }
                lg:w-1/2
              `}
              initial={{ opacity: 0, y: reduce ? 0 : 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div
                className="
                  rounded-2xl shadow-xl w-full
                  sm:max-w-xl
                  lg:max-w-2xl lg:w-[460px]
                  py-3 px-6
                  bg-white/10
                  border border-[var(--accent-2)]
                  flex flex-col justify-center
                  outline-none
                  focus-within:ring-2 focus-within:ring-[var(--accent-2)]
                "
                style={{
                  maxHeight: "180px",
                  boxShadow:
                    "0 0 24px 1px var(--accent-2), 0 2px 8px 0 rgba(0,0,0,0.09)",
                }}
                tabIndex={0}
                aria-label={`${item.title}: ${item.place}`}
              >
                <div className="flex items-center gap-3 text-2xl mb-1 text-[var(--accent-2)]">
                  {item.icon}
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--accent-1)] opacity-90 mb-1">
                  {item.place}
                </p>
                <p className="mb-1 text-[var(--muted)]">{item.desc}</p>
                <p className="text-xs text-[var(--muted)] opacity-70">
                  {item.date}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
