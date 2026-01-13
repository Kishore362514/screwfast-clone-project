import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fast-Track Your Projects
            </h2>
            <p className="text-muted-foreground mb-8">
              At ScrewFast, we ensure a swift start with instant account setup. Experience the speed of construction redefined.
            </p>

            <div className="glass-card p-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-lg italic mb-6">
                This was the first dataset that actually matched how banks buy technology.

It turned our ABM strategy into real pipeline.
We finally had lists we could trust.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "70k+", label: "customers equipped — from DIY to major construction firms" },
              { value: "35%", label: "uptick in project efficiency with ScrewFast tools and services" },
              { value: "15.3%", label: "reduction in maintenance costs reported by long-term clients" },
              { value: "2x", label: "quicker assembly using innovative fastening solutions" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
