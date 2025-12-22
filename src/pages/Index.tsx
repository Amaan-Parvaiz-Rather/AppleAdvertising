import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductsShowcase from '@/components/sections/ProductsShowcase';
import ProcessSection from '@/components/sections/ProcessSection';
import TrustSection from '@/components/sections/TrustSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  console.log("Index page rendering");
  return (
    <>
      <Helmet>
        <title>NeonCraft Studios | Custom Neon Signs & Illuminated Signage</title>
        <meta 
          name="description" 
          content="Transform your brand with premium custom neon signs and illuminated hoarding boards. Expert design, build, and installation services for businesses." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProductsShowcase />
        <ProcessSection />
        <TrustSection />
        <CTASection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
