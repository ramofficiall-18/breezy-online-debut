import { Card } from "@/components/ui/card";
const About = () => {
  return <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hi, I'm Ramkumar.S, a passionate and detail-oriented Computer Science and Engineering graduate with a strong foundation in technical skills and a keen interest in front-end development and IT support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>I've been actively pursuing opportunities to enhance my skills and knowledge in the field of computer science.</p>
              <p>I complete my Bachelor's degree in Krishnasamy College of Engineering and Technology, Cuddalore At the year of 2024.</p>
              <p>My experience as a Junior Presentation Specialist at MyBusiness Visual Company has equipped me with effective communication and collaboration skills.</p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="card-gradient rounded-lg p-8 border border-border/20">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Months Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">7+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;