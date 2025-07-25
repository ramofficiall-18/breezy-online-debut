import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 }
  ];

  const tools = [
    "Git", "VS Code", "Figma", "Docker", "AWS", "Vercel",
    "Firebase", "Supabase", "Prisma", "MongoDB", "PostgreSQL", "GraphQL"
  ];

  const softSkills = [
    "Problem Solving", "Team Collaboration", "Project Management",
    "UI/UX Design", "Agile Development", "Code Review"
  ];

  return (
    <section className="py-20 px-6 bg-card/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies 
            to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <h3 className="text-2xl font-bold mb-8">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={skill}
                  variant="outline"
                  className="px-3 py-1 border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors hover-scale"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-primary/30"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="card-gradient rounded-lg p-6 flex-1 border border-border/20">
                    <h4 className="text-lg font-semibold mb-2">Senior Frontend Developer</h4>
                    <p className="text-primary mb-2">Tech Company • 2022 - Present</p>
                    <p className="text-muted-foreground text-sm">
                      Leading frontend development for enterprise applications using React, TypeScript, and modern tooling.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="card-gradient rounded-lg p-6 flex-1 border border-border/20">
                    <h4 className="text-lg font-semibold mb-2">Full Stack Developer</h4>
                    <p className="text-primary mb-2">Digital Agency • 2020 - 2022</p>
                    <p className="text-muted-foreground text-sm">
                      Developed and maintained web applications for various clients using MERN stack and modern frameworks.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="card-gradient rounded-lg p-6 flex-1 border border-border/20">
                    <h4 className="text-lg font-semibold mb-2">Frontend Developer</h4>
                    <p className="text-primary mb-2">Startup • 2019 - 2020</p>
                    <p className="text-muted-foreground text-sm">
                      Built responsive web applications and collaborated with design teams to create exceptional user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;