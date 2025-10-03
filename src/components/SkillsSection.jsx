import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Python", level: 85, category: "programming" },
  { name: "Java", level: 80, category: "programming" },
  { name: "JavaScript", level: 85, category: "programming" },
  { name: "C", level: 75, category: "programming" },
  { name: "PHP", level: 70, category: "programming" },

  // Frameworks & Libraries
  { name: "React", level: 85, category: "frameworks" },
  { name: "Next.js", level: 75, category: "frameworks" },
  { name: "Node.js", level: 80, category: "frameworks" },
  { name: "Ballerina", level: 70, category: "frameworks" },
  { name: "Flask", level: 75, category: "frameworks" },
  { name: "Laravel", level: 65, category: "frameworks" },

  // Databases
  { name: "MongoDB", level: 80, category: "databases" },
  { name: "MySQL", level: 75, category: "databases" },
  { name: "MS SQL", level: 70, category: "databases" },

  // Dev Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "REST APIs", level: 85, category: "tools" },
  { name: "Jupyter Notebook", level: 80, category: "tools" },
];

const categories = ["all", "programming", "frameworks", "databases", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Technical Skills Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};