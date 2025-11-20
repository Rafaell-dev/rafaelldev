import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { type Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

interface HeroProjectSectionProps {
  project: Project | null;
}

export function HeroProjectSection({ project }: HeroProjectSectionProps) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const images = project?.images || [];

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleLiveProjectClick = () => {
    if (project?.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  const handleGithubClick = () => {
    if (project?.githubUrl) {
      window.open(project.githubUrl, "_blank");
    }
  };

  if (!project) {
    return (
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="bg-card primary-border rounded-[45px] p-8 text-center">
          <h2 className="text-2xl font-bold">Projeto não encontrado</h2>
          <Button onClick={() => navigate("/")} className="mt-4 rounded-full">
            Voltar para Home
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="bg-card primary-border transition-all hover:shadow-lg rounded-[45px] p-8">
        <div className="grid gap-8 md:grid-cols-12 items-center">
          {/* ---------------- Coluna Esquerda ---------------- */}
          <div className="h-full col-span-11 md:col-span-5 flex flex-col justify-between gap-4">
            {/* Label principal */}
            <div>
              <h3 className="text-3xl font-bold text-nowrap">
                <span className="bg-white px-2 py-1">{project.name}</span>
              </h3>
              <h3 className="text-2xl font-bold">
                <span className="text-3xl font-bold bg-white px-2 py-1">
                  {project.techStack}
                </span>
              </h3>
            </div>

            {/* Pequeno texto / descrição */}
            <div className="w-full">
              <p className="text-lg leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            {/* Botões de ação */}
            <div className="grid gap-4">
              {project.liveUrl && (
                <Button
                  onClick={handleLiveProjectClick}
                  className="w-full bg-foreground text-background py-8 text-lg rounded-full flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  Acessar projeto
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  onClick={handleGithubClick}
                  variant="outline"
                  className="w-full py-8 text-lg rounded-full border border-white"
                >
                  Github
                </Button>
              )}
            </div>
          </div>

          {/* ---------------- Coluna Direita: Carousel ---------------- */}
          <div className="col-span-11 md:col-span-7 flex flex-col items-center">
            {/* Imagem principal */}
            <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-lg mb-4">
              <img
                src={images[activeIndex]}
                alt="Imagem principal"
                className={`object-cover w-full h-full transition-opacity duration-500 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3 w-full">
              {images.map((img, index) => (
                <div
                  key={img}
                  className={`relative aspect-[4/3] rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                    index === activeIndex
                      ? "border-white"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={img}
                    alt={`Thumb ${index}`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
