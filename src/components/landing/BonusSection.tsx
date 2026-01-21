import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const BonusSection = () => {
  return (
    <section className="section-padding">
      <div className="container container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Bonus Card */}
          <div className="relative card-elevated border-2 border-accent overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-6 py-2 text-sm font-semibold transform translate-x-2 -translate-y-0 rotate-0 rounded-bl-lg">
              <Gift className="inline-block w-4 h-4 mr-1 -mt-0.5" />
              BÔNUS GRÁTIS
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center gold-glow">
                    <Gift className="w-12 h-12 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                    Bônus Especial
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Guia Espiritual dos 21 Dias
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Um guia separado, para acompanhar sua jornada dia após dia com
                    ainda mais direção e profundidade espiritual.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground line-through">
                        Valor real: R$47
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                      <span className="text-primary font-bold text-lg">
                        Hoje: GRÁTIS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-6 border-t border-border pt-6">
                Disponível somente nesta página.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
