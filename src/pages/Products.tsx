import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { Instagram, Twitter, Facebook, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    category: 'Neon Signs',
    items: [
      {
        title: 'Custom Text Neon',
        description: 'Personalized neon signs with your text, logo, or message in vibrant colors.',
        color: 'neon-pink',
        Image: {
          image1: '/image/Custom Text Neon 1.jpg',
          image2: '/image/Custom Text Neon 2.jpg',
          image3: '/image/Custom Text Neon 3.jpg',
          image4: '/image/Custom Text Neon 4.jpg',
        }
      },
      {
        title: 'Logo Neon Signs',
        description: 'Transform your brand logo into a stunning illuminated piece.',
        color: 'neon-purple',
        Image: {
          image1: '/image/Logo Neon Signs 1.jpg',
          image2: '/image/Logo Neon Signs.jpg',
          image3: '/image/Logo Neon Signs 3.jpg',
          image4: '/image/Logo Neon Signs 4.jpg',
        }
      },
      {
        title: 'Decorative Neon Art',
        description: 'Artistic neon installations for unique interior statements.',
        color: 'neon-cyan',
        Image: {
          image1: '/image/Decorative Neon Art 1.jpg',
          image2: '/image/Decorative Neon Art 2.jpg',
          image3: '/image/Decorative Neon Art 3.jpg',
          image4: '/image/Decorative Neon Art 4.jpg',
        }
      },
      {
        title: 'Wedding Neon Signs',
        description: 'Create memorable moments with custom wedding and event signage.',
        color: 'neon-pink',
        Image: {
          image1: '/image/Wedding Neon Signs 1.jpg',
          image2: '/image/Wedding Neon Signs 2.jpg',
          image3: '/image/Wedding Neon Signs 3.jpg',
          image4: '/image/Wedding Neon Signs 4.jpg',
        }
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
        Image: {
          image1: '/image/Channel Letters 2.jpg',
          image2: '/image/Channel Letters 1.jpg',
          image3: '/image/Channel Letters 3.jpg',
          image4: '/image/Channel Letters 4.jpg',
        }
      },
      {
        title: 'Light Boxes',
        description: 'Backlit displays for maximum visibility day and night.',
        color: 'neon-cyan',
        Image: {
          image1: '/image/Light Boxes 1.jpg',
          image2: '/image/Light Boxes 2.jpg',
          image3: '/image/Light Boxes 3.jpg',
          image4: '/image/Light Boxes 4.jpg',
        }
      },
      {
        title: 'Pylon Signs',
        description: 'Tall freestanding signs for roadside visibility.',
        color: 'neon-purple',
        Image: {
          image1: '/image/Pylon Signs 4.jpg',
          image2: '/image/Pylon Signs 2.jpg',
          image3: '/image/Pylon Signs 3.jpg',
          image4: '/image/Pylon Signs 1.jpg',
        }
      },
      {
        title: 'Digital Displays',
        description: 'Dynamic LED screens for changing content and promotions.',
        color: 'neon-blue',
        Image: {
          image1: '/image/Digital Displays 4.jpg',
          image2: '/image/Digital Displays 2.jpg',
          image3: '/image/Digital Displays 3.jpg',
          image4: '/image/Digital Displays 1.jpg',
        }
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
        Image: {
            image1: '/image/Illuminated Hoardings 2.jpg',
            image2: '/image/Illuminated Hoardings 1.jpg',
            image3: '/image/Illuminated Hoardings 3.jpg',
            image4: '/image/Illuminated Hoardings 4.jpg',
        }
      },
      {
        title: 'Building Wraps',
        description: 'Full building facade signage for maximum brand impact.',
        color: 'neon-cyan',
        Image: {
            image1: '/image/Building Wraps 1.jpg',
            image2: '/image/Building Wraps 2.jpg',
            image3: '/image/Building Wraps 3.jpg',
            image4: '/image/Building Wraps 4.jpg',
        }
      },
      {
        title: 'Billboard Signage',
        description: 'Traditional and digital billboard solutions.',
        color: 'neon-pink',
        Image: {
            image1: '/image/Billboard Signage 4.jpg',
            image2: '/image/Billboard Signage 1.jpg',
            image3: '/image/Billboard Signage 3.jpg',
            image4: '/image/Billboard Signage 2.jpg',
        }
      },
      {
        title: 'Rooftop Signs',
        description: 'Illuminated rooftop signage visible across the city.',
        color: 'neon-blue',
        Image: {
            image1: '/image/Rooftop Signs 1.jpg',
            image2: '/image/Rooftop Signs 2.jpg',
            image3: '/image/Rooftop Signs 3.jpg',
            image4: '/image/Rooftop Signs 4.jpg',
        }
      },
    ],
  },
];


