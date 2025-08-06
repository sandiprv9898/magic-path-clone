import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Zap } from "lucide-react";
import commercialImage from "@/assets/commercial-solar.jpg";
import industrialImage from "@/assets/industrial-solar.jpg";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mumbai Corporate Complex",
      description: "Large-scale rooftop installation for a major corporate complex with advanced monitoring systems.",
      image: commercialImage,
      type: "commercial",
      year: "2024",
      capacity: "500 kW",
      location: "Mumbai, Maharashtra",
      savings: "₹2.5 Cr/year",
      duration: "45 days",
      features: ["Grid-tie system", "Remote monitoring", "25-year warranty"]
    },
    {
      id: 2,
      title: "Delhi Residential Society", 
      description: "Community solar project serving 150 residential units with net metering facility.",
      image: commercialImage,
      type: "residential",
      year: "2024", 
      capacity: "200 kW",
      location: "New Delhi",
      savings: "₹80 L/year",
      duration: "30 days",
      features: ["Net metering", "Community solar", "Battery backup"]
    },
    {
      id: 3,
      title: "Bangalore Tech Park",
      description: "Mega-scale installation for IT park with battery backup and smart grid integration.",
      image: commercialImage,
      type: "commercial",
      year: "2023",
      capacity: "1 MW", 
      location: "Bangalore, Karnataka",
      savings: "₹4.2 Cr/year",
      duration: "60 days",
      features: ["Smart grid integration", "Battery backup", "Energy management"]
    },
    {
      id: 4,
      title: "Gujarat Industrial Plant",
      description: "Industrial-scale solar farm with advanced power management and grid synchronization.",
      image: industrialImage,
      type: "industrial", 
      year: "2023",
      capacity: "2.5 MW",
      location: "Ahmedabad, Gujarat", 
      savings: "₹8.5 Cr/year",
      duration: "90 days",
      features: ["Grid synchronization", "Power management", "24/7 monitoring"]
    },
    {
      id: 5,
      title: "Chennai Residential Complex",
      description: "High-rise residential complex with innovative panel mounting and energy storage.",
      image: commercialImage,
      type: "residential",
      year: "2023",
      capacity: "300 kW",
      location: "Chennai, Tamil Nadu",
      savings: "₹1.2 Cr/year", 
      duration: "40 days",
      features: ["Innovative mounting", "Energy storage", "High-rise installation"]
    },
    {
      id: 6,
      title: "Pune Manufacturing Unit",
      description: "Manufacturing facility with ground-mounted solar farm and power purchase agreement.",
      image: industrialImage,
      type: "industrial",
      year: "2022",
      capacity: "1.5 MW",
      location: "Pune, Maharashtra",
      savings: "₹6.8 Cr/year",
      duration: "75 days", 
      features: ["Ground-mounted", "Power purchase agreement", "Manufacturing integration"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'residential': return 'bg-success/10 text-success';
      case 'commercial': return 'bg-primary/10 text-primary'; 
      case 'industrial': return 'bg-accent/30 text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="font-semibold">Powering India's</span> Solar Future
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            Showcasing our expertise through successful solar installations across India, from residential societies to industrial complexes.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="sm">All Projects</Button>
          <Button variant="ghost" size="sm">Residential</Button>
          <Button variant="ghost" size="sm">Commercial</Button>
          <Button variant="ghost" size="sm">Industrial</Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-card transition-all duration-300 border-0 bg-card">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getTypeColor(project.type)}>
                    {project.type}
                  </Badge>
                  <Badge variant="outline" className="bg-card/90 backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-card-title font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">{project.capacity}</p>
                    <p className="text-muted-foreground">Capacity</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{project.duration}</p>
                    <p className="text-muted-foreground">Duration</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
                
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-success" />
                  <span className="font-semibold text-success">Annual Savings</span>
                  <span className="font-bold text-foreground">{project.savings}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="space-y-4 mb-6">
            <h3 className="text-2xl font-bold text-foreground">Ready to Join Our Success Stories?</h3>
            <p className="text-muted-foreground">
              Let us design a custom solar solution for your property and start saving on energy costs today.
            </p>
          </div>
          <Button variant="hero" size="xl">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};