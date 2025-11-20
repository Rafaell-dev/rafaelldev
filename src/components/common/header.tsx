import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/common/contact-modal";

export function Header() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logotipo_rafaelldev.svg"
            alt="Logo"
            className="h-40 w-40"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#projetos"
            className="text-sm transition-colors hover:text-accent"
          >
            Projetos
          </a>
          <a
            href="#experiencia"
            className="text-sm transition-colors hover:text-accent"
          >
            Experiência
          </a>
          <a
            href="#contato"
            className="text-sm transition-colors hover:text-accent"
          >
            Contato
          </a>

          <Button
            variant="outline"
            className="rounded-full bg-transparent h-12"
            onClick={() => setContactModalOpen(true)}
          >
            Entrar em contato
          </Button>
        </nav>

        <Button
          variant="outline"
          className="rounded-full bg-transparent h-12 md:hidden"
          onClick={() => setContactModalOpen(true)}
        >
          Entrar em contato
        </Button>
      </div>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </header>
  );
}
