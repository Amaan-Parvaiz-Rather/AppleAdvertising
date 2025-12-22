import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lightbulb, Heart, Award, Users } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of what illuminated signage can achieve, embracing new technologies and techniques.',
  },
  {
    icon: Heart,
    title: 'Craftsmanship',
    description: 'Every sign is handcrafted with meticulous attention to detail, ensuring premium quality in every piece.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards, delivering work that exceeds expectations every time.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work closely with our clients, treating every project as a collaborative journey to success.',
  },
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '12+', label: 'Years in Business' },
  { number: '50+', label: 'Team Members' },
  { number: '15', label: 'Cities Served' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | NeonCraft Studios - Our Story & Vision</title>
        <meta 
          name="description" 
          content="Learn about NeonCraft Studios, our passion for illuminated signage, and our commitment to crafting premium neon signs and LED displays." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
                About <span className="gradient-text-neon">NeonCraft</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                We're a team of designers, engineers, and craftsmen united by a single passion: 
                bringing brands to life through the art of light.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2012, NeonCraft Studios began as a small workshop with a big dream: 
                    to revolutionize how businesses communicate their brand through illuminated signage.
                  </p>
                  <p>
                    What started with a passion for the warm glow of traditional neon has evolved into 
                    a full-service signage studio, combining time-honored craftsmanship with cutting-edge 
                    LED technology.
                  </p>
                  <p>
                    Today, we're proud to have transformed the storefronts and brand identities of 
                    hundreds of businesses, from boutique cafes to Fortune 500 companies.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-8 lg:p-12"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To create illuminated signage that doesn't just display a name, but tells a story, 
                  captures attention, and transforms ordinary spaces into extraordinary brand experiences.
                </p>
                <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-foreground italic">
                    "Every light we craft is a promise to make your brand shine brighter than the rest."
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">— The NeonCraft Team</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card/30">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold gradient-text-neon">{stat.number}</div>
                  <div className="mt-2 text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Our <span className="gradient-text-neon">Values</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we create.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      
      <Footer />
    </>
  );
};

export default About;
