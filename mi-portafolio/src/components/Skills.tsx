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
      desc: "Estas son algunas de las habilidades técnicas y blandas que me definen como desarrollador y persona.",
      hard: "Habilidades Técnicas",
      soft: "Habilidades Blandas",
      hardSkills: [
        { icon: <Code />, label: "JavaScript / TypeScript", level: 90 },
        { icon: <Cpu />, label: "Node.js / Express", level: 85 },
        { icon: <Globe />, label: "React / Next.js", level: 88 },
        { icon: <Zap />, label: "IA & Machine Learning", level: 70 },
      ],
      softSkills: [
        { icon: <Users />, label: "Trabajo en equipo", level: 95 },
        { icon: <Lightbulb />, label: "Resolución de problemas", level: 90 },
        { icon: <Zap />, label: "Adaptabilidad", level: 85 },
        { icon: <Cpu />, label: "Pensamiento crítico", level: 88 },
      ],
    },
    en: {
      title: "My Skills",
      desc: "These are some of the technical and soft skills that define me as a developer and as a person.",
      hard: "Technical Skills",
      soft: "Soft Skills",
      hardSkills: [
        { icon: <Code />, label: "JavaScript / TypeScript", level: 90 },
        { icon: <Cpu />, label: "Node.js / Express", level: 85 },
        { icon: <Globe />, label: "React / Next.js", level: 88 },
        { icon: <Zap />, label: "AI & Machine Learning", level: 70 },
      ],
      softSkills: [
        { icon: <Users />, label: "Teamwork", level: 95 },
        { icon: <Lightbulb />, label: "Problem Solving", level: 90 },
        { icon: <Zap />, label: "Adaptability", level: 85 },
        { icon: <Cpu />, label: "Critical Thinking", level: 88 },
      ],
    },
  }[lang];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white px-6 py-20"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        {texts.title}
      </motion.h2>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl max-w-3xl text-center text-gray-300 mb-12"
      >
        {texts.desc}
      </motion.p>

      {/* Hard Skills */}
      <div className="w-full max-w-4xl mb-12">
        <h3 className="text-2xl font-semibold mb-6">{texts.hard}</h3>
        <div className="space-y-6">
          {texts.hardSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-pink-400">{skill.icon}</span>
                <span className="font-medium">{skill.label}</span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="w-full max-w-4xl">
        <h3 className="text-2xl font-semibold mb-6">{texts.soft}</h3>
        <div className="space-y-6">
          {texts.softSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-blue-400">{skill.icon}</span>
                <span className="font-medium">{skill.label}</span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-3 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
