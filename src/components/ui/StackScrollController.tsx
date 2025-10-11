import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface StackScrollControllerProps {
  sections: React.ReactNode[];
}

/**
 * StackScrollController
 * Maneja la transición tipo "overlay" entre secciones.
 * La siguiente aparece sobre la anterior con un fade progresivo.
 */
export const StackScrollController = ({ sections }: StackScrollControllerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const sectionCount = sections.length;
  if (sectionCount === 0) return null;

  // create transforms in a stable order
  const opacities = sections.map((_, index) => {
    const start = index / sectionCount;
    const end = (index + 1) / sectionCount;
    return useTransform(scrollYProgress, [start, end], [1, 0]);
  });

  return (
    // total height allows scrolling through all sections (stacked by vh)
    <div ref={ref} className="relative overflow-hidden" style={{ height: `${sectionCount * 100}vh` }}>
      {sections.map((section, index) => {
        const opacity = opacities[index];
        const z = sectionCount - index; // later sections above earlier ones

        return (
          <motion.div
            key={index}
            className="absolute left-0 w-full flex items-center justify-center bg-gray-950"
            // position each section vertically in the scroll stack
            style={{ opacity, zIndex: z, top: `${index * 100}vh`, height: '100vh' }}
          >
            {section}
          </motion.div>
        );
      })}
    </div>
  );
};
