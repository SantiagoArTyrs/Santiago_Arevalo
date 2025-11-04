import { FC, useState, useRef, useEffect } from "react";
import { FiSun, FiMoon, FiGlobe, FiMenu } from "react-icons/fi";

// 1. Tipado de idioma estricto y seguro
type Lang = "es" | "en";

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
  theme: string;
};

// 2. Textos internacionalizados (as const para máxima seguridad TS)
const NAV_TEXTS = {
  es: {
    home: "Inicio",
    skills: "Habilidades",
    projects: "Proyectos",
    testimonials: "Testimonios",
    experience: "Experiencia",
    contact: "Contacto"
  },
  en: {
    home: "Home",
    skills: "Skills",
    projects: "Projects",
    testimonials: "Testimonials",
    experience: "Experience",
    contact: "Contact"
  }
} as const;

const Navbar: FC<Props> = ({ lang, setLang, toggleTheme, theme }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cierre automático del menú mobile al hacer click afuera
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const texts = NAV_TEXTS[lang]; // 100% type-safe

  return (
    <header className="w-full fixed top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 md:px-8 bg-black/40 backdrop-blur-sm rounded-b-2xl">
        <div className="flex items-center gap-3">
          <div className="text-lg font-bold">&lt;Santiago Arevalo /&gt;</div>
          <div className="hidden md:flex gap-4 ml-6">
            <a href="#hero" className="kicker hover:underline">{texts.home}</a>
            <a href="#skills" className="kicker hover:underline">{texts.skills}</a>
            <a href="#projects" className="kicker hover:underline">{texts.projects}</a>
            <a href="#testimonials" className="kicker hover:underline">{texts.testimonials}</a>
            <a href="#experience" className="kicker hover:underline">{texts.experience}</a>
            <a href="#contact" className="kicker hover:underline">{texts.contact}</a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            title="Toggle language"
            className="p-2 rounded-md hover:bg-white/5"
            aria-label="Idioma / Language"
          >
            <FiGlobe />
          </button>
          <button
            onClick={toggleTheme}
            title="Theme"
            className="p-2 rounded-md hover:bg-white/5"
            aria-label="Theme / Tema"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/5"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 px-4" ref={menuRef}>
          <nav className="bg-black/40 backdrop-blur-sm p-4 rounded-lg space-y-3">
            <a href="#hero" className="block" onClick={() => setOpen(false)}>{texts.home}</a>
            <a href="#skills" className="block" onClick={() => setOpen(false)}>{texts.skills}</a>
            <a href="#projects" className="block" onClick={() => setOpen(false)}>{texts.projects}</a>
            <a href="#testimonials" className="block" onClick={() => setOpen(false)}>{texts.testimonials}</a>
            <a href="#experience" className="block" onClick={() => setOpen(false)}>{texts.experience}</a>
            <a href="#contact" className="block" onClick={() => setOpen(false)}>{texts.contact}</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;



