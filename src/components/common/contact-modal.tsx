import { useState } from "react";
import { Mail, MessageCircle, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "araujor.contato@gmail.com";

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar email:", err);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5587981346936?text=Olá, gostaria de conversar",
      "_blank"
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl primary-border p-8">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center">
            <span className="bg-accent px-2 py-1">Entre em contato</span>
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Escolha sua forma preferida de contato
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-foreground text-background hover:bg-primary py-8 text-lg rounded-full primary-border flex items-center justify-center gap-3"
          >
            <MessageCircle size={24} />
            <span>WhatsApp</span>
          </Button>

          <Button
            onClick={handleEmailClick}
            className="w-full bg-secondary text-foreground hover:bg-accent/90 py-8 text-base rounded-full primary-border flex flex-col items-center justify-center gap-2"
          >
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span className="font-medium">{emailCopied ? "Copiado!" : email}</span>
              {emailCopied && <Check size={20} className="text-green-600" />}
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
