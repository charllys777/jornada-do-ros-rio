import { motion } from "framer-motion";
import guaranteeSeal from "@/assets/guarantee-seal.png";

const GuaranteeSection = () => {
  return (
    <section className="section-padding">
      <div className="container container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 border-2 border-accent/30 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Seal */}
            <div className="flex-shrink-0">
              <img
                src={guaranteeSeal}
                alt="Garantia de 21 dias"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Garantia de 21 dias
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Se, aplicando o método com fé e constância durante os 21 dias, você
                sentir que isso não foi pra você, devolvemos{" "}
                <strong className="text-foreground">100% do seu dinheiro</strong>.
              </p>
              <p className="text-accent font-semibold">
                Sem burocracia. Simples assim.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
