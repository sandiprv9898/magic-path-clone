import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-foreground">SolarTech</h1>
            <p className="text-xs text-muted-foreground">INDIA</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-primary hover:text-primary-hover transition-colors">
            Home
          </a>
          <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#reviews" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Reviews
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <Button variant="hero" size="lg" className="hidden md:inline-flex">
          Get Quote →
        </Button>
      </div>
    </header>
  );
};