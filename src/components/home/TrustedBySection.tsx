import { motion } from "framer-motion";

const logos = [
  { name: "STRABAG", text: "STRABAG" },
  { name: "HOCHTIEF", text: "HOCHTIEF" },
  { name: "VINCI", text: "VINCI" },
  { name: "DPR", text: "DPR" },
];

export function TrustedBySection() {
  return (
    <section className="py-16 bg-card">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Trusted by</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Industry Leaders
          </h3>
          <p className="text-muted-foreground mb-12">
            Experience the reliability chosen by industry giants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-2xl md:text-3xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {logo.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
