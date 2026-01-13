import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of tools are included in the Starter Kit?",
    answer:
      "The Starter Kit features essential hand and power tools for diverse DIY projects, including hammers, drills, screwdrivers, and a variety of fasteners. It's a curated selection to help beginners and experienced DIYers alike tackle most home improvement tasks.",
  },
  {
    question: "Can I upgrade from the Starter Kit to the Professional Toolbox?",
    answer:
      "Absolutely! You can upgrade to the Professional Toolbox at any time to access a wider range of high-quality tools, enjoy priority customer support, and receive exclusive content. Contact our support team for a seamless transition.",
  },
  {
    question: "What discounts are available for bulk orders through the Professional Toolbox plan?",
    answer:
      "Professional Toolbox members are entitled to exclusive discounts on bulk orders, the percentage of which may vary depending on the order volume. Get in touch with us to discuss your needs, and we'll provide a tailored discount structure.",
  },
  {
    question: "What kind of customer support can I expect?",
    answer:
      "All our customers receive dedicated email support. With the Starter Kit, you'll receive our standard support, while the Professional Toolbox plan upgrades you to priority support, meaning faster response times and specialized assistance.",
  },
  {
    question: "How current are the online resources and tutorials?",
    answer:
      "We regularly update our online resources and tutorials to reflect the latest trends in DIY and construction, as well as introductions to new tools and techniques. Our material aims to be comprehensive and user-friendly for all skill levels.",
  },
  {
    question: "Does ScrewFast offer services for large-scale construction projects?",
    answer:
      "Yes, our Enterprise Solutions are designed for larger companies requiring comprehensive services. We provide consultation, planning, and supply of high-grade tools and materials, as well as staffing solutions for substantial construction needs. Contact us for a customized quote.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently <span className="text-primary">asked questions</span>
          </h2>
          <p className="text-muted-foreground">
            Ask us anything about our brand and products, and get factual responses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
