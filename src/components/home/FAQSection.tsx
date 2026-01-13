import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you compile your lists?",
    answer:
      "Lists are compiled from membership rosters, registrations, public records, licenses, corporate & executive registers, postal records, surveys, questionnaires, census data, student lists, birth records, voter registrations, telemarketing efforts, mail & telephone inquiries and purchase information, telephone directories, rebate coupons, subscriber order forms, warranty card registrations, entry forms, credit & financial data, SEC listings, institution information, conference/trade show/seminar attendee registrations, government records, opt-in email responses, applications, and rating & licensing boards. All information is derived from proprietary, self-reported data, or sources of public record. It is obtained legally and ethically under strict list industry rules, regulations, and guidelines.",
  },
  {
    question: "Why should i do buisness with SalesPropspex?",
    answer:
      "We focus on service and deeply value our association with customers. SalesProspex has over 10 -15 years of experience to offer.We have the most competitive industry prices for email verified lists, data management and other digital marketing solutions.Our group has adopted a manual verification process which requires our resources to validate each contact on your list.A one-stop list source. We deliver thoroughly verified mailing, telemarketing, fax and email lists.We customize data to fit every customer’s need.Instant verified counts and investment options.Volume pricing, Quick pricing and ordering.Access to the current data available.",
  },
  {
    question: "How often do u update your compiled lists?",
    answer:
      "Compiled lists are updated monthly or quarterly through original source documentation, postal/ subscription/ credit changes of address, pander files, suppression files and telemarketing efforts.",
  },
  {
    question: "What is the SalesProspex guarantee?",
    answer:
      "SalesProspex Solutions guarantees the deliver ability and accuracy of all appended records. If for any reason you should receive a bounce-back or have an erroneous email we will issue you a credit for those records. Because people move and cancel email accounts this guarantee is good for 14 days from the day you receive your newly appended data.",
  },
  {
    question: "How current are the online resources and tutorials?",
    answer:
      "We regularly update our online resources and tutorials to reflect the latest trends in DIY and construction, as well as introductions to new tools and techniques. Our material aims to be comprehensive and user-friendly for all skill levels.",
  },
  {
    question: "How long does the append process take?",
    answer:
      "We proudly offer one of the fastest turnaround times on append files. Upon receiving your data we require 7 – 10 days to complete the total append process and return your data. In some cases we have been able to reduce that time to 24 hours when necessary. Because of our relationship directly with the nation’s largest data consortium, we are not required to “pass” our data to several different locations. This results in a more efficient process and faster service.",
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
