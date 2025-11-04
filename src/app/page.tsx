"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/Skills";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Experience from "../components/Experience";
import Hobbies from "../components/Hobbies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Persistencia de idioma y tema
  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as "es" | "en" | null;
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (storedLang) setLang(storedLang);
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // El background y min-h-screen solo en el div principal, nunca en sections.
    <div className="flex flex-col min-h-screen">
      <Navbar
        lang={lang}
        setLang={(l) => {
          setLang(l as "es" | "en");
          localStorage.setItem("lang", l);
        }}
        toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        theme={theme}
      />
      {/* El background se hereda en todo el layout global por CSS */}
      <main className="flex-1 flex flex-col">
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Testimonials lang={lang} />
        <Experience lang={lang} />
        <Hobbies lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

/*
PRINCIPALES MEJORAS Y NOTAS:
- Todas las variables globales (fondo, modo, min-h-screen) sólo aplican en el wrapper principal (div).  
- Las secciones no deben usar min-h-screen ni bg-... para evitar cortes o espacios muertos.
- Cambios de theme y lang persistentes y reactivos: UX moderna y robusta.
- Componentes cargan props armoniosamente sin “props drilling” innecesario ni repetición.
- Totalmente preparado para renderizado fluido, responsive y consistente en cualquier dispositivo.
*/
