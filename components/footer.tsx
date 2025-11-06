import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    // Utilisation d'un fond très sombre (slate-950) avec une bordure d'accent jaune
    <footer className="bg-slate-950 text-gray-300 py-8 px-6 border-t border-yellow-400/20 shadow-inner shadow-slate-950/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Bloc 1 : Nom / identité */}
        <div className="text-center md:text-left">
          {/* Nom plus grand et en gras */}
          <h1 className="text-xl font-bold text-white">KOUANDJA KENFACK</h1>
          {/* Titre/Prénom en couleur d'accent */}
          <h3 className="text-md font-medium text-yellow-400">Aristide Gael</h3>
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>

        {/* Bloc 2 : Réseaux sociaux */}
        <div className="flex justify-center md:justify-end space-x-6 text-gray-400">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 transition-transform duration-300 hover:scale-110 hover:text-[#1877F2]"
          >
            <Facebook size={24} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/680585671"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 transition-transform duration-300 hover:scale-110 hover:text-[#25D366]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.52 3.48a11.948 11.948 0 0 0-17 0C-1.18 9.14-.21 17.1 4.25 21.08L3 24l3.1-1.04A11.954 11.954 0 0 0 21 7.58a11.954 11.954 0 0 0-.48-4.1zM12 21.4a9.39 9.39 0 0 1-4.77-1.29l-.34-.2-2.84.95.93-2.86-.21-.33A9.41 9.41 0 0 1 2.6 12C2.62 7.03 6.94 2.7 12 2.7c2.52 0 4.9 1 6.7 2.8A9.4 9.4 0 0 1 21.4 12c-.01 5.06-4.34 9.39-9.4 9.4zm5.07-7.53c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.55.12-.16.24-.61.82-.75.99-.13.16-.25.18-.46.06-.21-.12-.89-.34-1.69-1-.63-.55-1.05-1.22-1.17-1.43-.12-.21-.02-.32.09-.44.09-.09.21-.25.31-.37.1-.12.13-.21.21-.36.08-.14.04-.27-.02-.38-.06-.11-.57-1.24-.79-1.69-.21-.44-.43-.37-.55-.38l-.47-.01c-.15 0-.39.06-.6.27-.21.21-.8.75-.8 1.83s.82 2.13.93 2.29c.11.16 1.57 2.34 3.82 3.29.54.23.95.36 1.28.47.54.16 1.01.14 1.39.08.42-.06 1.47-.59 1.68-1.19.21-.59.21-1.09.15-1.2-.06-.11-.21-.16-.46-.28z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 transition-transform duration-300 hover:scale-110 hover:text-[#E4405F]"
          >
            <Instagram size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 transition-transform duration-300 hover:scale-110 hover:text-[#0A66C2]"
          >
            <Linkedin size={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:aristidegaelkouandjakenfack@gmail.com"
            aria-label="Email"
            className="p-2 transition-transform duration-300 hover:scale-110 hover:text-[#FFA500]"
          >
            <Mail size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
}