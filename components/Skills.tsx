"use client";

import { motion } from "framer-motion";
import { skills } from "../data/portifolio";

export default function Skills() {
  return (
    <section id="skills" className="section border-y border-white/[0.06]">
      <div className="container">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
            02 / Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Tecnologias
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-7"
            >
              <h3 className="mb-5 text-lg font-semibold">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}