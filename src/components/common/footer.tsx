import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contato"
      className="container mx-auto px-4 md:px-6"
    >
      <div className="relative overflow-hidden rounded-t-[45px] border-t-2 bg-foreground text-background px-6 py-10 md:px-14 md:h-80">
        {/* Header: Logo, Nav e Social */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-4">
          {/* Logo */}
          <a href="/" className="w-32 md:w-40">
            <img
              src="/logotipo_rafaelldev_white.svg"
              alt="Logo"
              className="h-full w-full"
            />
          </a>

          {/* Navegação */}
          <nav className="order-last md:order-none">
            <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-12">
              <li>
                <a
                  href="#projetos"
                  className="transition-opacity hover:opacity-70"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  className="transition-opacity hover:opacity-70"
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="transition-opacity hover:opacity-70"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* Redes Sociais */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Rafaell-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-2 text-foreground transition-opacity hover:opacity-70"
            >
              <GitHubLogoIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rafaelldev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-2 text-foreground transition-opacity hover:opacity-70"
            >
              <LinkedInLogoIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Seção de Contato */}
        <div className="mt-8 md:mt-12">
          <div className="space-y-4 max-md:text-center">
            <h3 className="inline-block rounded-sm bg-accent px-2 py-1 text-sm font-bold uppercase tracking-wider text-foreground">
              Contato
            </h3>
            <ul className="space-y-2 ">
              <li className="flex items-center max-md:justify-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:araujo.contato@gmail.com"
                  className="transition-opacity hover:opacity-70"
                >
                  araujo.contato@gmail.com
                </a>
              </li>
              <li className="flex items-center max-md:justify-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+5537981346936"
                  className="transition-opacity hover:opacity-70"
                >
                  (87) 9 8134-6936
                </a>
              </li>
            </ul>
          </div>

          {/* Ilustração */}
          <div className="pointer-events-none absolute bottom-0 right-0 hidden md:block">
            <img
              src="/ilustrations/ilustration.png"
              alt="Ilustração"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
