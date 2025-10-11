import { motion } from "framer-motion";

export const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
  >
    <motion.div
      className="max-w-3xl mx-auto flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* 📸 Imagen de perfil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-6 relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-[0_0_25px_rgba(0,173,181,0.2)]"
      >
        <img
          src="/images/profile.jpg" // 📁 coloca tu imagen en /public/images/profile.jpg
          alt="Hernán Vásquez"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Nombre y título */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[--color-light] leading-tight">
        Hernán José Vásquez Araujo
      </h1>

      <motion.h2
        className="text-xl md:text-2xl text-[--color-primary] font-medium mb-6 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Desarrollador Full Stack
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-300 mb-8 leading-relaxed text-base md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Me apasiona construir experiencias digitales claras y funcionales.  
        Disfruto combinar diseño, lógica y estrategia para dar forma a productos que realmente aporten valor.
      </motion.p>

      {/* Botones */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="mailto:vasquezaraujoh@gmail.com"
          className="px-6 py-3 rounded-xl border border-[--color-primary] text-[--color-primary] font-semibold hover:bg-[--color-primary] hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-[--color-primary]/30"
        >
          Contáctame
        </a>

        <a
          href="https://github.com/nachjv19"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl border border-[--color-primary] text-[--color-primary] font-semibold hover:bg-[--color-primary] hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-[--color-primary]/30"
        >
          Mi GitHub
        </a>
      </motion.div>
    </motion.div>
  </section>
);
