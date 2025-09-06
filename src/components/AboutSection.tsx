import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Plane, Users, Trophy, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Plane,
      title: "Aviation Domain Expert",
      description: "6+ Years specializing in aviation industry solutions",
      highlight: "Aviation Domain"
    },
    {
      icon: Briefcase,
      title: "Module Lead",
      description: "Leading development at Sopra Steria India for Airbus projects",
      highlight: "Leadership Role"
    },
    {
      icon: Users,
      title: "User Impact",
      description: "Supporting 50,000+ monthly users across 400+ organizations",
      highlight: "50K+ Users"
    },
    {
      icon: Trophy,
      title: "Technical Excellence",
      description: "Expert in Service Bulletin management and aircraft maintenance systems",
      highlight: "Technical Leader"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Passionate about building scalable backend solutions and seamless user experiences 
            in the aviation industry
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Professional Journey
            </h3>
            <div className="space-y-4 text-foreground-secondary">
              <p className="leading-relaxed">
                As a <strong className="text-foreground">Module Lead</strong> at Sopra Steria India, 
                I've been instrumental in developing the AirnavX Engineering platform that serves 
                the global aviation community with cutting-edge solutions.
              </p>
              <p className="leading-relaxed">
                My expertise lies in architecting robust backend services using 
                <strong className="text-primary"> Java and Spring Boot</strong>, complemented by 
                modern frontend development with <strong className="text-secondary">Angular</strong>. 
                I specialize in microservices architecture and have extensive experience with 
                graph databases like Neo4j.
              </p>
              <p className="leading-relaxed">
                Currently leading the development of Service Bulletin management systems that 
                handle critical aircraft maintenance data for major airlines, MROs, lessors, 
                and suppliers worldwide.
              </p>
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 bg-gradient-card rounded-xl border border-card-border">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-foreground-secondary">Years in Aviation</div>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-xl border border-card-border">
              <div className="text-3xl font-bold text-secondary mb-2">50K</div>
              <div className="text-sm text-foreground-secondary">Monthly Users</div>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-xl border border-card-border">
              <div className="text-3xl font-bold text-primary mb-2">400+</div>
              <div className="text-sm text-foreground-secondary">Organizations</div>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-xl border border-card-border">
              <div className="text-3xl font-bold text-secondary mb-2">5+</div>
              <div className="text-sm text-foreground-secondary">Major Projects</div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-professional h-full">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{achievement.title}</h4>
                  <p className="text-sm text-foreground-secondary mb-3">{achievement.description}</p>
                  <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {achievement.highlight}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Current Focus */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="card-professional max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Current Focus</h3>
            <p className="text-foreground-secondary leading-relaxed">
              I'm currently available with a <strong className="text-primary">2 months notice period</strong> 
              and actively exploring opportunities to bring my expertise in Java backend development, 
              microservices architecture, and aviation domain knowledge to innovative projects. 
              My passion lies in building scalable, reliable systems that make a real-world impact.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;