import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { Code2, Brain } from "lucide-react";

export const Skills = () => (
  <section
    id="skills"
    className="py-28 px-6 text-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200"
  >
    <SectionTitle>Habilidades</SectionTitle>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      {/* Habilidades técnicas */}
      <motion.div
        className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl p-10 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <Code2 className="text-[var(--color-primary)] w-8 h-8" />
          <h3 className="text-2xl font-semibold text-[var(--color-light)]">Technical Skills</h3>
        </div>

        <div className="space-y-6">
          {[
            { name: "JavaScript"},
            { name: "TypeScript"},
            { name: "Node.js"},
            { name: "React"},
            { name: "FastAPI"},
            { name: "Mysql /PostgreSQL / MongoDB"},
            { name: "TailwindCSS / HTML / CSS"},
            { name: "Git / GitHub"},
            { name: "Scrum / Agile"},
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
            >
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Habilidades blandas */}
      <motion.div
        className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl p-10 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <Brain className="text-[var(--color-primary)] w-8 h-8" />
          <h3 className="text-2xl font-semibold text-[var(--color-light)]">Soft Skills</h3>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-300 text-lg">
          <li className="hover:text-[var(--color-primary-light)] transition">Comunicación efectiva</li>
          <li className="hover:text-[var(--color-primary-light)] transition">Pensamiento crítico</li>
          <li className="hover:text-[var(--color-primary-light)] transition">Adaptabilidad y aprendizaje continuo</li>
          <li className="hover:text-[var(--color-primary-light)] transition">Resolución de problemas</li>
          <li className="hover:text-[var(--color-primary-light)] transition">Trabajo en equipo</li>
          <li className="hover:text-[var(--color-primary-light)] transition">Organización y planificación</li>
          <li className="hover:text-[var(--color-primary-light)] transition">Liderazgo técnico</li>
          <li className="hover:text-[var(--color-primary-light)] transition">Curiosidad y enfoque analítico</li>
        </ul>
      </motion.div>
    </div>
  </section>
);
