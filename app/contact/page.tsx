"use client";

import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzbrllo"); // Remplace par ton ID Formspree

  return (
    <section
      id="contact"
      className="relative py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
          Contacte-moi
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Une idée, un projet, une collaboration musicale ou technique ?  
          Écris-moi directement ou retrouve-moi sur les réseaux 👇
        </p>

        {/* Icônes de réseaux */}
        <div className="flex justify-center space-x-6 mb-12 text-gray-400">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="p-3 transition-all duration-300 hover:scale-110 hover:text-[#1877F2]">
            <Facebook size={28} />
          </a>
          <a href="https://wa.me/680585671" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
            className="p-3 transition-all duration-300 hover:scale-110 hover:text-[#25D366]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M20.52 3.48a11.948 11.948 0 0 0-17 0C-1.18 9.14-.21 17.1 4.25 21.08L3 24l3.1-1.04A11.954 11.954 0 0 0 21 7.58a11.954 11.954 0 0 0-.48-4.1zM12 21.4a9.39 9.39 0 0 1-4.77-1.29l-.34-.2-2.84.95.93-2.86-.21-.33A9.41 9.41 0 0 1 2.6 12C2.62 7.03 6.94 2.7 12 2.7c2.52 0 4.9 1 6.7 2.8A9.4 9.4 0 0 1 21.4 12c-.01 5.06-4.34 9.39-9.4 9.4zm5.07-7.53c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.55.12-.16.24-.61.82-.75.99-.13.16-.25.18-.46.06-.21-.12-.89-.34-1.69-1-.63-.55-1.05-1.22-1.17-1.43-.12-.21-.02-.32.09-.44.09-.09.21-.25.31-.37.1-.12.13-.21.21-.36.08-.14.04-.27-.02-.38-.06-.11-.57-1.24-.79-1.69-.21-.44-.43-.37-.55-.38l-.47-.01c-.15 0-.39.06-.6.27-.21.21-.8.75-.8 1.83s.82 2.13.93 2.29c.11.16 1.57 2.34 3.82 3.29.54.23.95.36 1.28.47.54.16 1.01.14 1.39.08.42-.06 1.47-.59 1.68-1.19.21-.59.21-1.09.15-1.2-.06-.11-.21-.16-.46-.28z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="p-3 transition-all duration-300 hover:scale-110 hover:text-[#E4405F]">
            <Instagram size={28} />
          </a>
          <a href="https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="p-3 transition-all duration-300 hover:scale-110 hover:text-[#0A66C2]">
            <Linkedin size={28} />
          </a>
          <a href="mailto:aristidegaelkouandjakenfack@gmail.com" aria-label="Email"
            className="p-3 transition-all duration-300 hover:scale-110 hover:text-[#FFA500]">
            <Mail size={28} />
          </a>
        </div>

        {/* ✅ Formulaire connecté à Formspree */}
        {state.succeeded ? (
          <p className="text-green-400 font-semibold text-lg">
            ✅ Merci pour ton message ! Je te répondrai bientôt.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nom complet"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 outline-none text-white"
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Adresse email"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 outline-none text-white"
                required
              />
            </div>

            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              id="message"
              name="message"
              placeholder="Ton message..."
              rows={5}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 outline-none text-white mb-6"
              required
            ></textarea>

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
            >
              {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
