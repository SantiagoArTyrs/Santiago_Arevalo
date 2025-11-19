// Testimonials.tsx
"use client";

import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Tipos para textos y testimonios
type Lang = "es" | "en";
type Item = { name: string; role: string; quote: string; img: string };
type Texts = { title: string; items: Item[] };

// Data internacionalizada
const TEXTS: Record<Lang, Texts> = {
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
        name: "Jose Burbano",
        role: "Ingeniero de software",
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
        name: "Jose Burbano",
        role: "Software Engieneer",
        quote:
          "A passionate and reliable professional. Delivers impeccable results.",
        img: "/img3.jpg",
      },
    ],
  },
};

interface Props {
  lang?: Lang;
}


const Testimonials: FC<Props> = ({ lang = "es" }) => {
  const texts = TEXTS[lang];
  const reduce = useReducedMotion();
  const initialY = reduce ? 0 : 30;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="exclusive-gradient relative flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center overflow-hidden"
    >
      <motion.h2
        id="testimonials-title"
        className="text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: initialY }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          background: "var(--main-title-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {texts.title}
      </motion.h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {texts.items.map((t) => (
          <motion.div
            key={t.name}
            className="flex flex-col items-center rounded-2xl p-8 bg-white/10 shadow-xl transition-transform duration-300 hover:scale-105 focus-within:scale-105 focus-within:ring-2 focus-within:ring-[var(--accent-2)] outline-none"
            initial={{ opacity: 0, y: initialY }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            style={{
              boxShadow:
                "0 0 32px 2px var(--accent-2), 0 2px 8px 0 rgba(0,0,0,0.08)",
            }}
            tabIndex={0}
            aria-label={`Testimonio de ${t.name}`}
          >
            <img
              src={t.img}
              alt={`Foto de ${t.name}`}
              className="w-20 h-20 rounded-full mb-4 border-2.5 border-[var(--accent-2)] object-cover"
              loading="lazy"
            />
            <p className="italic mb-4 text-[var(--muted)]">“{t.quote}”</p>
            <h3 className="text-lg font-bold text-[var(--accent-2)] mb-1">{t.name}</h3>
            <span className="text-sm text-[var(--muted)] opacity-80">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


