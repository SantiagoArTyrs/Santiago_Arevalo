"use client";

import { FC, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = { lang?: "es" | "en" };
type Particle = {
  w: number;
  h: number;
  top: string;
  left: string;
  dur: number;
};

const COPY = {
  es: {
    handle: "TyrSAr",
    subtitle: "FullStack Developer",
    cv: "CV",
    projects: "Ver proyectos",
  },
  en: {
    handle: "TyrSAr",
    subtitle: "FullStack Developer",
    cv: "CV",
    projects: "View projects",
  },
} as const;

/* Pool caótico de líneas Matrix */
const matrixCodeChunks = [
    "for i in range(10): pass",
  "def foo(): return 42",
  "import sys, os",
  "[ PY_ENGINE ]",
  "try: x = 1/0",
  "if err: raise Exception()",
  "lambda x: x**2",
  "print('🐍 Python Mode')",
  "class Matrix(Exception): pass",
  "with open('core.py') as f:",
  "__name__ == '__main__'",
  "async def hack(): await run()",
  "from dataclasses import dataclass",
  "def init(): print('0xDEAD')",
  "NoneType not callable",
  "[ OK ]",
  "@dataclass class Code:",
  "while True: continue",
  "if __debug__: pass",
  "Σ = sum([1,2,3])",
];

const Hero: FC<Props> = ({ lang = "es" }) => {
  const texts = COPY[lang];
  const shouldReduceMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [typedCode, setTypedCode] = useState<any[]>([]);
  const [showFinalLines, setShowFinalLines] = useState(false);

  // Partículas decorativas
  useEffect(() => {
    if (shouldReduceMotion) return;
    setParticles(
      Array.from({ length: 18 }).map(() => ({
        w: Math.random() * 8 + 4,
        h: Math.random() * 8 + 4,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        dur: Math.random() * 4 + 3,
      }))
    );
  }, [shouldReduceMotion]);

  // Chaos Matrix code typing effect 💥
  useEffect(() => {
    if (shouldReduceMotion) {
      setShowFinalLines(true);
      return;
    }
    setTypedCode([]);
    setShowFinalLines(false);

    let steps = 0;
    const glitchClasses = [
      "matrix-line text-xs",
      "matrix-line text-base",
      "text-neon-green tracking-wider",
      "matrix-line opacity-75",
      "matrix-line text-[10px]",
      "matrix-line scale-105",
      "matrix-line rotate-1",
      "matrix-line rotate--1",
    ];

    const updateLines = () => {
      // Caos: 18-34 líneas, mezclas random
      const lines = Array.from(
        { length: Math.floor(Math.random() * 20 + 20) },
        () => {
          const txt =
            matrixCodeChunks[
              Math.floor(Math.random() * matrixCodeChunks.length)
            ];
          const chaos = Math.random() < 0.25 ? " ▒▓█░" : "";
          return txt + (Math.random() < 0.7 ? chaos : "");
        }
      ).map((line, i) => ({
        text: line,
        className:
          glitchClasses[Math.floor(Math.random() * glitchClasses.length)],
      }));

      setTypedCode([...lines]);
      steps++;
      if (steps < 20) {
        setTimeout(updateLines, 240);
      } else {
        setShowFinalLines(true);
      }
    };
    updateLines();

    return () => {
      setShowFinalLines(false);
      setTypedCode([]);
    };
  }, [lang, shouldReduceMotion]);

  const sharedBtnClass =
    "px-6 py-3 rounded-2xl font-semibold transition-transform shadow-md bg-[linear-gradient(90deg,var(--accent-2),var(--accent-1))] text-white glass glow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-1)]";

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center bg-transparent relative overflow-hidden"
      style={{ minHeight: "100dvh", overflowX: "hidden" }}
    >
      {/* Fondo gradiente animado y partículas */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-gradient bg-[length:200%_200%]"
        style={{
          background:
            "linear-gradient(to bottom right, var(--accent-2), var(--accent-1), var(--bg-2))",
        }}
      />
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden -z-10"
        >
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: p.w,
                height: p.h,
                top: p.top,
                left: p.left,
                background: "var(--accent-2)",
                opacity: 0.25,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      <div
        className="
        w-full 
        flex flex-col md:flex-row 
        items-stretch justify-center 
        max-w-7xl min-h-[80vh] 
        z-10 mx-auto px-4
        relative
      "
      >
        {/* Editor Terminal Matrix caótico */}
        <div className="w-full md:w-[50%] h-full flex items-stretch mb-8 md:mb-0">
          <div
            className="
              relative 
              bg-[color:var(--bg-2)] shadow-xl rounded-2xl 
              p-4 sm:p-8 w-full 
              min-h-[320px] md:min-h-[80vh] 
              flex flex-col justify-between
            "
          >
            {/* Barra VSCode */}
            <div className="flex items-center gap-2 py-3 px-4 border-b border-[color:var(--bg-1)]">
              <span className="w-3 h-3 rounded-full bg-red-400/70"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400/70"></span>
              <span className="w-3 h-3 rounded-full bg-green-400/70"></span>
              <span className="ml-3 text-sm font-semibold tracking-widest uppercase text-[color:var(--muted)]">
                portfolio.tsx
              </span>
            </div>
            {/* Terminal/code */}
            <div className="p-6 font-mono text-xs md:text-base text-neon-green whitespace-pre transition-all flex-1 flex flex-col justify-center max-h-[240px] md:min-h-[calc(40vh)] overflow-x-hidden">
              {!showFinalLines ? (
                typedCode.map((obj, i) => (
                  <div key={i} className={obj.className}>
                    {obj.text}
                  </div>
                ))
              ) : (
                <>
                  <div className="text-[var(--accent-1)] font-bold text-xl">
                    {texts.handle}
                  </div>
                  <div>{texts.subtitle}</div>
                  <div>&nbsp;</div>
                </>
              )}
            </div>
            {/* Botones */}
            <div
              className="
                flex flex-wrap gap-4 w-full px-2 pb-4 md:pb-6 mt-2
                justify-center md:justify-start
             "
            >
              <a href="/cv.pdf" className={sharedBtnClass} download>
                {texts.cv}
              </a>
              <a href="#projects" className={sharedBtnClass}>
                {texts.projects}
              </a>
            </div>
          </div>
        </div>

        {/* Espaciador solo desktop */}
        <div className="hidden md:block" style={{ width: "12%" }} />

        {/* Imagen card derecha, giro 3D */}
        <div className="w-full md:w-[38%] flex items-start justify-center relative h-[280px] md:h-[80vh]">
          <div className="relative w-full h-full flex flex-col justify-center items-center perspective-800">
            <div
              className="
                relative
                w-[70vw] h-[80vw] max-w-[380px] max-h-[65vh]
                md:w-full md:h-full md:max-w-full md:max-h-full
                transform-3d
                animate-spinY
              "
            >
              {/* Cara frontal */}
              <div
                className="
                absolute top-0 left-0 w-full h-full
                backface-hidden
                flex items-center justify-center
              "
              >
                <img
                  src="/image_me.jpg"
                  alt="imagen de Santiago Arevalo"
                  className="w-full h-full object-contain rounded-2xl"
                  draggable={false}
                />
              </div>
              {/* Cara trasera */}
              <div
                className="
                  absolute top-0 left-0 w-full h-full
                  backface-hidden
                  flex items-center justify-center
                "
                style={{ transform: "rotateY(180deg)" }}
              >
                <img
                  src="/image_me.jpg"
                  alt="imagen de Santiago Arevalo"
                  className="w-full h-full object-contain rounded-2xl"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
