import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4">
                Alexander
                <br />
                <span className="text-gradient">Getahun</span>
              </h1>
              <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-2">
                IT Specialist / Software Engineer
              </p>
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-8">
                <MapPin className="w-3.5 h-3.5" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Code meets creativity — I turn ideas into sleek, functional tech.
              Building apps, solving bugs, and crafting digital experiences that matter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-secondary transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right side — stats */}
          <motion.div
            className="hidden lg:flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { number: "4+", label: "Years Experience" },
              { number: "10+", label: "Projects Built" },
              { number: "6+", label: "Technologies" },
            ].map(({ number, label }) => (
              <div key={label} className="text-right border-r-2 border-primary/30 pr-6 py-2">
                <p className="font-display text-3xl font-bold text-foreground">{number}</p>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
