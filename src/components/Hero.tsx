import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center text-center px-4 py-12 md:py-0"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden bg-secondary/20 border-2 border-primary">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Photo
            </div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">SALOMON KIPAKA</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 px-4"
        >
          Chercheur en Droit du Numérique | Développeur de Solutions Numériques | Modélisateur 3D
        </motion.p>
      </div>
    </motion.section>
  );
};