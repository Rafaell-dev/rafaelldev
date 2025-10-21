import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <AlertCircle className="h-12 w-12 text-destructive" />
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">Ops! Algo deu errado</h3>
        <p className="text-muted-foreground">{message}</p>
      </div>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          Tentar novamente
        </Button>
      )}
    </div>
  );
}
