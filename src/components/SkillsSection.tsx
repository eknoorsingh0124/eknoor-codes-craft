import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Coffee, Leaf, Network, Shield, Database, GitBranch, TestTube, FileText } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  years: string;
  icon: React.ElementType;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
  gradient: string;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Development",
      description: "Primary expertise in enterprise Java development",
      gradient: "from-primary to-primary-hover",
      skills: [
        { name: "Java", level: 95, years: "5+ years", icon: Coffee, color: "text-orange-600" },
        { name: "Spring Boot", level: 90, years: "4+ years", icon: Leaf, color: "text-green-600" },
        { name: "Microservices", level: 85, years: "3+ years", icon: Network, color: "text-blue-600" },
        { name: "REST API Design", level: 88, years: "4+ years", icon: FileText, color: "text-purple-600" },
        { name: "Spring Security", level: 80, years: "3+ years", icon: Shield, color: "text-red-600" },
      ]
    },
    {
      title: "Databases",
      description: "Extensive experience with relational and graph databases",
      gradient: "from-secondary to-secondary-hover",
      skills: [
        { name: "PostgreSQL", level: 90, years: "5+ years", icon: Database, color: "text-blue-700" },
        { name: "Neo4j", level: 85, years: "5+ years", icon: Network, color: "text-cyan-600" },
        { name: "MySQL", level: 75, years: "3+ years", icon: Database, color: "text-orange-500" },
      ]
    },
    {
      title: "Frontend Development",
      description: "Modern web development with component-based architecture",
      gradient: "from-accent to-accent/80",
      skills: [
        { name: "Angular", level: 85, years: "4+ years", icon: FileText, color: "text-red-600" },
        { name: "AngularJS", level: 75, years: "2+ years", icon: FileText, color: "text-red-500" },
        { name: "HTML5/CSS3", level: 80, years: "4+ years", icon: FileText, color: "text-orange-600" },
      ]
    },
    {
      title: "Tools & Technologies",
      description: "Development tools and workflow management",
      gradient: "from-foreground-secondary to-foreground-muted",
      skills: [
        { name: "Git/GitLab", level: 85, years: "5+ years", icon: GitBranch, color: "text-orange-600" },
        { name: "JUnit/Mockito", level: 80, years: "4+ years", icon: TestTube, color: "text-green-600" },
        { name: "Swagger", level: 75, years: "3+ years", icon: FileText, color: "text-blue-600" },
        { name: "Activiti Workflow", level: 70, years: "2+ years", icon: Network, color: "text-purple-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-hero bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Specialized expertise in Java backend development with comprehensive full-stack capabilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-professional h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <skill.icon className={`w-5 h-5 ${skill.color}`} />
                          </motion.div>
                          <div>
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <div className="text-xs text-foreground-secondary">{skill.years}</div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: skill.level / 100 }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.3 }}
                          viewport={{ once: true }}
                          style={{
                            background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))`
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Highlight Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="card-professional max-w-4xl mx-auto bg-gradient-accent">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Java Expert</div>
                <div className="text-sm text-foreground-secondary">Primary backend language with 5+ years of enterprise experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">Full Stack</div>
                <div className="text-sm text-foreground-secondary">Complete application development from database to user interface</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Aviation Domain</div>
                <div className="text-sm text-foreground-secondary">Specialized knowledge in aircraft maintenance and aviation systems</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;