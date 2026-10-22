"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
              01 / Sobre
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              Quem sou eu
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-neutral-400">
            <p>
              Sou Renan Lima, desenvolvedor com atuação em
              desenvolvimento de aplicações utilizando principalmente linguagens como C# e JavaScript com Frameworks e bibliotecas como: .NET e
              React.
            </p>

            <p>
              Tenho um perfil hands-on e acredito que a melhor
              maneira de evoluir como desenvolvedor é combinando
              estudo, prática e construção de projetos reais.
            </p>

            <p>
              Minha trajetória também é marcada por uma mudança
              de carreira e por uma busca constante por evolução
              técnica.
            </p>

            <p>
              Gosto de entender como as coisas funcionam e
              transformar problemas em soluções através da
              tecnologia.
            </p>
            <p>
              Não pense que parou por aí! Logo abaixo, na seção "Skills e Tecnologias", listei todas as tecnologias com as quais tenho domínio e conhecimento, utilizadas no meu trabalho e no desenvolvimento de projetos, sempre consultando e seguindo suas respectivas documentações.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}