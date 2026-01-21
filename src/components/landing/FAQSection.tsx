import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo o material?",
    answer:
      "Após a confirmação do pagamento, você receberá um e-mail com o link para download do material completo. O acesso é imediato e você pode começar sua jornada no mesmo dia.",
  },
  {
    question: "Preciso ter experiência com o Rosário?",
    answer:
      "Não! O material foi pensado tanto para quem já reza o Rosário quanto para quem está começando. Você terá orientações claras e acolhedoras para cada passo.",
  },
  {
    question: "Quanto tempo por dia?",
    answer:
      "Cerca de 15 a 20 minutos. O suficiente para rezar um terço do Rosário, ler a reflexão do dia e realizar a ação prática sugerida. Cabe na rotina mais corrida.",
  },
  {
    question: "Posso começar hoje?",
    answer:
      "Sim! O acesso é imediato após a confirmação do pagamento. Você pode começar o Dia 1 ainda hoje e seguir o ritmo que funcionar melhor para você.",
  },
  {
    question: "E se eu atrasar algum dia?",
    answer:
      "Sem problemas. A jornada é sua e Deus não conta os dias de forma rígida. Se atrasar, retome de onde parou. O importante é a constância, não a perfeição.",
  },
];

const FAQSection = () => {
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
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas antes de começar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#oferta" className="btn-primary inline-block">
            Quero participar do Desafio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
