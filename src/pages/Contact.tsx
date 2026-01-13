import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { MapPin, Mail, BookOpen, HelpCircle } from "lucide-react";

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form and Info */}
      <section className="pb-16 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h2 className="text-xl font-bold mb-6">Fill in the form below</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Details</Label>
                  <Textarea
                    id="details"
                    placeholder="Tell us about your project..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you in 1-2 business days.
                </p>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Knowledgebase */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Knowledgebase</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Browse through all of our knowledgebase articles.
                    </p>
                    <a
                      href="#"
                      className="text-sm text-primary font-medium hover:underline"
                    >
                      Visit guides & tutorials →
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">FAQ</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Explore our FAQ for quick, clear answers to common queries.
                    </p>
                    <a
                      href="#"
                      className="text-sm text-primary font-medium hover:underline"
                    >
                      Visit FAQ →
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Visit our office</h3>
                    <p className="text-sm text-muted-foreground">
                      UK ScrewFast
                    </p>
                    <p className="text-sm text-muted-foreground">
                      72 Union Terrace, E10 4PE London
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Contact us by email</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Prefer the written word? Drop us an email at
                    </p>
                    <a
                      href="mailto:support@screwfast.uk"
                      className="text-sm text-primary font-medium hover:underline"
                    >
                      support@screwfast.uk
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
