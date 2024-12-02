import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">SALOMON KIPAKA</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Chercheur en Droit du Numérique | Développeur de Solutions Numériques | Modélisateur 3D
        </motion.p>
      </div>
    </motion.section>
  );
};