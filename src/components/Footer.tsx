import { Sun, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const services = [
    "Residential Solar",
    "Commercial Solar", 
    "Industrial Solar",
    "Solar Maintenance",
    "Energy Storage",
    "Solar Financing"
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "News & Updates", 
    "Awards",
    "Partnerships"
  ];

  const support = [
    "Contact Us",
    "Support Center",
    "Installation Guide",
    "Warranty", 
    "FAQs",
    "Emergency Service"
  ];

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">SolarTech</h3>
                <p className="text-xs text-background/70">INDIA</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Leading India's solar revolution with cutting-edge technology and sustainable solutions for homes, businesses, and industries.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Solar Street, Green Park, New Delhi - 110016</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@solartech.in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-background/20 border-b border-background/20 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1000+</div>
            <div className="text-sm text-background/80">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">100MW+</div>
            <div className="text-sm text-background/80">Installed Capacity</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-background/80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">99%</div>
            <div className="text-sm text-background/80">Customer Satisfaction</div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/60">
            © 2024 SolarTech India. All rights reserved. • ISO 9001:2015 Certified
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-background/60">Follow us:</span>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="p-2 bg-background/10 rounded-full hover:bg-primary hover:text-foreground transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};