"use client";

import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  lang: "es" | "en";
};

const Testimonials: FC<Props> = ({ lang }) => {
  const texts = {
    es: {
      title: "Testimonios",
      items: [
        {
          name: "Jhonatan Mideros",
          role: "Desarrollador Backend y Frontend",
          quote:
            "Trabajar con él fue una experiencia increíble. Siempre encuentra soluciones innovadoras.",
          img: "/img1.jpg",
        },
        {
          name: "Steven Alejandro",
          role: "Ingeniero de Software",
          quote:
            "Su habilidad para combinar diseño y código hace que cada proyecto brille.",
          img: "/img2.jpg",
        },
        {
          name: "Ana Rodríguez",
          role: "CTO en TechWave",
          quote:
            "Un profesional apasionado y muy confiable. Entrega resultados impecables.",
          img: "/img3.jpg",
        },
      ],
    },
    en: {
      title: "Testimonials",
      items: [
        {
          name: "Jhonatan Mideros",
          role: "Backend and frontend developer",
          quote:
            "Working with him was an amazing experience. Always finds innovative solutions.",
          img: "/img1.jpg",
        },
        {
          name: "Steven Alejandro",
          role: "Software Engineer",
          quote:
            "His ability to merge design and code makes every project shine.",
          img: "/img2.jpg",
        },
        {
          name: "Ana Rodríguez",
          role: "CTO at TechWave",
          quote:
            "A passionate and reliable professional. Delivers impeccable results.",
          img: "/img3.jpg",
        },
      ],
    },
  }[lang];

  return (
    <section
      id="testimonials"
      className="relative py-15 px-6 md:px-20 text-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {texts.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {texts.items.map((t, i) => (
          <motion.div
            key={i}
            className="glass glow p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 border-2 border-cyan-400"
            />
            <p className="text-gray-300 italic mb-4">“{t.quote}”</p>
            <h3 className="text-xl font-semibold text-white">{t.name}</h3>
            <span className="text-sm text-gray-400">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
