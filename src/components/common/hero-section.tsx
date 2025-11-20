import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-balance md:text-5xl lg:text-6xl">
              Desenvolvo aplicações que resolvem problemas do mundo real.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty text-justify">
              Sou desenvolvedor full-stack com 3 anos de experiência. Domino
              tecnologias como Node.js, React e NextJS, atuando do backend ao
              frontend, sempre focando em performance, qualidade de código e
              experiência do usuário.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-14 rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              Entrar em contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full gap-2 bg-transparent"
              onClick={() => {
                const resumeUrl = import.meta.env.VITE_RESUME_URL;
                if (resumeUrl) {
                  window.open(resumeUrl, "_blank");
                } else {
                  console.error("Resume URL not configured");
                }
              }}
            >
              <Download className="h-8 w-8" />
              Baixar Currículo
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-full lg:w-full overflow-hidden rounded-full bg-muted">
            <img
              src="/profile_picture.png"
              alt="Profile picture"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
