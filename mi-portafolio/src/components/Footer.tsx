"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

type Props = {
  lang: "es" | "en";
};

const Footer: FC<Props> = ({ lang }) => {
  const texts = {
    es: {
      rights: "© 2025 Santiago Arévalo (TyrSAr). Todos los derechos reservados.",
      made: "Diseñado y desarrollado con corazón",
    },
    en: {
      rights: "© 2025 Santiago Arévalo (TyrSAr). All rights reserved.",
      made: "Designed and developed with heart",
    },
  }[lang];

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-950 to-black text-gray-400 py-10 px-6 md:px-20 overflow-hidden">
      {/* Animación de fondo */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Redes sociales */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Texto */}
        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {texts.rights}
        </motion.p>
        <motion.p
          className="text-xs text-gray-500 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          {texts.made}
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
