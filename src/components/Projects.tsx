import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with React, Node.js, and Stripe integration. Features include user authentication, product management, and payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
      technologies: ["Next.js", "API Integration", "Charts.js", "Geolocation"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization, reporting features, and performance insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A creative portfolio website with animations, responsive design, and content management system integration.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "CMS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and payment features.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "JWT", "Security"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web development, 
            from simple websites to complex web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden border-border/20 hover:border-primary/30 transition-all duration-300 hover-scale bg-card/50 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;