import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail, Target } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Custom Neon Signs", href: "/products" },
    { label: "LED Displays", href: "/products" },
    { label: "Hoarding Boards", href: "/products" },
    { label: "Business Signage", href: "/products" },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/apple._.advertising?igsh=MXZ6d3dqYTljMHRoag==",
    label: "Instagram",
    Target: "_blank",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Mail, href: "mailto:hello@neoncraft.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-end">
              <img src="/image/transparernt logo.png" alt="apple advertisement logo" className="h-12 w-auto mr-3" />
              <span className="text-2xl font-bold gradient-text-neon">
                Apple Advertising
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Crafting premium illuminated signage that transforms businesses
              into unforgettable brands. Every light tells a story.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Apple Advertising. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
