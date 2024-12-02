import { motion } from "framer-motion";
import { Code2, Scale, Database, Box, MonitorPlay, BookOpen } from "lucide-react";

const skills = [
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Droit du Numérique",
    description: "Expertise en droit économique et social avec focus sur le numérique"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Analyse de Données",
    description: "Certifié en analyse de données chez Expert-Tech"
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Modélisation 3D",
    description: "Création de modèles et animations 3D"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Solutions Numériques",
    description: "Développement de solutions technologiques innovantes"
  },
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "Formation NTIC",
    description: "Formation et accompagnement en nouvelles technologies"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Recherche",
    description: "Recherche académique en droit du numérique"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
        >
          Compétences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover-scale"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};