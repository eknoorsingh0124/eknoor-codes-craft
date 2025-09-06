import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Users, Database, Server, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  features: string[];
  stats: { label: string; value: string; icon: React.ElementType }[];
  isLive?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  category: 'featured' | 'professional';
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "AirnavX Engineering",
      description: "Service Bulletin management platform for Airbus aircraft maintenance, handling critical aircraft technical data for the global aviation industry.",
      impact: "Streamlines SB validation, revision history, and MSN/aircraft-type applicability for major airlines and MROs worldwide.",
      techStack: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Angular", "Neo4j"],
      features: [
        "Service Bulletin validation and management",
        "Aircraft revision history tracking",
        "MSN/aircraft-type applicability rules",
        "Integration with Airbus technical systems",
        "Real-time data synchronization"
      ],
      stats: [
        { label: "Airlines Served", value: "200+", icon: Globe },
        { label: "Service Bulletins", value: "10K+", icon: Database },
        { label: "Aircraft Types", value: "50+", icon: Server }
      ],
      category: 'featured',
      isLive: true
    },
    {
      title: "AirnavX Platform",
      description: "Technical data consultation platform providing centralized access to aircraft maintenance manuals and documentation for the aviation industry.",
      impact: "Serves 50,000+ monthly users across 400+ organizations including airlines, MROs, lessors, and suppliers.",
      techStack: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Elasticsearch", "Redis"],
      features: [
        "Advanced keyword search functionality",
        "Aircraft maintenance manual access",
        "Technical documentation repository",
        "User role-based access control",
        "Multi-language support"
      ],
      stats: [
        { label: "Monthly Users", value: "50K+", icon: Users },
        { label: "Organizations", value: "400+", icon: Globe },
        { label: "Documents", value: "1M+", icon: Database }
      ],
      category: 'featured',
      isLive: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-hero bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Enterprise-scale aviation solutions serving the global aerospace industry
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-professional overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        {project.isLive && (
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-600 font-medium">Live Production</span>
                          </div>
                        )}
                      </div>
                      <p className="text-foreground-secondary leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                        <h4 className="font-semibold text-primary mb-2">Impact</h4>
                        <p className="text-sm text-foreground-secondary">{project.impact}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-gradient-card border border-card-border rounded-full text-sm font-medium text-foreground"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            className="flex items-start space-x-2 text-sm text-foreground-secondary"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.liveUrl && (
                        <Button
                          variant="default"
                          size="sm"
                          className="bg-primary hover:bg-primary-hover text-white"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Project Impact</h4>
                    {project.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        className="bg-gradient-card border border-card-border rounded-lg p-4 text-center hover-lift"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: statIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-3">
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-foreground-secondary">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="card-professional max-w-4xl mx-auto bg-gradient-accent">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Enterprise Development</h3>
            <p className="text-foreground-secondary leading-relaxed mb-6">
              These projects represent enterprise-scale solutions developed for Airbus and the global aviation industry. 
              They showcase expertise in handling complex business requirements, large-scale data processing, 
              and building systems that serve critical infrastructure for airlines worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-background/50 rounded-lg p-3">
                <div className="font-medium text-primary">Microservices Architecture</div>
                <div className="text-foreground-secondary">Scalable, maintainable backend services</div>
              </div>
              <div className="bg-background/50 rounded-lg p-3">
                <div className="font-medium text-secondary">High Availability</div>
                <div className="text-foreground-secondary">99.9% uptime for critical aviation systems</div>
              </div>
              <div className="bg-background/50 rounded-lg p-3">
                <div className="font-medium text-primary">Global Scale</div>
                <div className="text-foreground-secondary">Supporting users across multiple continents</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;