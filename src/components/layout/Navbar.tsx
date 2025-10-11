import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
];

export const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <span
          className="text-[--color-primary] font-semibold text-xl cursor-pointer select-none"
          onClick={() => scrollToSection("hero")}
        >
          HV
        </span>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer hover:text-[--color-primary] transition-colors ${
                active === id ? "text-[--color-primary] font-medium" : ""
              }`}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa siempre visible */}
        <div
          className="md:hidden flex flex-col justify-center items-center gap-[6px] cursor-pointer w-10 h-10 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            animate={{
              rotate: open ? 45 : 0,
              y: open ? 7 : 0,
            }}
            className={`w-7 h-[3px] rounded-full transition-all duration-300 ${
              open ? "bg-[--color-primary]" : "bg-gray-200"
            }`}
          />
          <motion.span
            animate={{
              opacity: open ? 0 : 1,
            }}
            className={`w-7 h-[3px] rounded-full transition-all duration-300 ${
              open ? "bg-[--color-primary]" : "bg-gray-200"
            }`}
          />
          <motion.span
            animate={{
              rotate: open ? -45 : 0,
              y: open ? -7 : 0,
            }}
            className={`w-7 h-[3px] rounded-full transition-all duration-300 ${
              open ? "bg-[--color-primary]" : "bg-gray-200"
            }`}
          />
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-md border-t border-gray-800 shadow-lg"
          >
            <ul className="flex flex-col items-center py-6 gap-6 text-gray-300 text-lg">
              {sections.map(({ id, label }) => (
                <motion.li
                  key={id}
                  onClick={() => scrollToSection(id)}
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer hover:text-[--color-primary] transition-colors ${
                    active === id ? "text-[--color-primary] font-medium" : ""
                  }`}
                >
                  {label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
