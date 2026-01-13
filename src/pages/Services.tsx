import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import blueprintsImage from "@/assets/blueprints.png";
import workersImage from "@/assets/workers.png";
import constructionFrame from "@/assets/construction-frame.png";

const stats = [
  { value: "96%", label: "of our clients rate their experience with ScrewFast as exceptional" },
  { value: "99.8%", label: "project completion rate" },
  { value: "5,000+", label: "successful installations" },
  { value: "85%", label: "of clients return for additional services" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Uniting Expertise with Your Vision
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              At ScrewFast, we take pride in providing comprehensive solutions and exceptional service in the hardware and construction industry. Our experienced team is dedicated to supporting your project from inception to completion with a range of specialized services.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service 1: Expert Guidance */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Delivering Expert Guidance
              </h2>
              <p className="text-muted-foreground">
                Embarking on a construction project can be overwhelming. With our professional consultation services, we guide you through every stage, ensuring you make informed decisions. Whether you are a DIY enthusiast or a skilled contractor, our experts are on hand to offer tailored advice on product selection, project scope, and compliance with local regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={blueprintsImage}
                alt="Blueprints and digital tablet"
                className="rounded-2xl col-span-2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 2: Construction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={constructionFrame}
                alt="Construction site"
                className="rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Designs into Reality
              </h2>
              <p className="text-muted-foreground mb-6">
                Our skilled craftsmen bring precision and excellence to every construction project. From minor installations to substantial structural work, ScrewFast offers reliable construction services to turn your plans into tangible outcomes. We ensure the highest standards of safety and workmanship, utilizing top-quality tools and materials from our extensive inventory.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 3: Project Management */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Navigating Projects with Professional Oversight
              </h2>
              <p className="text-muted-foreground">
                Effective project management is at the heart of any successful build. ScrewFast provides thorough planning and robust management services that keep your project on time and within budget. Let us handle the complexities of workflow coordination, resource allocation, and stakeholder communication while you focus on your vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={workersImage}
                alt="Construction workers"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 4: Maintenance */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ensuring Long-lasting Performance
            </h2>
            <p className="text-muted-foreground mb-8">
              Our commitment to your project doesn't end at completion. ScrewFast offers ongoing maintenance and support services to ensure your construction's longevity and performance. From regular check-ups to emergency assistance, our responsive team is there to provide seamless support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">By the Numbers</h2>
            <p className="text-muted-foreground">
              Our commitment to quality and reliability is evident in every project we undertake.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8">
            Let our team of experts help you bring your vision to life.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/contact">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
