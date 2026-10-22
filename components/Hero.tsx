"use client";

import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaArrowAltCircleDown, FaLink } from "react-icons/fa";
import { profile } from "@/data/portifolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid-background relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />

            Disponível para novas oportunidades
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Olá, eu sou Renan
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Construindo
            <br />

            <span className="gradient-text">
              experiências digitais.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              
              className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:border-white/30 hover:bg-white/[0.04]"
            >
              Ver projetos

              <FaArrowAltCircleDown
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:border-white/30 hover:bg-white/[0.04]"
            >
              <FaGithub size={18} />

              GitHub
              <FaLink size={16} />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#sobre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 transition hover:text-white"
        >
          <FaArrowDown size={22} />
        </motion.a>
      </div>
    </section>
  );
}