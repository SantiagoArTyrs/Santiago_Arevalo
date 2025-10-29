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

  // load persisted preferences
  useEffect(() => {
    const L = localStorage.getItem("lang") as "es" | "en" | null;
    const T = localStorage.getItem("theme") as "dark" | "light" | null;
    if (L) setLang(L);
    if (T) setTheme(T);
  }, []);

  useEffect(() => {
    // apply theme
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar
        lang={lang}
        setLang={(l) => {
          setLang(l as "es" | "en");
          localStorage.setItem("lang", l);
        }}
        toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        theme={theme}
      />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Testimonials lang={lang} />
        <Experience lang={lang} />
        <Hobbies lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </main>
    </>
  );
}
