import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
};

export const SectionTitle: React.FC<Props> = ({ children, subtitle, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center mb-6 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-accent">{children}</h2>
      {subtitle && <p className="mt-2 text-gray-400 max-w-xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionTitle;
