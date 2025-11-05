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
    <footer
      className="exclusive-gradient relative w-full flex-shrink-0 py-10 px-6 md:px-20 overflow-hidden"
      style={{
        // Fondo gradiente global, solo con variables CSS
        background: "linear-gradient(180deg, var(--bg-1), var(--bg-2))",
        color: "var(--muted)",
        marginTop: 0
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--accent-2)", opacity: 0.20 }}
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--accent-1)", opacity: 0.20 }}
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/SantiagoArTyrs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-2)] transition focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)] rounded"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/s-a-3ab9a638b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-2)] transition focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)] rounded"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sant__s.b?igsh=MWd4d2ZmMnc1a2N6Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-1)] transition focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)] rounded"
            aria-label="Twitter/X"
          >
            <FaXTwitter />
          </a>
        </div>

        <motion.p
          className="text-sm"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {texts.rights}
        </motion.p>
        <motion.p
          className="text-xs italic"
          style={{ color: "var(--muted)", opacity: 0.7 }}
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
