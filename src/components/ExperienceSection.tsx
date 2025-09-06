import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  current: boolean;
  projects: string[];
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

const ExperienceSection = () => {
  const experience: Experience = {
    title: "Module Lead",
    company: "Sopra Steria India",
    location: "Noida, India",
    duration: "August 2019 - Present",
    current: true,
    projects: ["AirnavX Engineering", "AirnavX Platform"],
    responsibilities: [
      "Leading development team for Airbus engineering projects",
      "Architecting microservices-based backend solutions using Java and Spring Boot",
      "Managing Service Bulletin (SB) validation and processing systems",
      "Developing RESTful APIs for aircraft maintenance data management",
      "Implementing graph database solutions with Neo4j for complex relationships",
      "Coordinating with international teams and stakeholders",
      "Mentoring junior developers and conducting code reviews"
    ],
    technologies: [
      "Java", "Spring Boot", "Microservices", "PostgreSQL", "Neo4j", 
      "Angular", "REST APIs", "Spring Security", "Git/GitLab", "JUnit"
    ],
    achievements: [
      "Led development of platform serving 50,000+ monthly users",
      "Successfully delivered critical aviation safety systems on time",
      "Improved system performance by 40% through microservices optimization",
      "Implemented robust SB management system handling 10,000+ service bulletins",
      "Established best practices for code quality and testing standards"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-hero bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Leading enterprise software development in the aviation industry
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-professional">
              {/* Header */}
              <div className="border-b border-card-border pb-6 mb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{experience.title}</h3>
                    <div className="flex items-center space-x-4 text-foreground-secondary">
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-foreground-secondary">{experience.duration}</span>
                    {experience.current && (
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                        Current
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-8">
                <h4 className="flex items-center text-lg font-semibold text-foreground mb-4">
                  <Briefcase className="w-5 h-5 mr-2 text-primary" />
                  Key Projects
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {experience.projects.map((project, index) => (
                    <motion.div
                      key={project}
                      className="bg-gradient-card border border-card-border rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h5 className="font-semibold text-foreground">{project}</h5>
                      <p className="text-sm text-foreground-secondary mt-1">
                        {project === "AirnavX Engineering" 
                          ? "Service Bulletin management for Airbus aircraft"
                          : "Technical data consultation platform for aviation industry"
                        }
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-secondary text-sm">{responsibility}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 bg-gradient-accent rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-foreground font-medium text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Career Highlight */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-professional bg-gradient-accent">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Career Highlight</h3>
              <p className="text-foreground-secondary leading-relaxed">
                Over <strong className="text-primary">4+ years</strong> at Sopra Steria India, 
                I've grown from a developer to a <strong className="text-primary">Module Lead</strong>, 
                successfully delivering enterprise-scale aviation solutions that serve the global aerospace industry. 
                My journey demonstrates expertise in both <strong className="text-secondary">technical leadership</strong> and 
                <strong className="text-secondary"> hands-on development</strong>, with a proven track record of building 
                scalable systems that handle critical aviation data for major airlines worldwide.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;