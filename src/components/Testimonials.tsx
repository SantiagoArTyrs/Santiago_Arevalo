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
          quote: "Trabajar con él fue una experiencia increíble. Siempre encuentra soluciones innovadoras.",
          img: "/img1.jpg",
        },
        {
          name: "Steven Alejandro",
          role: "Ingeniero de Software",
          quote: "Su habilidad para combinar diseño y código hace que cada proyecto brille.",
          img: "/img2.jpg",
        },
        {
          name: "Ana Rodríguez",
          role: "CTO en TechWave",
          quote: "Un profesional apasionado y muy confiable. Entrega resultados impecables.",
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
          quote: "Working with him was an amazing experience. Always finds innovative solutions.",
          img: "/img1.jpg",
        },
        {
          name: "Steven Alejandro",
          role: "Software Engineer",
          quote: "His ability to merge design and code makes every project shine.",
          img: "/img2.jpg",
        },
        {
          name: "Ana Rodríguez",
          role: "CTO at TechWave",
          quote: "A passionate and reliable professional. Delivers impeccable results.",
          img: "/img3.jpg",
        },
      ],
    },
  }[lang];

  return (
    <section
      id="testimonials"
            className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      
    >
      {/* Título */}
      <motion.h2
      className="text-4xl md:text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: "var(--main-title-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {texts.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {texts.items.map((t, i) => (
          <motion.div
            key={i}
            className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.10)", // para glass en ambos modos
              boxShadow: "0 0 32px 2px var(--accent-2), 0 2px 8px 0 rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4"
              style={{
                border: "2px solid var(--accent-2)",
              }}
            />
            <p
              className="italic mb-4"
              style={{ color: "var(--muted)" }}
            >
              “{t.quote}”
            </p>
            <h3
              className="text-xl font-semibold"
              style={{
                color: "var(--accent-2)",
              }}
            >
              {t.name}
            </h3>
            <span
              className="text-sm"
              style={{
                color: "var(--muted)",
                opacity: 0.7,
              }}
            >
              {t.role}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
