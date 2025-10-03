import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo Side - Adjusted for better proportions */}
        <div className="order-2 md:order-1">
          <div className="relative flex justify-center">
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
              <img
                src="/profile.jpg"
                alt="Sinthujan Siveswaran - Full Stack Developer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Text Side */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm </span>
              <span className="text-violet-600 opacity-0 animate-fade-in-delay-1">Sinthujan</span>
            </h1>

            <p className="text-base md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-2 leading-relaxed">
              Aspiring Software Engineer Intern. 
              Creating full-stack solutions with modern web technologies.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-3">
              <a 
                href="#projects" 
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};