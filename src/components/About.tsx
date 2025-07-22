import { Code, Palette, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern patterns."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless functionality."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver projects on time and exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating digital experiences that combine 
            beautiful design with powerful functionality. With expertise in modern web technologies, 
            I bring ideas to life through clean code and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 card-gradient border-border/20 hover:border-primary/30 transition-all hover-scale group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my development journey with a curiosity for how websites work, 
                and quickly fell in love with the endless possibilities of web development.
              </p>
              <p>
                Over the years, I've worked with various technologies and frameworks, 
                always staying current with industry trends and best practices.
              </p>
              <p>
                Today, I specialize in React, TypeScript, and modern web technologies, 
                creating applications that are both beautiful and functional.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="card-gradient rounded-lg p-8 border border-border/20">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;