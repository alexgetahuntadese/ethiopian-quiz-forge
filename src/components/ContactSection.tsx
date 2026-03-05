import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary mb-4 uppercase">Contact</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            Let's work together.
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <a
            href="mailto:alexgetahuntadese@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            { icon: Github, label: "GitHub", href: "https://github.com/alexgetahuntadese" },
            { icon: Linkedin, label: "LinkedIn", href: "#" },
            { icon: ExternalLink, label: "Resume", href: "/resume.pdf" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-border pt-8 max-w-5xl mx-auto">
        <p className="text-center text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} — Designed & Built with care
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
