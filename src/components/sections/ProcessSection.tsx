import { motion } from 'framer-motion';
import { Pencil, Hammer, Truck, Check } from 'lucide-react';

const steps = [
  {
    icon: Pencil,
    title: 'Design',
    description: 'Share your vision and we create custom designs tailored to your brand.',
  },
  {
    icon: Hammer,
    title: 'Build',
    description: 'Expert craftsmen bring your design to life with premium materials.',
  },
  {
    icon: Truck,
    title: 'Deliver',
    description: 'Professional installation ensuring perfect placement and function.',
  },
  {
    icon: Check,
    title: 'Shine',
    description: 'Watch your brand illuminate and captivate your audience.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="gradient-text-neon">Process</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to installation, we handle everything with precision and care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon size={24} className="text-primary" />
                </div>
                <div className="text-sm text-primary font-mono mb-2">0{index + 1}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
