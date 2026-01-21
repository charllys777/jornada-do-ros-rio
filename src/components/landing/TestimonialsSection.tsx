import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonial1 from "../../assets/social-proof/testimonial-1.png";
import testimonial2 from "../../assets/social-proof/testimonial-2.png";
import testimonial3 from "../../assets/social-proof/testimonial-3.png";

const testimonials = [
  {
    name: "Maria S.",
    location: "São Paulo, SP",
    text: "Meu filho estava se afastando da família. Depois desses 21 dias, algo mudou — primeiro em mim, depois na nossa relação.",
  },
  {
    name: "Ana Paula R.",
    location: "Belo Horizonte, MG",
    text: "Eu achava que não tinha tempo para rezar. Esse desafio me mostrou que 15 minutos podem mudar o dia inteiro.",
  },
  {
    name: "Lúcia M.",
    location: "Curitiba, PR",
    text: "Meu casamento estava por um fio. A oração constante trouxe uma paz que eu não sentia há anos.",
  },
  {
    name: "Teresa C.",
    location: "Rio de Janeiro, RJ",
    text: "Chorei muito nos primeiros dias. Mas era um choro de libertação. Deus ouviu minha oração.",
  },
  {
    name: "Francisca L.",
    location: "Fortaleza, CE",
    text: "Simples, profundo e transformador. Nunca pensei que um PDF pudesse mudar tanto minha rotina espiritual.",
  },
  {
    name: "Josefa A.",
    location: "Salvador, BA",
    text: "Oro pelos meus netos todos os dias agora. Esse desafio me deu constância e esperança.",
  },
];

const socialProofImages = [testimonial1, testimonial2, testimonial3];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section text-foreground mb-4">
            Relatos de quem decidiu viver essa jornada
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada história é única — mas a constância na oração muda o interior.
          </p>
        </motion.div>

        {/* Imagens de Prova Social */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialProofImages.map((img, index) => (
            <motion.div
              key={`img-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img 
                src={img} 
                alt={`Depoimento ${index + 1}`} 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 border border-border hover:border-accent/50 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-accent/50 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
