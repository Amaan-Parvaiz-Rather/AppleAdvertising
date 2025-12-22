import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "NeonCraft transformed our storefront completely. The custom neon sign attracts customers like never before.",
    author: "Sarah Mitchell",
    role: "Owner, Bloom Café",
    rating: 5,
  },
  {
    quote: "Professional, creative, and delivered on time. Our LED signage has become a landmark in the neighborhood.",
    author: "James Chen",
    role: "Marketing Director, TechHub",
    rating: 5,
  },
  {
    quote: "The team understood our vision perfectly. The illuminated hoarding has significantly boosted our brand visibility.",
    author: "Maria Rodriguez",
    role: "CEO, Urban Spaces",
    rating: 5,
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Trusted by <span className="gradient-text-neon">Brands</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our clients say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-12 opacity-50"
        >
          {['Brand One', 'Brand Two', 'Brand Three', 'Brand Four', 'Brand Five'].map((brand) => (
            <div key={brand} className="text-xl font-bold text-muted-foreground">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
