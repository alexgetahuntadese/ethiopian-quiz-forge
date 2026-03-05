import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Harar/Harme Tech Solutions",
    period: "Dec 2023 — Present",
    tasks: [
      "Development and deployment of complex websites for government agencies using Python Django.",
      "Development of Android apps and games for schools and business markets.",
    ],
  },
  {
    role: "Data Encoder / System & Network Administrator",
    company: "Maya City",
    period: "Dec 2020 — Present",
    tasks: [
      "Administrate the online system (ORCA) and database for civil registration.",
      "Registered and encoded data for citizens' certificates (birth, marriage, adoption, death).",
      "Prepared plans and reports on monthly and annual basis.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary mb-4 uppercase">Career</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-16 tracking-tight">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                className="relative grid md:grid-cols-[40px_1fr] gap-4 md:gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-start justify-center pt-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />
                </div>

                {/* Card */}
                <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary shrink-0" />
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-md">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
