import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const images = [
    "/project-details/luna/img1.png",
    "/project-details/luna/img2.png",
    "/project-details/luna/img3.png",
    "/project-details/luna/img4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="bg-accent primary-border transition-all hover:shadow-lg rounded-[45px] p-8">
        <div className="grid gap-8 md:grid-cols-12 items-center">
          {/* ---------------- Coluna Esquerda ---------------- */}
          <div className="h-full col-span-11 md:col-span-5 flex flex-col justify-between gap-4">
            {/* Label principal */}
            <div>
              <h3 className="text-3xl font-bold text-nowrap">
                <span className="bg-white px-2 py-1">Nome do Projeto</span>
              </h3>
              <h3 className="text-2xl font-bold">
                <span className="text-3xl font-bold bg-white px-2 py-1">
                  tech
                </span>
              </h3>
            </div>

            {/* Pequeno texto / descrição */}
            <div className="w-full">
              <p className="text-lg leading-relaxed text-justify">
                Este é um texto descritivo breve sobre o projeto. Explique em uma
                ou duas frases o objetivo, as tecnologias usadas ou o diferencial
                do trabalho apresentado.
              </p>
            </div>

            {/* Botões de ação */}
            <div className="grid gap-4">
              <Button className="w-full bg-foreground text-background py-8 text-lg rounded-full">
                Ver Projeto
              </Button>
              <Button
                variant="outline"
                className="w-full py-8 text-lg rounded-full border border-white"
              >
                Github
              </Button>
            </div>
          </div>

          {/* ---------------- Coluna Direita: Carousel ---------------- */}
          <div className="col-span-11 md:col-span-7 flex flex-col items-center">
            {/* Imagem principal */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-4">
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
                    index === activeIndex ? "border-white" : "border-transparent"
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
