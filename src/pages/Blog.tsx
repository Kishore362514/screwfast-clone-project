import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import workersImage from "@/assets/workers.png";
import blueprintsImage from "@/assets/blueprints.png";
import constructionFrame from "@/assets/construction-frame.png";

const featuredPosts = [
  {
    id: 1,
    title: "Enhancing Safety and Workmanship with ScrewFast Construction Services",
    excerpt: "Quality construction services for lasting results",
    author: "Brad",
    date: "Feb 10, 2024",
    image: workersImage,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    title: "Maximizing Efficiency with ScrewFast's Cutting-Edge Tools",
    excerpt: "Innovating Construction Efficiency with Precision Tools & Support",
    author: "Jacob",
    date: "Feb 6, 2024",
    image: blueprintsImage,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
];

const mainPost = {
  id: 3,
  title: "Affordable, durable tools for efficient construction projects",
  author: "Olga Zabegina",
  role: "Strategic Marketing Manager",
  image: constructionFrame,
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
};

const insights = [
  {
    id: 4,
    title: "The Future of Sustainable Construction Materials",
    excerpt: "Exploring eco-friendly alternatives in the construction industry",
    category: "Industry Trends",
    image: constructionFrame,
  },
  {
    id: 5,
    title: "Essential Power Tools Every Contractor Needs",
    excerpt: "A comprehensive guide to must-have tools for professionals",
    category: "Tools & Equipment",
    image: workersImage,
  },
  {
    id: 6,
    title: "Safety Protocols in Modern Construction Sites",
    excerpt: "Best practices for maintaining a safe work environment",
    category: "Safety",
    image: blueprintsImage,
  },
];

const Blog = () => {
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
              Your Gateway to Construction Excellence
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore the latest news, tips, and insights from ScrewFast to enhance your construction projects. From product spotlights to project management strategies, our blog is your go-to resource for all things hardware and construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-16 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{post.author}</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Feature */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={mainPost.image}
                alt={mainPost.title}
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {mainPost.title}
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={mainPost.avatar}
                  alt={mainPost.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{mainPost.author}</p>
                  <p className="text-sm text-muted-foreground">{mainPost.role}</p>
                </div>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Insights */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Insights</h2>
            <p className="text-muted-foreground">
              Stay up-to-date with the latest trends and developments in the construction industry with insights from ScrewFast's team of industry experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.article
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {insight.category}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-muted-foreground">{insight.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
