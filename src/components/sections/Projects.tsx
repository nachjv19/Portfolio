import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { Button } from "primereact/button";
import  type { Project } from "../../types/Projects";

const projects: Project[] = [
  {
    title: "Vibrant Release",
    description:
      "Sistema de reservas y facturación (Booking App). Manejo de reservas, usuarios, control de disponibilidad y generación de facturas en PDF.",
    tech: ["Vite", "TailwindCSS", "Node.js", "Express", "PDF"],
    github: "https://github.com/nachjv19/vibrant-release-1",
  },
  {
    title: "Bookverse",
    description:
      "Biblioteca / tienda (Bookverse): catálogo de libros, gestión de stock, carrito y panel admin (SPA) — ideal para procesos comerciales y control de inventario.",
    tech: ["Vite", "TailwindCSS", "Node.js", "PostgreSQL", "Express", "Bycrypt", "JWT"],
    github: "https://github.com/nachjv19/bookverse", // actualiza si el repo tiene otro nombre
  },
  {
    title: "API de Tareas",
    description:
      "CRUD completo con persistencia local y manejo de estado. Implementa Axios y JSON para gestionar tareas dinámicamente.",
    tech: ["JavaScript", "Axios", "HTML", "CSS", "JSON-SERVER"],
    github: "https://github.com/nachjv19",
  },
  {
    title: "Calculadora Avanzada (Python)",
    description:
      "Calculadora con operaciones extendidas e historial exportable. Desarrollada para practicar estructura modular y archivos.",
    tech: ["Python"],
    github: "https://github.com/nachjv19",
  },
];

export const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-950 text-gray-100 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <SectionTitle subtitle="Algunos proyectos seleccionados con tecnologías usadas">Proyectos Destacados</SectionTitle>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl bg-gray-900 shadow-lg border border-gray-800 p-6 transition-all ${
                hovered === index ? "scale-105 border-accent" : ""
              }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-4">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 justify-center">
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <Button
                    label="GitHub"
                    icon="pi pi-github"
                    className="p-button-sm p-button-outlined p-button-info"
                  />
                </a>

                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                    <Button
                      label="Demo"
                      icon="pi pi-external-link"
                      className="p-button-sm p-button-rounded p-button-success"
                    />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
