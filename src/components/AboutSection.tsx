import { motion } from "framer-motion";

const skills = [
  "Java", "Python", "JavaScript", "TypeScript", "React", "Node.js",
  "Django", "Vue.js", "PHP", "C++", "PostgreSQL", "MySQL",
  "MongoDB", "Redis", "Docker", "AWS", "Git", "Android",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary mb-4 uppercase">About</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-8 tracking-tight">
            Turning ideas into
            <br />
            real-world products.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Software Engineer with experience in full-stack development — from Django backends 
              to React frontends and Android apps. I've built and deployed complex websites for 
              government agencies and developed apps for schools and businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Addis Ababa, Ethiopia. I'm passionate about clean code, solving real problems, 
              and continuously growing as a developer. I thrive in collaborative environments and 
              love tackling complex challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
