import { FC, useState } from "react";
import { FiSun, FiMoon, FiGlobe, FiMenu } from "react-icons/fi";


type Props = {
  lang: string;
  setLang: (l: string) => void;
  toggleTheme: () => void;
  theme: string;
};

const Navbar: FC<Props> = ({ lang, setLang, toggleTheme, theme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 md:px-8 bg-black/40 backdrop-blur-sm rounded-b-2xl">
        <div className="flex items-center gap-3">
          <div className="text-lg font-bold">&lt;Santiago Arevalo /&gt;</div>
          <div className="hidden md:flex gap-4 ml-6">
            <a href="#hero" className="kicker hover:underline">
              Home
            </a>
            <a href="#skills" className="kicker hover:underline">
              Skills
            </a>
            <a href="#projects" className="kicker hover:underline">
              Projects
            </a>
            <a href="#testimonials" className="kicker hover:underline">
              Testimonials
            </a>
            <a href="#experience" className="kicker hover:underline">
              Experience
            </a>
            <a href="#contact" className="kicker hover:underline">
              Contact
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            title="Toggle language"
            className="p-2 rounded-md hover:bg-white/5"
          >
            <FiGlobe />
          </button>
          <button
            onClick={toggleTheme}
            title="Theme"
            className="p-2 rounded-md hover:bg-white/5"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="md:hidden p-2 rounded-md hover:bg-white/5"
            onClick={() => setOpen(!open)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 px-4">
          <nav className="bg-black/40 backdrop-blur-sm p-4 rounded-lg space-y-3">
            <a href="#hero" className="block">
              Home
            </a>
            <a href="#skills" className="block">
              Skills
            </a>
            <a href="#projects" className="block">
              Projects
            </a>
            <a href="#testimonials" className="block">
              Testimonials
            </a>
            <a href="#experience" className="block">
              Experience
            </a>
            <a href="#contact" className="block">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
