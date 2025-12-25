import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6">
            <Zap size={16} className="text-accent" />
            <span className="text-sm text-accent font-medium">Ready to stand out?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Let's Create Something
            <br />
            <span className="gradient-text-neon">Extraordinary</span>
          </h2>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Transform your brand presence with custom illuminated signage. 
            Get a free consultation and quote today.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group shadow-xl">
                Reach Out to Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="xl" className="shadow-lg">
                Explore Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
