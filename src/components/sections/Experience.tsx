import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export const Experience = () => (
  <section
    id="experience"
    className="relative py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200"
  >
    <SectionTitle>Experiencia</SectionTitle>

    <div className="max-w-5xl mx-auto mt-10 relative">
      {/* Línea del timeline */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[var(--color-primary)]/40"></div>

      <div className="space-y-20">
        {/* Bloque 1 */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Punto del timeline (desktop only) */}
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          {/* Columna izquierda */}
          <div className="md:w-1/2 md:text-right pr-0 md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              Gestión, Soporte Técnico y Desarrollo Tecnológico
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              Negocios Familiares / Autónomo (2018 — Presente)
            </p>
          </div>

          {/* Columna derecha */}
          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>Administración de operaciones, presupuestos e inventarios.</li>
              <li>Soporte técnico y desarrollo de soluciones con Python y JavaScript.</li>
              <li>Integración de bases de datos SQL/NoSQL y digitalización de procesos.</li>
            </ul>
          </div>
        </motion.div>

        {/* Bloque 2 */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right pr-0 md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              Desarrollador Full Stack
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              RiwiCoder Bootcamp (2025)
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>Creación de SPAs y MPAs con autenticación y roles.</li>
              <li>Desarrollo de APIs REST con Node.js, FastAPI y Spring Boot.</li>
              <li>Integración con Next.js y Tailwind CSS.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Línea vertical alternativa para móviles */}
    <div className="md:hidden mt-12 w-[2px] h-24 mx-auto bg-[var(--color-primary)]/40 rounded-full"></div>
  </section>
);
