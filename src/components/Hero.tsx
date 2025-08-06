import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, ShieldCheck, Play } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-hero-gradient pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
              <Check className="h-4 w-4" />
              India's Leading Solar Company
            </div>
            
            <div className="space-y-4">
              <h1 className="text-hero font-bold leading-tight text-foreground">
                Power Your Future with{" "}
                <span className="bg-solar-gradient bg-clip-text text-transparent">
                  Solar Energy
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Leading India's solar revolution with cutting-edge technology and sustainable solutions for homes, businesses, and industries.
              </p>
            </div>
            
            <div className="space-y-3">
              {[
                "Reduce electricity bills by up to 90%",
                "25-year performance warranty", 
                "Government subsidies available",
                "Professional installation & maintenance"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-success flex items-center justify-center">
                    <Check className="h-3 w-3 text-success-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Start Your Solar Journey
              </Button>
              <Button variant="outline-hero" size="xl" className="gap-3">
                <Play className="h-5 w-5" />
                View Our Projects
              </Button>
            </div>
          </div>
          
          {/* Right Content - Hero Image with Floating Cards */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Solar Panel Installation"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Cards */}
              <Card className="absolute top-6 right-6 p-4 bg-card/95 backdrop-blur-sm border-0 shadow-card">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">25 Year</p>
                    <p className="text-xs text-muted-foreground">Warranty</p>
                  </div>
                </div>
              </Card>
              
              <Card className="absolute bottom-6 left-6 p-4 bg-card/95 backdrop-blur-sm border-0 shadow-card">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-semibold text-sm">Clean Energy</p>
                    <p className="text-xs text-muted-foreground">Zero Emissions</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "1000+", label: "Happy Customers", color: "text-primary" },
            { number: "100MW+", label: "Installed Capacity", color: "text-primary" },
            { number: "10+", label: "Years Experience", color: "text-primary" },
            { number: "99%", label: "Customer Satisfaction", color: "text-primary" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};