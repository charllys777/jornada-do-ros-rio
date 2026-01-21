import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToPayment = () => {
    window.location.href = "https://pay.wiapy.com/v3nzAFRWJt";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-card/95 backdrop-blur-sm border-t border-border px-4 py-3 shadow-lg">
            <button
              onClick={goToPayment}
              className="btn-gold w-full flex items-center justify-center gap-2"
            >
              <span>Finalizar Inscrição</span>
            </button>
            <p className="text-center text-xs text-muted-foreground mt-2">
              Por apenas R$10 • Acesso imediato
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
