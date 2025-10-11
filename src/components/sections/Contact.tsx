import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export const Contact = () => {
  const toast = useRef<Toast>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.current?.show({
        severity: "warn",
        summary: "Campos incompletos",
        detail: "Por favor completa todos los campos.",
        life: 3000,
      });
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.current?.show({
          severity: "success",
          summary: "¡Mensaje enviado!",
          detail: "Tu mensaje ha sido enviado correctamente 🎉",
          life: 4000,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Error al enviar",
          detail: "Hubo un problema con el servidor.",
          life: 4000,
        });
      }
    } catch {
      toast.current?.show({
        severity: "error",
        summary: "Error de conexión",
        detail: "No se pudo contactar con el servidor.",
        life: 4000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-6 py-24"
    >
      <Toast ref={toast} />
      <SectionTitle>Contáctame</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-lg w-full bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-800"
      >
        {/* title moved to SectionTitle for consistency */}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <Button
            type="submit"
            label={isSending ? "Enviando..." : "Enviar mensaje"}
            icon={isSending ? "pi pi-spin pi-spinner" : "pi pi-send"}
            disabled={isSending}
            className="w-full bg-primary border-none hover:bg-primary-600 text-white py-3 rounded-xl shadow-lg transition-all duration-300"
          />
        </form>
      </motion.div>
    </section>
  );
};
