import { motion } from "framer-motion";
import { Button } from 'primereact/button';

export const TestUI = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen gap-4"
            initial = {{opacity: 0, y: 50}}
            animate = {{opacity: 1, y: 0}}
            transition = {{duration: 0.5}}
        >
            <h1 className = "text-3xl font-semibold">Portfolio TEST</h1>
            <Button label = "Click Me" icon="pi pi-check" className="p-button-rounded" />
        </motion.div>
    );       
};