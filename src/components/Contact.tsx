// Contact.tsx — versión profesional y fluida
"use client";

import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  lang: "es" | "en";
};

const TEXTS = {
  es: {
    title: "Contáctame",
    subtitle: "¿Tienes una idea o proyecto? Hablemos 🚀",
    name: "Tu Nombre",
    email: "Tu Correo",
    message: "Tu Mensaje",
    button: "Enviar",
  },
  en: {
    title: "Contact Me",
    subtitle: "Do you have an idea or project? Let’s talk 🚀",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    button: "Send",
  },
} as const;


const Contact: FC<Props> = ({ lang }) => {
  const texts = TEXTS[lang];
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="exclusive-gradient relative flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center overflow-hidden"
    >
      {/* Título con gradiente y escala moderna */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: reduce ? 0 : -20 }}
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

      {/* Subtítulo */}
      <motion.p
        className="mb-8 text-base sm:text-lg md:text-xl text-[var(--muted)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {texts.subtitle}
      </motion.p>

      {/* Formulario de contacto */}
      <motion.form
        className="shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-4 py-6 md:p-10 rounded-2xl space-y-6 bg-white/10 backdrop-blur-md"
        initial={{ opacity: 0, scale: reduce ? 1 : 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder={texts.name}
          aria-label={texts.name}
          className="w-full p-3 rounded-lg border outline-none transition bg-white/20 border-[1.4px] border-[var(--accent-2)] text-[var(--muted)]"
          required
        />
        <input
          type="email"
          placeholder={texts.email}
          aria-label={texts.email}
          className="w-full p-3 rounded-lg border outline-none transition bg-white/20 border-[1.4px] border-[var(--accent-2)] text-[var(--muted)]"
          required
        />
        <textarea
          rows={5}
          placeholder={texts.message}
          aria-label={texts.message}
          className="w-full p-3 rounded-lg border outline-none resize-none transition bg-white/20 border-[1.4px] border-[var(--accent-2)] text-[var(--muted)]"
          required
        />
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform bg-[linear-gradient(90deg,var(--accent-2),var(--accent-1))] text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
        >
          {texts.button}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;


