"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: 0,
    tag: "Estratégia",
    tagColor: "text-primary bg-primary/8 border-primary/15",
    title: "Por que a maioria das empresas cresce e depois trava",
    excerpt:
      "Crescer é fácil no começo. O problema aparece quando o volume aumenta e a estrutura não acompanha. Entenda onde está o gargalo real.",
    readTime: "5 min",
  },
  {
    id: 1,
    tag: "Inteligência Artificial",
    tagColor: "text-violet-600 bg-violet-50 border-violet-200/50",
    title: "IA não substitui estratégia. Mas acelera quem já tem uma.",
    excerpt:
      "Ferramentas de IA são poderosas, mas só para quem sabe o que está fazendo. Veja como usar IA para escalar o que já funciona.",
    readTime: "4 min",
  },
  {
    id: 2,
    tag: "Vendas",
    tagColor: "text-accent bg-accent/8 border-accent/20",
    title: "O funil de vendas que ninguém fala: o que acontece depois do sim",
    excerpt:
      "Fechar o cliente é só metade do trabalho. O que acontece no onboarding e na entrega define se ele volta e indica ou some silenciosamente.",
    readTime: "6 min",
  },
  {
    id: 3,
    tag: "UX",
    tagColor: "text-orange-600 bg-orange-50 border-orange-200/50",
    title: "Seu site não converte porque não foi feito para o seu cliente",
    excerpt:
      "A maioria dos sites foi feito para o dono da empresa. Linguagem técnica, estrutura confusa e nenhuma clareza do próximo passo. Isso tem solução.",
    readTime: "5 min",
  },
  {
    id: 4,
    tag: "Marketing",
    tagColor: "text-primary bg-primary/8 border-primary/15",
    title:
      "Como parar de depender de indicação sem abrir mão do relacionamento",
    excerpt:
      "Indicação é ótima, mas não é escalável. Existe um caminho para construir canais que gerem demanda sem destruir o que já funciona.",
    readTime: "7 min",
  },
  {
    id: 5,
    tag: "Estratégia",
    tagColor: "text-primary bg-primary/8 border-primary/15",
    title:
      "Diagnóstico antes de estratégia: por que sua empresa não precisa de mais uma campanha",
    excerpt:
      "Antes de criar, é preciso entender. Empresas que investem sem diagnóstico repetem erros com mais orçamento. Veja como mudar isso.",
    readTime: "5 min",
  },
];

export function Insights() {
  return (
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_50%,transparent_100%)]" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
              Insights
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1] max-w-lg">
              O que a gente pensa{" "}
              <span className="text-muted-foreground/30">em voz alta.</span>
            </h2>
          </div>
          <a
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            Ver todos os artigos
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={`/insights/${post.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-white p-6 hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(79,70,229,0.07)] transition-all duration-300"
            >
              {/* Tag + read time */}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] ${post.tagColor}`}
                >
                  {post.tag}
                </span>
                <span className="text-[10px] text-muted-foreground/40 font-medium">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-foreground leading-snug tracking-tight group-hover:text-primary transition-colors duration-200">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>

              {/* Read more */}
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground/40 group-hover:text-primary transition-colors duration-200 pt-1 border-t border-border/40">
                Ler artigo
                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
