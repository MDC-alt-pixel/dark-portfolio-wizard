import { motion } from "framer-motion";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center gradient-text"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.1 }}
              className="relative aspect-video bg-white/5 rounded-lg overflow-hidden hover-scale"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">Projet {item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};