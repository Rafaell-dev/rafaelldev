import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TechStack() {
  const technologies = [
    { name: "TypeScript", icon: "/logos/typescript.svg" },
    { name: "Node.js", icon: "/logos/nodejs.svg" },
    { name: "NestJS", icon: "/logos/nestjs.svg" },
    { name: "HTML5", icon: "/logos/html.svg" },
    { name: "CSS3", icon: "/logos/css.svg" },
    { name: "React", icon: "/logos/reactjs.svg" },
    { name: "Next.js", icon: "/logos/nextjs.svg" },
  ];

  return (
    <section className="container mx-auto px-4 py-8 md:px-6">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        <TooltipProvider>
          {technologies.map((tech) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <img src={tech.icon} alt={tech.name} loading="lazy" />
                  <span className="sr-only">{tech.name}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </section>
  );
}
