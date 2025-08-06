import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  CheckCircle
} from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Mon-Sat, 9 AM - 7 PM"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: ["info@solartech.in", "support@solartech.in"],
      description: "24/7 Response Time"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Solar Street, Green Park", "New Delhi - 110016"],
      description: "Main Office & Experience Center"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sun: 10:00 AM - 5:00 PM"],
      description: "Emergency Support Available"
    }
  ];

  const benefits = [
    "Free site assessment and consultation",
    "Custom solar system design",
    "Government subsidy assistance", 
    "25-year comprehensive warranty",
    "Professional installation team",
    "Post-installation monitoring"
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to switch to solar? Get your free consultation and quote today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 bg-card shadow-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Get Your Free Quote</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and our solar experts will get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name *" />
                  <Input placeholder="Phone Number *" />
                </div>
                <Input placeholder="Email Address *" />
                <Input placeholder="Property Location *" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Monthly Electricity Bill" />
                  <Input placeholder="Property Type" />
                </div>
                <Textarea 
                  placeholder="Tell us about your solar requirements..."
                  className="min-h-[100px]"
                />
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">What You'll Get:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Get Free Consultation →
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 border-0 bg-card">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-foreground">{detail}</p>
                        ))}
                        <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="p-6 border-0 bg-card">
              <h4 className="font-semibold text-foreground mb-4">Why Choose SolarTech?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24 hrs</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25 Year</div>
                  <div className="text-sm text-muted-foreground">Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center p-6 bg-solar-gradient rounded-lg">
              <MessageSquare className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Need Immediate Assistance?</h4>
              <p className="text-white/90 mb-4">Our solar experts are ready to help</p>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Call Now: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};