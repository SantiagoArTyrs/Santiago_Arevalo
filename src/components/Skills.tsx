"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Lightbulb, Users, Zap } from "lucide-react";

interface Props {
  lang: "es" | "en";
}

const Skills: FC<Props> = ({ lang }) => {
  const texts = {
    es: {
      title: "Mis Habilidades",
      desc: "Estas son algunas de las tecnologías y habilidades que uso y disfruto dominar.",
      hard: "Habilidades Técnicas",
      soft: "Habilidades Blandas",
      hardSkills: [
        { icon: <Code size={36} />, label: "JavaScript / TypeScript" },
        { icon: <Cpu size={36} />, label: "Node.js / Express" },
        { icon: <Globe size={36} />, label: "React / Next.js" },
        { icon: <Zap size={36} />, label: "IA & Machine Learning" },
      ],
      softSkills: [
        { icon: <Users size={36} />, label: "Trabajo en equipo" },
        { icon: <Lightbulb size={36} />, label: "Resolución de problemas" },
        { icon: <Zap size={36} />, label: "Adaptabilidad" },
        { icon: <Cpu size={36} />, label: "Pensamiento crítico" },
      ],
    },
    en: {
      title: "My Skills",
      desc: "These are some of the technologies and skills I use and enjoy mastering.",
      hard: "Technical Skills",
      soft: "Soft Skills",
      hardSkills: [
        { icon: <Code size={36} />, label: "JavaScript / TypeScript" },
        { icon: <Cpu size={36} />, label: "Node.js / Express" },
        { icon: <Globe size={36} />, label: "React / Next.js" },
        { icon: <Zap size={36} />, label: "AI & Machine Learning" },
      ],
      softSkills: [
        { icon: <Users size={36} />, label: "Teamwork" },
        { icon: <Lightbulb size={36} />, label: "Problem Solving" },
        { icon: <Zap size={36} />, label: "Adaptability" },
        { icon: <Cpu size={36} />, label: "Critical Thinking" },
      ],
    },
  }[lang];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      style={{
        background: "linear-gradient(135deg, var(--bg-1), var(--bg-2))",
        color: "var(--muted)",
      }}
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        style={{ color: "var(--accent-2)" }}
      >
        {texts.title}
      </motion.h2>
      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl max-w-3xl text-center mb-12"
        style={{ color: "var(--muted)" }}
      >
        {texts.desc}
      </motion.p>
      {/* Hard Skills */}
      <div className="w-full max-w-5xl mb-16">
        <h3
          className="text-2xl font-semibold mb-8 text-center"
          style={{ color: "var(--accent-2)" }}
        >
          {texts.hard}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {texts.hardSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.10)",
                  color: "var(--accent-2)", // cambia automá. según tema
                  padding: "1rem",
                  borderRadius: "1rem",
                  marginBottom: "0.75rem",
                }}
              >
                {skill.icon}
              </div>
              <span
                className="font-medium"
                style={{ color: "var(--muted)" }}
              >
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Soft Skills */}
      <div className="w-full max-w-5xl">
        <h3
          className="text-2xl font-semibold mb-8 text-center"
          style={{ color: "var(--accent-1)" }}
        >
          {texts.soft}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {texts.softSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.10)",
                  color: "var(--accent-1)", // cambia automá. según tema
                  padding: "1rem",
                  borderRadius: "1rem",
                  marginBottom: "0.75rem",
                }}
              >
                {skill.icon}
              </div>
              <span
                className="font-medium"
                style={{ color: "var(--muted)" }}
              >
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
