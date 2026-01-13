import { motion } from "framer-motion";
import { Users, DollarSign, BookOpen, Layout } from "lucide-react";
import featuresImage from "@/assets/features-image.png";

const features = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description:
      "Benefit from our committed teams who ensure your success is personal. Count on expert guidance and exceptional results throughout your project journey.",
  },
  {
    icon: DollarSign,
    title: "ICP Tech Active Leads",
    description:
      "ICPTech, also known as the ICP Active Audience platform, is an AI-powered tool designed to generate high-quality B2B leads for your SDRs.",
  },
  {
    icon: BookOpen,
    title: "Data Enrichment",
    description:
      "This makes sure your data is clean, complete, and trustworthy, so you’re not making decisions based on messy, missing, or wrong information.",
  },
  {
    icon: Layout,
    title: "Growth Teams",
    description:
      "Experienced growth specialists who already know what to do, how to do it, and how to apply it to your specific industry.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={featuresImage}
              alt="ScrewFast products floating"
              className="w-full max-w-md mx-auto animate-float"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A comprehensive framework of SMART Solutions
            </h2>
            <p className="text-muted-foreground mb-8">
              As the world's leading service-oriented growth partner, Sales Prospex has redefined the blueprint for sustainable growth—proving that the most valuable currency isn't data itself, but the intelligence to transform it into business outcomes through intent data and buyer signals.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
