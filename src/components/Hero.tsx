import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section 
      // Initial animation state
      initial={{ opacity: 0 }}
      // Animation target state
      animate={{ opacity: 1 }}
      // Animation duration
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <div className="max-w-4xl">
        {/* Profile photo container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          {/* Placeholder for profile photo from Google Drive */}
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-secondary/20 border-2 border-primary">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Photo
            </div>
          </div>
        </motion.div>

        {/* Name heading with gradient effect */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">SALOMON KIPAKA</span>
        </motion.h1>

        {/* Professional titles */}
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