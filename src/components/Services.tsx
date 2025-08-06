import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Building2, 
  Factory, 
  Battery, 
  Settings, 
  TrendingUp, 
  CreditCard,
  Zap
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      subtitle: "For Homes & Apartments",
      description: "Custom solar solutions for homes, reducing electricity bills by up to 90% with premium quality panels and inverters.",
      features: [
        "Rooftop solar installations",
        "Net metering setup", 
        "Battery backup systems",
        "Smart monitoring"
      ],
      capacity: "1kW - 10kW",
      savings: "Up to 90%",
      warranty: "25 Years"
    },
    {
      icon: Building2,
      title: "Commercial Solar", 
      subtitle: "For Offices & Businesses",
      description: "Scalable solar systems for businesses, offices, and commercial complexes with guaranteed ROI and maintenance support.",
      features: [
        "Large-scale installations",
        "Grid-tie systems",
        "Energy management", 
        "Tax benefits"
      ],
      capacity: "10kW - 100kW",
      savings: "Up to 80%",
      warranty: "25 Years"
    },
    {
      icon: Factory,
      title: "Industrial Solar",
      subtitle: "For Manufacturing & Industries", 
      description: "Large-scale solar installations for industries and manufacturing units with advanced monitoring and grid integration.",
      features: [
        "Mega-watt installations",
        "Power purchase agreements",
        "Grid synchronization",
        "24/7 monitoring"
      ],
      capacity: "100kW - 10MW+",
      savings: "Up to 70%", 
      warranty: "25 Years"
    }
  ];

  const additionalServices = [
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Advanced battery solutions for backup power"
    },
    {
      icon: Settings,
      title: "Maintenance & Support", 
      description: "Comprehensive O&M services for optimal performance"
    },
    {
      icon: TrendingUp,
      title: "Energy Consulting",
      description: "Expert advice on energy efficiency and optimization"
    },
    {
      icon: CreditCard,
      title: "Solar Financing",
      description: "Flexible financing options and government subsidies"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="font-semibold">Comprehensive Solar Energy</span> Solutions for Every Need
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            From residential rooftops to large-scale industrial installations, we provide tailored solar solutions that maximize energy savings and environmental impact.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-card">
              <div className="space-y-6">
                <div className="space-y-3">
                  <service.icon className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="text-card-title font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                  <p className="text-foreground">{service.description}</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Zap className="h-3 w-3 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">{service.capacity}</p>
                    <p className="text-xs text-muted-foreground">Capacity</p>
                  </div>
                  <div>
                    <p className="font-semibold text-success">{service.savings}</p>
                    <p className="text-xs text-muted-foreground">Savings</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{service.warranty}</p>
                    <p className="text-xs text-muted-foreground">Warranty</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Additional Services</h3>
          <p className="text-muted-foreground text-center mb-8">
            Complete solar ecosystem solutions to maximize your investment and ensure long-term performance.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 border-0 bg-card">
                <service.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="space-y-4 mb-6">
            <h3 className="text-2xl font-bold text-foreground">Ready to Go Solar?</h3>
            <p className="text-muted-foreground">
              Get a personalized solar solution designed specifically for your energy needs and budget.
            </p>
          </div>
          <Button variant="hero" size="xl">
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};