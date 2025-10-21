"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Briefcase, Building2 } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const experiences: Experience[] = [
    {
      title: "Analista de Software",
      company: "Show Tecnologia",
      period: "(09/2024 - Atualmente)",
      description:
        "Atuo na Show Tecnologia desenvolvendo soluções de web scraping, integrações para validação de dados e sistemas de mensageria assíncrona com NodeJS e BullMQ. Foco em criar aplicações escaláveis, otimizando processos e melhorando a eficiência dos sistemas web da empresa.",
    },
    {
      title: "Analista de Suporte",
      company: "Bravil Sistemas",
      period: "(06/2022 - 09/2024)",
      description:
        "Atuei na Bravil Sistemas prestando suporte técnico a clientes de sistemas de varejo, PDV e aplicativos móveis, realizando manutenção em bancos de dados PostgreSQL e Firebird, desenvolvendo scripts SQL para automação e corrigindo processos, além de apoiar na emissão fiscal (NFe, NFCe, MDFe).",
    },
  ];

  return (
    <section
      id="experiencia"
      className="container mx-auto px-4 py-16 md:px-6 md:py-24"
    >
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        <span className="bg-accent px-2 py-1 rounded-sm">Experiência</span>
      </h2>

      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            className={`overflow-hidden primary-border transition-all ${
              expandedIndex === index ? "bg-accent" : "bg-card"
            }`}
          >
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? -1 : index)
              }
              className="flex w-full items-center justify-between p-6 text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center">
                  <Building2 className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl">
                    {experience.title} - {experience.company}
                  </h3>
                  <p className="text-xl">
                    {experience.period}
                  </p>
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-1 border-foreground bg-background">
                {expandedIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </button>

            {expandedIndex === index && (
              <div className="border-t-2 border-foreground bg-accent px-6 py-6">
                <p className="leading-relaxed text-pretty">
                  {experience.description}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
