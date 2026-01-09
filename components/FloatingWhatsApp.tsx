"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(true);
  const [showBubble, setShowBubble] = useState(true);

  // Faire disparaître la bulle après 4 secondes
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex items-center space-x-2">
        <div className="relative flex flex-col items-center">
          {/* Bulle de message */}
          {showBubble && (
            <div className="bubble absolute bottom-[46px] left-1/2 transform -translate-x-1/2 bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded-lg shadow-lg">
              Contactez-nous sur WhatsApp
              {/* Petit crochet en bas */}
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-lg"></span>
            </div>
          )}

          {/* Bouton WhatsApp */}
          <a
            href="https://wa.me/237680585671"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110 animate-bounce-slow"
            title="Nous contacter sur WhatsApp"
          >
            <FaWhatsapp size={28} />
            {/* Cercle pulse derrière l’icône */}
            <span className="absolute w-10 h-10 bg-green-500 opacity-20 rounded-full animate-ping"></span>
          </a>
        </div>

        {/* Bouton fermer */}
        <button
          onClick={() => setVisible(false)}
          className="w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow transition"
          title="Fermer"
        >
          <FaTimes size={14} />
        </button>
      </div>

      {/* Styles directement dans le composant */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .bubble {
          animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </>
  );
}
