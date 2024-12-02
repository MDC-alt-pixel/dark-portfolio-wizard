import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text"
        >
          À Propos
        </motion.h2>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white/5 p-8 rounded-lg backdrop-blur-sm"
        >
          <p className="text-lg mb-4">
            Je suis un professionnel congolais passionné par l'intersection du droit et de la technologie.
            Né le 4 juin 2024, j'ai obtenu ma licence en droit économique et social à l'Université Catholique de Bukavu.
          </p>
          <p className="text-lg mb-4">
            En tant que chercheur en droit du numérique et analyste de données certifié chez Expert-Tech,
            je combine expertise juridique et compétences techniques pour créer des solutions innovantes.
          </p>
          <p className="text-lg">
            Ma polyvalence s'étend également à la modélisation 3D et à la formation en NTIC,
            me permettant d'apporter une perspective unique aux projets numériques.
          </p>
        </motion.div>
      </div>
    </section>
  );
};