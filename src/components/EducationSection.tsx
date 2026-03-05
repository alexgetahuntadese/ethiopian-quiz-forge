import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary mb-4 uppercase">Education</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-16 tracking-tight">
            Academic Background
          </h2>
        </motion.div>

        <motion.div
          className="rounded-xl border border-border bg-card p-8 hover:border-primary/30 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                Software Engineering
              </h3>
              <p className="text-muted-foreground mt-1">Adama Science and Technology University</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-md">
                <Calendar className="w-3 h-3" />
                2014 — 2017
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                Adama City, Ethiopia
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-secondary rounded-lg px-4 py-3 text-center">
              <p className="font-display text-2xl font-bold text-foreground">3.25</p>
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">GPA</p>
            </div>
            <div className="bg-secondary rounded-lg px-4 py-3">
              <p className="text-sm font-medium text-foreground">Capstone Project</p>
              <p className="text-xs text-muted-foreground mt-0.5">ASTU Grading and Checklist Management System</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
