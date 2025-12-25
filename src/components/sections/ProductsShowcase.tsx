import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Neon lights",
    description:
      "Handcrafted neon lights that bring your vision to life with vibrant colors.",
    gradient: "from-[hsl(330,100%,60%)] to-[hsl(280,100%,60%)]",
    Image: "/image/white neon led strip.jpg",
  },
  {
    title: "LED Channel Letters",
    description:
      "Professional 3D illuminated letters perfect for storefronts and corporate branding.",
    gradient: "from-[hsl(180,100%,45%)] to-[hsl(200,100%,50%)]",
    Image: "/image/neon design.jpg",
  },
  {
    title: "Hoarding Boards",
    description:
      "Large-scale illuminated displays that command attention and maximize brand visibility.",
    gradient: "from-[hsl(280,100%,60%)] to-[hsl(180,100%,45%)]",
    Image: "/image/neon hoarding.jpg",
  },
];

export default function ProductsShowcase() {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            What We <span className="gradient-text-neon">Create</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From intimate neon art to large-scale commercial signage, we bring
            light to every vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to="/products"
                className="group block relative h-[400px] rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={product.Image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent`}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="mt-2 text-white/80 text-sm">
                        {product.description}
                      </p>
                    </div>
                    <div className="p-2 rounded-full bg-white/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowUpRight
                        size={20}
                        className="group-hover:rotate-45 transition-transform duration-300 text-white"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
