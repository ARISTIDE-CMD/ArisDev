"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export default function DevAnimated() {
  return (
    <div className="relative z-10">
      {/* Header avec animation d'entrée */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Développement de solutions numériques
        </h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          Je conçois et développe des applications web et mobiles structurées,
          performantes et maintenables, avec une approche orientée architecture
          et évolution à long terme.
        </p>
      </motion.header>

      {/* Valeurs ajoutées – apparition progressive */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        {[
          {
            title: 'Architecture solide',
            desc: 'Des bases techniques claires pour garantir stabilité, performance et évolutivité.',
          },
          {
            title: 'Code maintenable',
            desc: 'Un développement lisible et structuré, pensé pour faciliter la maintenance et les évolutions futures.',
          },
          {
            title: 'Vision long terme',
            desc: 'Chaque projet est conçu comme un système, capable de grandir avec vos besoins.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="p-8 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-yellow-400/50 transition-colors duration-300"
          >
            <h3 className="font-semibold text-xl text-white mb-3">{item.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Services – cartes interactives avec hover avancé */}
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-white mb-10"
        >
          Domaines d’intervention
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Développement Web',
              desc: 'Sites professionnels, plateformes web et applications métiers conçus pour la performance et la fiabilité.',
              href: '/services/developpement/web',
            },
            {
              title: 'Développement Mobile',
              desc: 'Applications mobiles Android et iOS modernes, fluides et adaptées à une utilisation réelle.',
              href: '/services/developpement/mobile',
            },
            {
              title: 'Design d’interface',
              desc: 'Interfaces claires et fonctionnelles, orientées expérience utilisateur et efficacité.',
              href: '/services/developpement/design',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } }}
            >
              <Link
                href={service.href}
                className="group relative block overflow-hidden rounded-xl p-8 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-yellow-400 transition-all duration-500 h-full"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-8">{service.desc}</p>
                </div>

                {/* Badge "Voir" animé */}
                <motion.span
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="absolute right-6 bottom-6 inline-flex items-center gap-2 bg-yellow-400 text-slate-900 font-bold px-5 py-3 rounded-full shadow-lg group-hover:bg-yellow-300 transition-colors"
                >
                  Voir
                </motion.span>

                {/* Effet de fond subtil au hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA final */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-28 text-center"
      >
        <p className="text-xl text-slate-300 mb-8">Vous avez un projet ou une idée à structurer ?</p>
        <Link
          href="/contact"
          className="inline-block px-10 py-5 rounded-full bg-yellow-400 text-slate-900 text-lg font-bold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          Discutons de votre projet
        </Link>
      </motion.section>
    </div>
  );
}
