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
    title: "Simplicity and Affordability",
    description:
      "Find easy-to-use, affordable solutions with ScrewFast's line of tools and equipment. Our products make procurement simple and keep projects within budget.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Documentation",
    description:
      "Integrate with ease using ScrewFast's exhaustive guides and libraries. Achieve seamless product adoption with our full suite of documentation designed for your success.",
  },
  {
    icon: Layout,
    title: "User-Centric Design",
    description:
      "Experience the difference with ScrewFast's user-focused design — where functionality meets practicality for an enhanced work experience.",
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
              Meeting Industry Demands
            </h2>
            <p className="text-muted-foreground mb-8">
              At ScrewFast, we tackle the unique challenges encountered in the hardware and construction sectors. From cutting-edge tools to expert services, we're dedicated to helping you overcome obstacles and achieve your goals.
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
