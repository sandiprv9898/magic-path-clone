import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Zap, Calendar, MapPin } from "lucide-react";
import customerImage from "@/assets/customer-1.jpg";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Homeowner",
      location: "Delhi",
      image: customerImage,
      systemSize: "5 kW",
      monthlySavings: "₹8,500",
      installedDate: "March 2022",
      rating: 5,
      testimonial: "SolarTech India transformed our home with seamless installation. Our electricity bills dropped by 85% and the system has been flawless for 2 years! The team was professional and the monitoring app is fantastic.",
      verified: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Business Owner", 
      location: "Mumbai",
      image: customerImage,
      systemSize: "25 kW",
      monthlySavings: "₹35,000",
      installedDate: "June 2023",
      rating: 5,
      testimonial: "Outstanding service from consultation to commissioning. Our office complex now runs primarily on solar power. The ROI has exceeded expectations and the team continues to provide excellent support.",
      verified: true
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Factory Owner",
      location: "Ahmedabad", 
      image: customerImage,
      systemSize: "100 kW",
      monthlySavings: "₹1,20,000",
      installedDate: "September 2023",
      rating: 5,
      testimonial: "Best decision for our manufacturing unit. Professional installation, premium quality components, and incredible savings. SolarTech delivered exactly what they promised and more.",
      verified: true
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">
            Customer Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="font-semibold">What Our Customers</span> Say About Us
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            Real experiences from satisfied customers who have transformed their energy consumption and reduced costs with our solar solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 border-0 bg-card hover:shadow-card transition-all duration-300">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-muted-foreground/30 absolute -top-2 -left-2" />
                  <blockquote className="text-foreground leading-relaxed pl-6">
                    "{testimonial.testimonial}"
                  </blockquote>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* System Details */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.systemSize}</p>
                    <p className="text-xs text-muted-foreground">System Size</p>
                  </div>
                  <div>
                    <p className="font-semibold text-success text-sm">{testimonial.monthlySavings}</p>
                    <p className="text-xs text-muted-foreground">Monthly Savings</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.installedDate}</p>
                    <p className="text-xs text-muted-foreground">Installed</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Customer Impact Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Customer Impact & Satisfaction</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">₹5.2Cr+</div>
              <div className="text-sm text-muted-foreground">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Avg. Bill Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};