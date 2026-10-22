"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.06] bg-[#08090b]/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight"
        >
          RL<span className="text-neutral-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          <a
            href="#sobre"
            className="transition hover:text-white"
          >
            Sobre
          </a>

          <a
            href="#skills"
            className="transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projetos"
            className="transition hover:text-white"
          >
            Projetos
          </a>

          <a
            href="#contato"
            className="transition hover:text-white"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Renangenito"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-white/30 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/renan-lima-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-white/30 hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}