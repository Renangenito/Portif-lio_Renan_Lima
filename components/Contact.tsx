"use client";

import { FaArrowAltCircleRight, FaGithub, FaLinkedin  } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-16"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              04 / Contato
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Vamos construir
              <br />
              <span className="text-neutral-500">
                algo juntos?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
              Estou sempre aberto para conversar sobre
              tecnologia, projetos e novas oportunidades.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/renan-lima-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium transition hover:border-white/30"
              >
                <FaLinkedin size={18} />

                LinkedIn

                <FaLink size={16} />
              </a>

              <a
                href="https://github.com/Renangenito"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium transition hover:border-white/30"
              >
                <FaGithub size={18} />

                GitHub

                <FaLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}