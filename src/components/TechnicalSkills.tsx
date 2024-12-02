import { motion } from "framer-motion";
import { Progress } from "./ui/progress";

interface Skill {
  name: string;
  level: number;
}

const software: Skill[] = [
  { name: "Excel", level: 95 },
  { name: "React.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Photoshop", level: 70 },
  { name: "SPSS", level: 85 },
  { name: "Power BI", level: 80 },
  { name: "Microsoft Fabric", level: 75 },
];

const languages: Skill[] = [
  { name: "Français", level: 100 },
  { name: "Anglais", level: 80 },
  { name: "Swahili", level: 90 },
];

const education = [
  {
    degree: "Licence en Droit Économique et Social",
    institution: "Université Catholique de Bukavu",
    year: "2023",
  },
  {
    degree: "Certification en Analyse de Données",
    institution: "Expert-Tech",
    year: "2023",
  },
];

export const TechnicalSkills = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
        >
          Compétences Techniques
        </motion.h2>

        {/* Software Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary">Logiciels & Technologies</h3>
          <div className="grid gap-4">
            {software.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-4 rounded-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary">Langues</h3>
          <div className="grid gap-4">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-4 rounded-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-primary">{language.level}%</span>
                </div>
                <Progress value={language.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-primary">Formation</h3>
          <div className="grid gap-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-4 rounded-lg"
              >
                <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-400">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};