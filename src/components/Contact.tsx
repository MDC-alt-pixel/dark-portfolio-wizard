import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
        >
          Contact
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover-scale">
              <Phone className="text-primary w-6 h-6" />
              <a href="tel:+243825193440" className="text-lg">+243 825193440</a>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover-scale">
              <Mail className="text-primary w-6 h-6" />
              <a href="mailto:salomonkipaka23@gmail.com" className="text-lg">salomonkipaka23@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm hover-scale">
              <MapPin className="text-primary w-6 h-6" />
              <p className="text-lg">Goma, République Démocratique du Congo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};