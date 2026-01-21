import { Check } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-rosary.png";

const HeroSection = () => {
  const benefits = [
    "Paz interior e força emocional",
    "Constância na oração (mesmo na rotina corrida)",
    "Apoio espiritual para lares em turbulência",
    "Proximidade com Deus e Nossa Senhora",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Santo Rosário com luz divina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
              Jornada de 21 dias
            </div>

            {/* Headline */}
            <h1 className="heading-display text-primary-foreground mb-6">
              Quando tudo parece perdido,{" "}
              <span className="text-accent">Deus ainda tem um caminho.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body text-primary-foreground/90 mb-8 max-w-2xl">
              Uma jornada de 21 dias com o Santo Rosário para restaurar sua paz
              interior e sustentar sua família em oração.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-primary-foreground/95"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </span>
                  <span className="text-body">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="https://pay.wiapy.com/v3nzAFRWJt"
                className="btn-gold inline-block text-center"
              >
                Quero participar do Desafio
              </a>
              <p className="text-sm text-primary-foreground/70 mt-4">
                Acesso imediato via e-mail • Material completo para 21 dias
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
