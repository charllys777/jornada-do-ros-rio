import { motion } from "framer-motion";
import { Check } from "lucide-react";
import bookMockup from "@/assets/book-mockup.png";

const deliverables = [
  "Desafio 21 Dias do Santo Rosário (PDF)",
  "Orações e reflexões diárias",
  "Ações concretas para aplicar a fé no dia a dia",
  "Acesso imediato via e-mail",
];

const WhatYouGetSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-section text-foreground text-center mb-12"
        >
          O que você vai receber
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
              <img
                src={bookMockup}
                alt="Desafio 21 Dias do Santo Rosário"
                className="relative w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Deliverables List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="space-y-5">
              {deliverables.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center mt-0.5">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </span>
                  <span className="text-lg text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8"
            >
              <a href="https://pay.wiapy.com/v3nzAFRWJt" className="btn-gold inline-block">
                Quero receber o material
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
