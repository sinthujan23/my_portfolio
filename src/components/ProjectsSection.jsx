import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ScholarShare – Collaborative Research-Sharing Platform",
    description: "Developed user dashboard with research paper viewing, download functionality, and wishlist features with review and rating system.",
    image: "/projects/scholarshare.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "OAuth"],
    demoUrl: "https://scholarshare.vercel.app",
    githubUrl: "https://github.com/lisorthman/Scholarshare21",
  },
  {
    id: 2,
    title: "MindCue – Weather & Location-Based Activity & Music Recommendations",
    description: "Implemented real-time weather and mood-based recommendations with AI-generated suggestions using multiple APIs.",
    image: "/projects/mindcue.png",
    tags: ["Ballerina", "React.js", "Weather API", "Spotify API", "Gemini AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/lisorthman/iwb25-299-technovate",
  },
  {
    id: 3,
    title: "Student Management System – Laravel Web App",
    description: "Full-featured student management system with CRUD operations, secure authentication, and role-based access control.",
    image: "/projects/student-management.png",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/sinthujan23/student-management-system",
  },
  {
    id: 4,
    title: "LocalHands – Mobile Platform for Local Service Providers",
    description: "Developing mobile app to connect customers with verified local service providers with AI-driven matching and real-time features.",
    image: "/projects/localhands.png",
    tags: ["Flutter", "Node.js", "PostgreSQL", "Firebase", "Google Maps API"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Ongoing"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my full-stack development skills 
          and passion for creating impactful software solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-border/50"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.status && (
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium border border-primary/20 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sinthujan23"
          >
            View More on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};