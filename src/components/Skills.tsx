// Skills.tsx
"use client";

import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code, Cpu, Globe, Lightbulb, Users, Zap } from "lucide-react";

// Tipos y constantes
type Lang = "es" | "en";
type Skill = { icon: React.ReactNode; label: string };
type Texts = {
  title: string;
  desc: string;
  hard: string;
  soft: string;
  hardSkills: Skill[];
  softSkills: Skill[];
};

const TEXTS: Record<Lang, Texts> = {
  es: {
    title: "Mis Habilidades",
    desc: "Estas son algunas de las tecnologías y habilidades que uso y disfruto dominar.",
    hard: "Habilidades Técnicas",
    soft: "Habilidades Blandas",
    hardSkills: [
      { icon: <Code size={36} aria-hidden="true" />, label: "JavaScript / TypeScript" },
      { icon: <Cpu size={36} aria-hidden="true" />, label: "Node.js / Express" },
      { icon: <Globe size={36} aria-hidden="true" />, label: "React / Next.js" },
      { icon: <Zap size={36} aria-hidden="true" />, label: "IA & Machine Learning" },
    ],
    softSkills: [
      { icon: <Users size={36} aria-hidden="true" />, label: "Trabajo en equipo" },
      { icon: <Lightbulb size={36} aria-hidden="true" />, label: "Resolución de problemas" },
      { icon: <Zap size={36} aria-hidden="true" />, label: "Adaptabilidad" },
      { icon: <Cpu size={36} aria-hidden="true" />, label: "Pensamiento crítico" },
    ],
  },
  en: {
    title: "My Skills",
    desc: "These are some of the technologies and skills I use and enjoy mastering.",
    hard: "Technical Skills",
    soft: "Soft Skills",
    hardSkills: [
      { icon: <Code size={36} aria-hidden="true" />, label: "JavaScript / TypeScript" },
      { icon: <Cpu size={36} aria-hidden="true" />, label: "Node.js / Express" },
      { icon: <Globe size={36} aria-hidden="true" />, label: "React / Next.js" },
      { icon: <Zap size={36} aria-hidden="true" />, label: "AI & Machine Learning" },
    ],
    softSkills: [
      { icon: <Users size={36} aria-hidden="true" />, label: "Teamwork" },
      { icon: <Lightbulb size={36} aria-hidden="true" />, label: "Problem Solving" },
      { icon: <Zap size={36} aria-hidden="true" />, label: "Adaptability" },
      { icon: <Cpu size={36} aria-hidden="true" />, label: "Critical Thinking" },
    ],
  },
} as const;

// Props estrictamente tipados
interface Props {
  lang?: Lang;
}


const Skills: FC<Props> = ({ lang = "es" }) => {
  const texts = TEXTS[lang];
  const reduce = useReducedMotion();
  const initialY = reduce ? 0 : 30;

  return (
    <section
  id="skills"
  className="exclusive-gradient relative flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center overflow-hidden"
>
      {/* Título principal */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: initialY }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          background: "var(--main-title-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {texts.title}
      </motion.h2>

      {/* Descripción */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-[var(--muted)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {texts.desc}
      </motion.p>

      {/* Hard Skills */}
      <div className="w-full max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-center text-[var(--accent-2)]">{texts.hard}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {texts.hardSkills.map((skill) => (
            <motion.div
              key={skill.label}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 focus-within:scale-105 outline-none"
              initial={{ opacity: 0, y: initialY }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              tabIndex={0}
              aria-label={skill.label}
            >
              <div className="p-4 rounded-2xl mb-3 bg-white/10 text-[var(--accent-2)]">
                {skill.icon}
              </div>
              <span className="font-medium text-[var(--muted)]">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="w-full max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8 text-center text-[var(--accent-1)]">{texts.soft}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {texts.softSkills.map((skill) => (
            <motion.div
              key={skill.label}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 focus-within:scale-105 outline-none"
              initial={{ opacity: 0, y: initialY }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              tabIndex={0}
              aria-label={skill.label}
            >
              <div className="p-4 rounded-2xl mb-3 bg-white/10 text-[var(--accent-1)]">
                {skill.icon}
              </div>
              <span className="font-medium text-[var(--muted)]">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


