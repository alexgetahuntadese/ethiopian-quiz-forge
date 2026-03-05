import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:alexgetahuntadese@gmail.com?subject=${subject}&body=${body}`, "_self");
    toast({
      title: "Email client opened!",
      description: "Complete sending your message in your email app.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary mb-4 uppercase">Contact</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            Let's work together.
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-1.5 uppercase tracking-wider">Name</label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-1.5 uppercase tracking-wider">Email</label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-full justify-center"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>

          {/* Links & Info */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">Direct Email</p>
                <a href="mailto:alexgetahuntadese@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  alexgetahuntadese@gmail.com
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">Find Me Online</p>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: Github, label: "GitHub", href: "https://github.com/alexgetahuntadese" },
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: ExternalLink, label: "Resume", href: "/resume.pdf" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
