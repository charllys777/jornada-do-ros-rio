import { motion } from "framer-motion";
import { BookOpen, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Oração guiada diária",
    description: "Acompanhamento dia a dia para rezar o Santo Rosário com propósito.",
  },
  {
    icon: Heart,
    title: "Reflexões diárias para fortalecer a fé",
    description: "Meditações profundas que tocam o coração e renovam a esperança.",
  },
  {
    icon: Sparkles,
    title: "Ações práticas para viver a fé no cotidiano",
    description: "Pequenos gestos que transformam a rotina em oração.",
  },
];

const WhatIsSection = () => {
  return (
    <section className="section-padding">
      <div className="container container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section text-foreground mb-6">
            O que é o{" "}
            <span className="text-primary">Desafio 21 Dias do Santo Rosário</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            É um caminho guiado, dia a dia, para você rezar com constância, meditar
            e aplicar ações simples que fortalecem sua vida espiritual — mesmo em
            meio ao caos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
