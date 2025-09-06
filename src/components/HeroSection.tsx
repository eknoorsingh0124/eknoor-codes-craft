import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, MapPin } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import profileImage from '@/assets/eknoor-profile.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would download the resume
    window.open('/Eknoor.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPin className="w-5 h-5 text-secondary mr-2" />
              <span className="text-foreground-secondary">Noida, India</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Full Stack Java Developer
              </span>
              <br />
              <span className="text-foreground">& Module Lead</span>
            </motion.h1>

            <motion.p
              className="text-xl text-foreground-secondary mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Crafting scalable enterprise solutions with Java, Spring Boot & Microservices
              for the aviation industry
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 hover-lift"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-8 py-3 hover-lift"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-foreground-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-foreground-secondary">Monthly Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">400+</div>
                <div className="text-sm text-foreground-secondary">Organizations</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-96 rounded-2xl overflow-hidden border-4 border-card-border hover-glow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Eknoor Singh - Full Stack Java Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"
                style={{ animationDelay: '0s' }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary/20 rounded-full animate-float"
                style={{ animationDelay: '1s' }}
              />
              <motion.div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-accent/40 rounded-full animate-float"
                style={{ animationDelay: '2s' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;