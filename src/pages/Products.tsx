import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';

const products = [
  {
    category: 'Neon Signs',
    items: [
      {
        title: 'Custom Text Neon',
        description: 'Personalized neon signs with your text, logo, or message in vibrant colors.',
        color: 'neon-pink',
      },
      {
        title: 'Logo Neon Signs',
        description: 'Transform your brand logo into a stunning illuminated piece.',
        color: 'neon-purple',
      },
      {
        title: 'Decorative Neon Art',
        description: 'Artistic neon installations for unique interior statements.',
        color: 'neon-cyan',
      },
      {
        title: 'Wedding Neon Signs',
        description: 'Create memorable moments with custom wedding and event signage.',
        color: 'neon-pink',
      },
    ],
  },
  {
    category: 'LED Signage',
    items: [
      {
        title: 'Channel Letters',
        description: '3D illuminated letters perfect for storefronts and corporate branding.',
        color: 'neon-blue',
      },
      {
        title: 'Light Boxes',
        description: 'Backlit displays for maximum visibility day and night.',
        color: 'neon-cyan',
      },
      {
        title: 'Pylon Signs',
        description: 'Tall freestanding signs for roadside visibility.',
        color: 'neon-purple',
      },
      {
        title: 'Digital Displays',
        description: 'Dynamic LED screens for changing content and promotions.',
        color: 'neon-blue',
      },
    ],
  },
  {
    category: 'Hoarding & Large Format',
    items: [
      {
        title: 'Illuminated Hoardings',
        description: 'Large-scale backlit boards for construction sites and advertising.',
        color: 'neon-purple',
      },
      {
        title: 'Building Wraps',
        description: 'Full building facade signage for maximum brand impact.',
        color: 'neon-cyan',
      },
      {
        title: 'Billboard Signage',
        description: 'Traditional and digital billboard solutions.',
        color: 'neon-pink',
      },
      {
        title: 'Rooftop Signs',
        description: 'Illuminated rooftop signage visible across the city.',
        color: 'neon-blue',
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  'neon-pink': 'from-[hsl(330,100%,65%)] to-[hsl(280,100%,70%)]',
  'neon-purple': 'from-[hsl(280,100%,70%)] to-[hsl(240,100%,70%)]',
  'neon-cyan': 'from-[hsl(180,100%,50%)] to-[hsl(200,100%,60%)]',
  'neon-blue': 'from-[hsl(200,100%,60%)] to-[hsl(220,100%,70%)]',
};

const glowMap: Record<string, string> = {
  'neon-pink': 'group-hover:shadow-[0_0_30px_hsl(330,100%,65%,0.4)]',
  'neon-purple': 'group-hover:shadow-[0_0_30px_hsl(280,100%,70%,0.4)]',
  'neon-cyan': 'group-hover:shadow-[0_0_30px_hsl(180,100%,50%,0.4)]',
  'neon-blue': 'group-hover:shadow-[0_0_30px_hsl(200,100%,60%,0.4)]',
};

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products | NeonCraft Studios - Custom Neon Signs & LED Signage</title>
        <meta 
          name="description" 
          content="Explore our range of custom neon signs, LED channel letters, illuminated hoarding boards, and large format signage solutions." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
                Our <span className="gradient-text-neon">Products</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                From intimate neon art to large-scale commercial signage, 
                we craft illuminated solutions that make brands unforgettable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        {products.map((section, sectionIndex) => (
          <section key={section.category} className="py-16">
            <div className="container-custom">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-bold text-foreground mb-8"
              >
                {section.category}
              </motion.h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group glass-card p-6 hover:border-primary/30 transition-all duration-500 ${glowMap[item.color]}`}
                  >
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${colorMap[item.color]} mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      
      <Footer />
    </>
  );
};

export default Products;
