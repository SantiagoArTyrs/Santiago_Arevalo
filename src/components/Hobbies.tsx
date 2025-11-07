// Hobbies.tsx
"use client";

import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Music, Gamepad2, Film, Headphones, Dumbbell } from "lucide-react";


interface Props {
  lang: "es" | "en";
}

const TEXTS = {
  es: {
    title: "Mis Hobbies e Intereses",
    desc: "Más allá del código, me gusta disfrutar de actividades que me inspiran y recargan energía.",
    items: [
      { icon: <Dumbbell size={36} />, label: "Ping Pong" },
      { icon: <Film size={36} />, label: "Películas" },
      { icon: <Gamepad2 size={36} />, label: "Videojuegos" },
      { icon: <Headphones size={36} />, label: "Música" },
      { icon: <Music size={36} />, label: "Crear playlists" },
    ],
  },
  en: {
    title: "My Hobbies & Interests",
    desc: "Beyond coding, I enjoy activities that inspire me and recharge my energy.",
    items: [
      { icon: <Dumbbell size={36} />, label: "Ping Pong" },
      { icon: <Film size={36} />, label: "Movies" },
      { icon: <Gamepad2 size={36} />, label: "Gaming" },
      { icon: <Headphones size={36} />, label: "Music" },
      { icon: <Music size={36} />, label: "Making Playlists" },
    ],
  },
} as const;


const Hobbies: FC<Props> = ({ lang }) => {
  const texts = TEXTS[lang];
  const reduce = useReducedMotion();

  return (
    <section
      id="hobbies"
      className="exclusive-gradient relative flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center overflow-hidden"
    >
      {/* Título gradiente */}
      <motion.h2
        initial={{ opacity: 0, y: reduce ? 0 : 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-3 font-bold text-2xl sm:text-3xl md:text-5xl bg-clip-text text-transparent"
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-[var(--muted)]"
      >
        {texts.desc}
      </motion.p>

      {/* Hobbies Grid */}
      <div
        className="grid gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto w-full"
      >
        {texts.items.map((hobby, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: reduce ? 1 : 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            viewport={{ once: true }}
            className="
              flex flex-col items-center gap-2 px-4 py-5 sm:px-6 sm:py-6
              rounded-2xl shadow-lg bg-white/10
              hover:scale-110 transition-transform duration-300
              focus-within:ring-2 focus-within:ring-[var(--accent-2)]
              outline-none
            "
            tabIndex={0}
            aria-label={hobby.label}
            style={{
              boxShadow: "0 2px 18px 0 var(--accent-2), 0 1px 8px 0 rgba(0,0,0,0.08)",
              backdropFilter: "blur(8px) saturate(180%)",
              WebkitBackdropFilter: "blur(8px) saturate(180%)",
            }}
          >
            <span style={{ color: "var(--accent-1)" }}>{hobby.icon}</span>
            <span
              className="font-medium text-xs sm:text-sm md:text-base lg:text-lg text-center text-[var(--muted)]"
            >
              {hobby.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;


