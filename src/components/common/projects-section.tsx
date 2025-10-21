import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce",
      subtitle: "NextJS",
      description:
        "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      variant: "light" as const,
      image: "/ilustrations/page_click_ilustration.png",
    },
    {
      title: "Admin Dashboard",
      subtitle: "NextJS",
      description:
        "Dashboard administrativo com gráficos, tabelas e gerenciamento de dados.",
      variant: "accent" as const,
      image: "/ilustrations/page_dashboard_ilustration.png",
    },
    {
      title: "API RESTful",
      subtitle: "NODEJS + TS",
      description:
        "API robusta com autenticação, validação e documentação completa.",
      variant: "accent" as const,
      image: "/ilustrations/page_email_ilustration.png",
    },
    {
      title: "Flashcard App",
      subtitle: "Figma",
      description: "Aplicativo de estudos com sistema de repetição espaçada.",
      variant: "light" as const,
      image: "/ilustrations/page_design_ilustration.png",
    },
  ];

  return (
    <section
      id="projetos"
      className="container mx-auto px-4 py-16 md:px-6 md:py-24"
    >
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        <span className="bg-accent px-2 py-1 rounded-sm">Projetos</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`group relative overflow-hidden primary-border p-8 transition-all hover:shadow-lg rounded-[45px] ${
              project.variant === "accent" ? "bg-accent" : "bg-card"
            }`}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-3xl font-bold">
                  <span
                    className={
                      project.variant === "accent"
                        ? "bg-foreground text-background px-2 py-1"
                        : "bg-accent px-2 py-1"
                    }
                  >
                    {project.title}
                  </span>
                </h3>
                <h3 className="text-2xl font-bold"><span
                    className={
                      project.variant === "accent"
                        ? "bg-foreground text-background px-2 py-1"
                        : "bg-accent px-2 py-1"
                    }
                  >
                    {project.subtitle}
                  </span></h3>
                <div className="relative h-36 w-full flex justify-end">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-fit h-full object-contain"
                  />
                </div>
              </div>

              <Button
                variant="ghost"
                className="group/btn gap-2 p-0 hover:bg-transparent transition-transform group-hover/btn:translate-y-1 cursor-pointer"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
                  <ArrowUpRight size={48} />
                </div>
                <p className="text-lg">Ver Projeto</p>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
