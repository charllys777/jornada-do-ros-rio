import { Cross } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Icon */}
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
            <Cross className="w-6 h-6 text-accent" />
          </div>

          {/* Product Info */}
          <p className="text-primary-foreground/80 mb-6">
            Desafio 21 Dias do Santo Rosário
          </p>
          <p className="text-primary-foreground/60 text-sm mb-8">
            Produto digital. Acesso enviado por e-mail após a confirmação do
            pagamento.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
            >
              Contato
            </a>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
