"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useForm, ValidationError } from "@formspree/react";
import { SubmissionData, FieldValues } from "@formspree/core";
import { form } from "framer-motion/client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";




export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzbrllo");

  // const onSubmit = (e: FormEvent | SubmissionData<FieldValues>) => {
  //   e.preventDefault();
  //   handleSubmit(e);
  // };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Effets de fond subtils */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Restons en Contact
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une idée, un projet, ou simplement envie d'échanger ?
            N'hésitez pas à me contacter, je serais ravi de discuter avec vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche - Informations */}
          <div className="space-y-8">
            {/* Réseaux sociaux */}
            <div className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                Suivez-nous
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1AitQnWX1n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all duration-300 group"
                >
                  <FaFacebookF className="text-[#1877F2] group-hover:text-[#1877F2] transition-colors" size={24} />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white text-[#1877F2]">Facebook</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/237680585671"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 group"
                >
                  <FaWhatsapp className="text-[#25D366] group-hover:text-[#25D366] transition-colors" size={24} />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">WhatsApp</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-300 group"
                >
                  <FaInstagram className="group-hover:text-[#E4405F] transition-colors text-[#E4405F]" size={24} />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">Instagram</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-300 group"
                >
                  <FaLinkedinIn className="text-[#0A66C2] group-hover:text-[#0A66C2] transition-colors" size={24} />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">LinkedIn</span>
                </a>
              </div>
            </div>


            {/* Contact direct */}
            <div className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                Contact Direct
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:aristidegaelkouandjakenfack@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400/5 transition-all duration-300 group"
                >
                  <Mail className="text-yellow-400 flex-shrink-0" size={24} />
                  <div className="text-sm text-gray-300 group-hover:text-white break-all">
                    aristidegaelkouandjakenfack@gmail.com
                  </div>
                </a>

                <a
                  href="tel:+237680585671"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400/5 transition-all duration-300 group"
                >
                  <Phone className="text-yellow-400 flex-shrink-0" size={24} />
                  <div className="text-sm text-gray-300 group-hover:text-white">
                    +237 680 585 671
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <MapPin className="text-yellow-400 flex-shrink-0" size={24} />
                  <div className="text-sm text-gray-300">
                    Douala, Cameroun
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <form onSubmit={handleSubmit} className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
              Envoyez un Message
            </h3>

            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-400 font-semibold text-lg mb-2">
                  Message envoyé avec succès !
                </p>
                <p className="text-gray-400 text-sm">
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      className="w-full p-3.5 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-white placeholder-gray-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      className="w-full p-3.5 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-white placeholder-gray-500 transition-all"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={6}
                    className="w-full p-3.5 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-white placeholder-gray-500 transition-all resize-none"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  // onClick={onSubmit}

                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40"
                >
                  {state.submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}