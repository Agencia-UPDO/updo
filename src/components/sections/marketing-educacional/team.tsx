"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Brain, Target, Compass, Lightbulb, Palette, Layout } from "lucide-react";

const team = [
  {
    name: "Rodrigo Bueno",
    role: "Diretor de Projetos",
    image: "/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg",
    position: "object-center",
    education: [
      "MBA em Gestão Estratégica de Marketing (UP)",
      "MBA em User Experience Design and Beyond (PUCRS)",
    ],
    bio: "Estrategista com mais de 10 anos de experiência em marketing e vendas, Rodrigo é professor de Educação Executiva na PUCPR, UFPR, Uninter e palestrante na FAE. Especialista em Neuromarketing, professor de Comportamento do Consumidor e especialista em matrículas, atua como Conselheiro Consultivo e lidera pessoalmente as estratégias de crescimento e diagnósticos na UPDO, unindo inovação e ciência para impulsionar resultados.",
    expertise: [
      { icon: Brain, label: "Neuromarketing Aplicado a Negócios" },
      { icon: Compass, label: "Estratégia de Crescimento Exponencial" },
      { icon: Lightbulb, label: "Design Thinking & Inovação" },
      { icon: Target, label: "Planejamento Estratégico de Marketing" },
    ],
  },
  {
    name: "Juliana Scottini",
    role: "Diretora de Criação & Estratégia",
    image: "/Imagens/Juliana-Scottini-Fundadora_UPDO.jpg",
    position: "object-top",
    education: [
      "MBA em Gestão Estratégica de Marketing (UP)",
      "Design (UTFPR) com imersão na Itália",
    ],
    bio: "Diretora de Criação com sólida base em Design pela UTFPR e especialização de um ano na Itália, o berço do design mundial. Com mais de 10 anos de experiência, Juliana une a sofisticação do design à ciência do Neuromarketing e a uma visão analítica apurada para garantir que a estética, campanhas e peças publicitárias andem sempre juntas para gerar o máximo impacto e resultado real para o negócio. Ela acompanha o desempenho junto aos clientes, garantindo evolução constante e alta performance em cada projeto.",
    expertise: [
      { icon: Palette, label: "Direção de Arte & Branding" },
      { icon: Target, label: "Estratégia de Marca (Brand Strategy)" },
      { icon: Layout, label: "Design de Experiência (UX/UI)" },
      { icon: Brain, label: "Neuromarketing Aplicado ao Design" },
    ],
  },
];

export function Team() {
  return (
    <section id="especialistas" className="relative py-24 lg:py-40 bg-[#F7F9FF] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/[0.03] via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 lg:mb-24 text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent/80">
            Especialistas
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            Estrategistas focados no <br />
            <span className="text-muted-foreground/30">seu resultado.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base leading-relaxed">
            Na UPDO, você não é atendido por iniciantes. O seu projeto de captação
            é gerido pessoalmente pelos nossos fundadores e especialistas.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col gap-8"
            >
              {/* Profile Card */}
              <div className="group relative rounded-3xl overflow-hidden border border-border/60 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex flex-col md:flex-row">
                  {/* Photo container */}
                  <div className="relative w-full md:w-[280px] aspect-square md:aspect-auto overflow-hidden transition-all duration-700">
                     <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover ${member.position} scale-105 group-hover:scale-100 transition-transform duration-700`}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden" />
                  </div>

                  {/* Info area */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col gap-6">
                    <div>
                      <h3 className="font-heading text-2xl lg:text-3xl font-black text-foreground tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-accent font-bold uppercase tracking-widest text-[10px] mt-1">
                        {member.role}
                      </p>
                      
                      <div className="mt-4 flex flex-col gap-2">
                        {member.education.map((edu, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground font-medium">
                            <GraduationCap className="h-3.5 w-3.5 shrink-0 text-accent/60 mt-0.5" />
                            <span>{edu}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {member.expertise.map((exp, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-lg bg-accent/5 flex items-center justify-center">
                            <exp.icon className="h-3 w-3 text-accent" />
                          </div>
                          <span className="text-[10px] font-bold text-foreground/70 uppercase tracking-wider">
                            {exp.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
