import { Target, Users, TrendingUp, Eye } from "lucide-react";

export const AboutSection = () => {
  const handleViewCV = () => {
    window.open('/cv/sinthujan-siveswaran-cv.pdf', '_blank');
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Building Digital Solutions with Purpose
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a dedicated third-year IT & Management undergraduate at the University of Moratuwa, 
              where I'm pursuing my B.Sc. (Hons) degree. My journey in technology is driven by a 
              genuine curiosity for how digital solutions can transform ideas into impactful realities.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond just writing code, I focus on understanding the real-world problems behind 
              every project. I believe in creating technology that not only functions flawlessly 
              but also delivers meaningful value to users and businesses alike.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <button
                onClick={handleViewCV}
                className="inline-flex items-center px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-semibold"
              >
                <Eye className="mr-2 h-4 w-4" />
                View CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem-Solver Mindset</h4>
                  <p className="text-muted-foreground">
                    I approach challenges with analytical thinking and creative solutions, 
                    focusing on sustainable outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaborative Approach</h4>
                  <p className="text-muted-foreground">
                    I thrive in team environments where diverse perspectives come together 
                    to create exceptional results.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Growth-Oriented</h4>
                  <p className="text-muted-foreground">
                    Continuously expanding my skills and knowledge to stay at the forefront 
                    of technology innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};