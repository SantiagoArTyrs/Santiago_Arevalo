"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

type Props = {
  lang: "es" | "en";
};

const Contact: FC<Props> = ({ lang }) => {
  const texts = {
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
  }[lang];

  return (
    <section id="contact" className="relative py-20 px-6 md:px-20 text-center">
      {/* Título */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {texts.title}
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {texts.subtitle}
      </motion.p>

      {/* Formulario */}
      <motion.form
        className="glass glow max-w-2xl mx-auto p-8 rounded-2xl space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder={texts.name}
          className="w-full p-3 rounded-lg bg-gray-900/60 border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 transition"
        />
        <input
          type="email"
          placeholder={texts.email}
          className="w-full p-3 rounded-lg bg-gray-900/60 border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 transition"
        />
        <textarea
          rows={5}
          placeholder={texts.message}
          className="w-full p-3 rounded-lg bg-gray-900/60 border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 transition"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          {texts.button}
        </button>
      </motion.form>

      {/* Redes sociales */}
      <motion.div
        className="flex justify-center gap-6 mt-12 text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition">
          <FaInstagram />
        </a>
        <a href="https://x.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">
          <FaXTwitter />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
