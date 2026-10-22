"use client";

import { motion } from "framer-motion";
import { FaArrowAltCircleUp, FaGithub } from "react-icons/fa";

import { projects } from "../data/portifolio";

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
              03 / Projetos
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              O que venho construindo
            </h2>
          </div>

          <a
            href="https://github.com/Renangenito?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
          >
            Ver todos no GitHub

            <FaArrowAltCircleUp size={16} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="group glass flex min-h-[330px] flex-col justify-between rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div>
                <div className="mb-8 flex items-start justify-between">
                  <span className="text-sm text-neutral-600">
                    0{index + 1}
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 p-2 text-neutral-400 transition hover:text-white"
                    aria-label={`Abrir ${project.title} no GitHub`}
                  >
                    <FaGithub size={18} />
                  </a>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs text-neutral-500"
                  >
                    #{technology.replaceAll(" ", "-")}
                  </span>
                ))}
              </div>
              
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}