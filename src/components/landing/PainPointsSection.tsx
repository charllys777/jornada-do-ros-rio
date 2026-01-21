import { motion } from "framer-motion";
import { Heart, Brain, Users, AlertTriangle, MessageCircle, Shield } from "lucide-react";

const painPoints = [
  {
    icon: Users,
    text: "Você sente que o lar vive em discussões, frieza ou distância.",
  },
  {
    icon: Brain,
    text: "Você carrega um aperto no peito e não consegue desligar a mente.",
  },
  {
    icon: Heart,
    text: "Você ora pelos seus filhos e teme pelas escolhas que eles estão fazendo.",
  },
  {
    icon: AlertTriangle,
    text: "Você vê alguém que ama se aproximando de vícios ou más companhias e seu coração se despedaça.",
  },
  {
    icon: MessageCircle,
    text: "Você já tentou conversar, insistir, controlar… e mesmo assim nada muda.",
  },
  {
    icon: Shield,
    text: "Você sente que precisa proteger sua família, mas não sabe mais como.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section text-foreground mb-4">
            Se você se identificou com pelo menos{" "}
            <span className="text-accent">1 dessas situações</span>, leia com
            atenção:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated flex flex-col items-start gap-4 transition-all duration-300 hover:border-accent border border-transparent"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-body text-foreground">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl font-serif text-primary italic">
            "Existem batalhas que não se vencem no grito —{" "}
            <span className="text-accent font-semibold">se vencem de joelhos.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
