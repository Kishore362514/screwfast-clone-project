import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.png";

const avatars = [
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
];

export function HeroSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Driving Growth through{" "}
              <br />
              <span className="text-primary">Intent and Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-lg">
              Harness our AI-Amplified & Data-Driven Approach to Convert
            </p>
            <div className="space-y-2 mb-8 max-w-lg">
              <p className="text-base text-muted-foreground">
                <span className="text-primary font-semibold">Insights into Impact</span>
              </p>
              <p className="text-base text-muted-foreground">
                <span className="text-primary font-semibold">Analytics into Actionable Results</span>
              </p>
              <p className="text-base text-muted-foreground">
                <span className="text-primary font-semibold">Growth-Hacks into Growth Accelerators</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="gap-2">
                <Link to="/products">
                  Start Exploring
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Sales Team</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Customer"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold border-2 border-background">
                  7k+
                </div>
              </div>
              <div className="border-l border-border pl-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4 ? "fill-primary text-primary" : "fill-primary/50 text-primary/50"
                      }`}
                    />
                  ))}
                  <span className="ml-1 font-semibold">4.8 / 5</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  From Over 12.8k Reviews
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="ScrewFast product boxes"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
