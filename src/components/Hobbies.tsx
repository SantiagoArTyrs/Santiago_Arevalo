"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Music, Gamepad2, Film, Headphones, Dumbbell } from "lucide-react";

interface Props {
  lang: "es" | "en";
}

const Hobbies: FC<Props> = ({ lang }) => {
  const texts = {
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
  }[lang];

  return (
    <section
      id="hobbies"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white px-6 py-20"
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

      {/* Hobbies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {texts.items.map((hobby, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:scale-110 transition-transform duration-300"
          >
            <span className="text-pink-400">{hobby.icon}</span>
            <span className="text-white font-medium text-lg">{hobby.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
