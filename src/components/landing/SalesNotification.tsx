import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const salesData = [
  { name: "Maria", city: "São Paulo", state: "SP", time: "2 minutos" },
  { name: "Ana Paula", city: "Belo Horizonte", state: "MG", time: "5 minutos" },
  { name: "Lúcia", city: "Curitiba", state: "PR", time: "8 minutos" },
  { name: "Teresa", city: "Rio de Janeiro", state: "RJ", time: "12 minutos" },
  { name: "Francisca", city: "Fortaleza", state: "CE", time: "15 minutos" },
  { name: "Josefa", city: "Salvador", state: "BA", time: "3 minutos" },
  { name: "Cláudia", city: "Porto Alegre", state: "RS", time: "7 minutos" },
  { name: "Beatriz", city: "Recife", state: "PE", time: "10 minutos" },
  { name: "Marta", city: "Brasília", state: "DF", time: "4 minutos" },
  { name: "Sônia", city: "Goiânia", state: "GO", time: "6 minutos" },
  { name: "Regina", city: "Manaus", state: "AM", time: "9 minutos" },
  { name: "Fátima", city: "Belém", state: "PA", time: "11 minutos" },
  { name: "Sandra", city: "Vitória", state: "ES", time: "14 minutos" },
  { name: "Ângela", city: "Natal", state: "RN", time: "1 minutos" },
  { name: "Cristina", city: "Florianópolis", state: "SC", time: "13 minutos" },
];

const SalesNotification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNextNotification = () => {
      setIsVisible(true);
      
      // Esconde após 3 segundos (conforme solicitado)
      setTimeout(() => {
        setIsVisible(false);
        // Prepara o próximo índice
        setCurrentIndex((prev) => (prev + 1) % salesData.length);
      }, 3000);
    };

    // Inicia o ciclo: mostra a cada 15 segundos (conforme solicitado)
    const interval = setInterval(showNextNotification, 15000);
    
    // Mostra a primeira após 3 segundos do carregamento
    const initialTimeout = setTimeout(showNextNotification, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const currentSale = salesData[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-4 z-50 flex items-center gap-3 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-green-100 max-w-[280px] md:max-w-xs"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-800 leading-tight">
              <span className="font-bold">{currentSale.name}</span> de {currentSale.city}/{currentSale.state}
            </p>
            <p className="text-xs text-gray-500">
              acabou de adquirir o desafio há {currentSale.time}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SalesNotification;
