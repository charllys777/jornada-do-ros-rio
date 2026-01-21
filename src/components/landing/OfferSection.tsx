import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap } from "lucide-react";
import bookMockup from "@/assets/book-mockup.png";

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding bg-primary">
      <div className="container container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="heading-section text-primary-foreground mb-4">
            Confirme sua participação
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Tudo o que você precisa para começar sua jornada de transformação
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative mx-auto max-w-xs">
                <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-xl" />
                <img
                  src={bookMockup}
                  alt="Desafio 21 Dias"
                  className="relative w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* Offer Details */}
            <div className="order-1 md:order-2">
              {/* Package Items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Desafio 21 Dias do Santo Rosário
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Material completo em PDF
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">
                      + Bônus: Guia Espiritual 21 Dias
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Acompanhamento diário exclusivo
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Acesso imediato via e-mail
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Comece sua jornada ainda hoje
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-muted rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Valor original:</span>
                  <span className="text-muted-foreground line-through">R$47,00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground text-lg">
                    Total hoje:
                  </span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-primary">R$10</span>
                    <span className="text-muted-foreground text-sm block">
                      valor simbólico
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="btn-primary w-full block text-center text-xl py-5"
              >
                Finalizar Inscrição
              </a>

              <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Acesso imediato via e-mail após a confirmação.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