const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/apple._.advertising?igsh=MXZ6d3dqYTljMHRoag==",
      label: "Instagram",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "mailto:appleadvertising.fbd@gmail.com", label: "Email" },
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

interface Product {
  title: string;
  description: string;
  color: string;
  Image: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  };
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState('');

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    if (product && product.Image) {
      setActiveImage(product.Image.image1);
    }
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setActiveImage('');
  };

  const handleThumbnailClick = (imageSrc: string) => {
    setActiveImage(imageSrc);
  };

  return (
    <>
      <Helmet>
        <title>Products | Apple Advertising - Custom Neon Signs & LED Signage</title>
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
                Our <span className="gradient-text-neon">Creations</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                From intimate neon art to large-scale commercial signage, 
                we craft illuminated solutions that make brands unforgettable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        {products.map((section) => (
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
                    layoutId={`product-${item.title}`}
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => handleProductClick(item)}
                    className={`group glass-card hover:border-primary/30 cursor-pointer ${glowMap[item.color]}`}
                  >
                    {item.Image && (
                      <div className="w-full h-48 overflow-hidden">
                        <img src={item.Image.image1} alt={item.title} className="object-cover w-full h-full" />
                      </div>
                    )}
                    <div className="p-4">
                      <div className={`w-full h-2 rounded-full bg-gradient-to-r ${colorMap[item.color]} mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      
      <Footer />

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div
              layoutId={`product-${selectedProduct.title}`}
              className="w-full max-w-[95vw] lg:w-[1024px] h-auto max-h-[95vh] lg:h-[700px] overflow-y-auto lg:overflow-hidden glass-card relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
                <Button variant="ghost" size="icon" onClick={handleClose} className="absolute top-5 left-5 rounded-full hover:bg-primary/10 z-20">
                    <X size={20} />
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    {/* Left Side: Gallery */}
                    <div className="p-6 h-full flex flex-col">
                        <div className="w-full flex-grow overflow-hidden mb-4 min-h-0 relative aspect-square">
                            <img src={activeImage} alt={selectedProduct.title} className="absolute inset-0 w-full h-full object-contain"/>
                        </div>
                        <div className="flex space-x-2 h-16 items-center overflow-x-auto">
                            {Object.values(selectedProduct.Image).map((img: string, i) => (
                            <div 
                                key={i} 
                                className={`w-16 h-16 overflow-hidden cursor-pointer border-2 flex-shrink-0 ${activeImage === img ? 'border-primary' : 'border-transparent'}`} 
                                onClick={() => handleThumbnailClick(img)}
                            >
                                <img src={img} alt={`${selectedProduct.title} thumbnail ${i+1}`} className="object-cover w-full h-full" />
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Details */}
                    <div className="p-6 flex flex-col">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-2 flex-wrap">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                            <Link to="/contact">
                                <Button className={`bg-gradient-to-r ${colorMap[selectedProduct.color]} text-white px-4 py-2 rounded-lg`}>
                                    Reach Out
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-8 lg:mt-[42vh]">
                            <h2 className="text-3xl font-bold text-foreground mb-3">{selectedProduct.title}</h2>
                            <div className={`w-full h-1.5 rounded-full bg-gradient-to-r ${colorMap[selectedProduct.color]} mb-6 opacity-80`} />
                            <p className="text-muted-foreground text-base leading-relaxed">
                                {selectedProduct.description}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Products;  