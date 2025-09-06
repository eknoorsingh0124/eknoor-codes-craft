import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-card-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo and Name */}
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ES
            </div>
            <span className="text-xl font-semibold text-foreground">Eknoor Singh</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-foreground-secondary mb-6 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Full Stack Java Developer specializing in enterprise aviation solutions
          </motion.p>

          {/* Quick Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Neo4j', 'Microservices'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Made with Love */}
          <motion.div
            className="flex items-center justify-center space-x-2 text-foreground-secondary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-sm">Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span className="text-sm">using</span>
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm">and</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Coffee className="w-4 h-4 text-amber-600" />
            </motion.div>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Available for new opportunities</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="border-t border-card-border pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-foreground-secondary">
              © {currentYear} Eknoor Singh. All rights reserved.
            </p>
            <p className="text-xs text-foreground-muted mt-2">
              Module Lead • Java Expert • Aviation Technology Specialist
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;