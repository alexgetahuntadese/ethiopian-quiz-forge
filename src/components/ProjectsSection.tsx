import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectGesh from "@/assets/project-gesh.jpg";
import projectShowcase from "@/assets/project-showcase.jpg";
import projectAtlasAscend from "@/assets/project-atlas-ascend.jpg";

const projects = [
  {
    title: "Gesh Giving Platform",
    description: "A tithe and donation platform for Ethiopian churches worldwide. Features secure payments, verified churches, recurring donations, and mobile-first design serving 10K+ users across 25+ countries.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    image: projectGesh,
    liveUrl: "https://gesh-giving-platform.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Atlas Ascend — Washington Hotel",
    description: "A 4-star hotel website for Washington Hotel in Bole Atlas, Addis Ababa. Features room booking, rooftop terrace showcase, spa & wellness info, and a modern dark-gold design with 79 rooms & suites.",
    tags: ["React", "TypeScript", "Tailwind", "Vercel"],
    image: projectAtlasAscend,
    liveUrl: "https://atlas-ascend.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Developer Showcase",
    description: "Personal portfolio and developer showcase built with modern web technologies. Features smooth animations, responsive design, and a clean UI.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    image: projectShowcase,
    liveUrl: "https://developer-showcase-waho.vercel.app/",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-card border border-border border-gradient"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveUrl}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider text-primary px-2 py-1 rounded bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary mb-4 uppercase">Selected Work</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-16 tracking-tight">
            Projects I've built.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
