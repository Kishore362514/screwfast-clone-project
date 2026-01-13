import { motion } from "framer-motion";
import constructionEquipment from "@/assets/construction-equipment.png";
import dashboardImage from "@/assets/dashboard-image.png";
import constructionFrame from "@/assets/construction-frame.png";

export function ShowcaseSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Data-driven Use Cases —
Business-ready Offerings for Every Business-need
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden hover-lift"
          >
            <img
              src={constructionEquipment}
              alt="Heavy construction equipment"
              className="w-full h-64 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl overflow-hidden hover-lift"
          >
            <img
              src={dashboardImage}
              alt="Project management dashboard"
              className="w-full h-64 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl overflow-hidden hover-lift"
          >
            <img
              src={constructionFrame}
              alt="Building construction frame"
              className="w-full h-64 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
