
export const Footer = () => (
    <footer className="py-8 text-center bg-gray-900 text-gray-400">
        <p className="text-sm">© {new Date().getFullYear()} Hernán Vásquez Araujo. Todos los derechos reservados.
        <span className="text-accent">Desarrollador FullStack</span>
        </p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
            <a href="mailto: vasquezaraujoh@gmail.com" className="hover:text-accent transition">
                vasquezaraujoh@gmail.com
            </a>
            <span>·</span>
            <a href="https://github.com/nachjva19" target="_blank" className="hover:text-accent transition">
                GitHub
            </a>
            <span>·</span>
            <a href="https://linkedin.com/in/hernanvasquezaraujo" target="_blank" className="hover:text-accent transition">
                LinkedIn
            </a>
        </div>
    </footer>
);