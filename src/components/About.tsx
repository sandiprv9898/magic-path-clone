import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Award, 
  Users, 
  CheckCircle,
  Lightbulb,
  Heart,
  Leaf,
  Star
} from "lucide-react";
import industrialImage from "@/assets/industrial-solar.jpg";

export const About = () => {
  const stats = [
    { number: "50+", label: "Engineering Excellence", sublabel: "Certified engineers and technicians" },
    { number: "25+", label: "Project Management", sublabel: "Experienced project managers" },
    { number: "24/7", label: "Customer Support", sublabel: "Round-the-clock customer service" }
  ];

  const achievements = [
    { number: "98%", label: "Customer Satisfaction" },
    { number: "1000+", label: "Happy Customers", sublabel: "Satisfied clients across India" },
    { number: "100MW+", label: "Installed Capacity", sublabel: "Clean energy generated" },
    { number: "10+", label: "Years Experience", sublabel: "Industry expertise" },
    { number: "50+", label: "Awards Won", sublabel: "Industry recognition" }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solar technology and smart energy solutions for maximum efficiency."
    },
    {
      icon: Star,
      title: "Quality", 
      description: "Premium components with rigorous testing and 25-year performance warranties."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Dedicated support from consultation to installation and beyond."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to reducing carbon footprint and promoting clean energy adoption."
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with a vision to make solar energy accessible to every Indian household."
    },
    {
      year: "2017", 
      title: "First 10MW Milestone",
      description: "Achieved our first major capacity milestone with installations across 5 states."
    },
    {
      year: "2020",
      title: "Industry Recognition", 
      description: "Awarded \"Best Solar Company\" by Indian Renewable Energy Association."
    },
    {
      year: "2024",
      title: "100MW+ Installed",
      description: "Crossed 100MW installed capacity, powering thousands of homes and businesses."
    }
  ];

  const certifications = [
    "ISO 9001:2015 certified quality management",
    "Authorized dealer for top global solar brands", 
    "Government-approved solar installer",
    "Award-winning customer service excellence"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">
            About SolarTech India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="font-semibold">Leading India's</span> Solar Revolution
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            With over a decade of experience in renewable energy, we've been at the forefront of India's solar transformation, helping thousands of customers reduce their carbon footprint and energy costs.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Pioneering Sustainable Energy Solutions Since 2014
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              SolarTech India was founded with a simple yet powerful vision: to make clean, renewable energy accessible to every home and business across India. What started as a small team of passionate engineers has grown into one of the country's most trusted solar companies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to excellence, innovation, and customer satisfaction has enabled us to install over 100MW of solar capacity, helping thousands of customers achieve energy independence while contributing to a cleaner, greener future.
            </p>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={industrialImage} 
              alt="Solar technicians installing panels"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-0 bg-card hover:shadow-card transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="font-semibold text-foreground text-sm mb-1">{achievement.label}</div>
                {achievement.sublabel && (
                  <div className="text-xs text-muted-foreground">{achievement.sublabel}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-2">Our Core Values</h3>
          <p className="text-muted-foreground text-center mb-8">
            The principles that guide everything we do and drive our commitment to excellence.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center border-0 bg-card hover:shadow-card transition-all duration-300">
                <value.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-2">Our Journey</h3>
          <p className="text-muted-foreground text-center mb-8">
            Key milestones that have shaped our growth and success in the solar industry.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((milestone, index) => (
              <Card key={index} className="p-6 border-0 bg-card hover:shadow-card transition-all duration-300">
                <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {milestone.year}
                </Badge>
                <h4 className="font-semibold text-foreground mb-2">{milestone.title}</h4>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};