import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`,
      filter: 'brightness(0.3)'
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl mb-6 mt-8 gradient-text text-shadow font-extrabold text-slate-950 text-center md:text-7xl mx-0 py-0 my-[50px]">Hello, I'm Ramkumar  Frontend Developer</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            This is my portfolio site to utilize my skills and also I make contribution to the success of the company.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hero-gradient hover:scale-105 transition-transform glow-effect px-8 py-3 text-lg font-semibold" onClick={scrollToAbout}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-3 text-lg">
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/ram9360" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-all hover-scale" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ramkumars1218/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-all hover-scale" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ramkumarjob.in@gmail.com" className="p-3 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-all hover-scale" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>;
};
export default Hero;