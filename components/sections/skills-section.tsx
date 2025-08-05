import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Database, Settings, Zap, Rocket } from "lucide-react"
import React from "react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    icon: Code2,
    gradient: "from-primary to-secondary",
    shadow: "shadow-glow",
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "Material UI", "Shadcn UI", "Bootstrap", "Responsive Design"],
    icon: Palette,
    gradient: "from-secondary to-accent",
    shadow: "shadow-glow-cyan",
  },
  {
    title: "State & Data Management",
    skills: ["Redux Toolkit", "Zustand", "React Context", "TanStack Query", "REST APIs", "Axios"],
    icon: Database,
    gradient: "from-accent to-highlight",
    shadow: "shadow-glow-purple",
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "Vite", "Webpack", "ESLint", "Prettier", "Agile/Scrum", "Performance Optimization"],
    icon: Settings,
    gradient: "from-highlight to-warning",
    shadow: "shadow-glow-highlight",
  },
]

export const SkillsSection = React.memo(function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-highlight/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full mb-8 animate-fade-in backdrop-blur-sm border border-secondary/30">
            <Zap className="mr-2 h-5 w-5 text-secondary" />
            <span className="text-lg font-bold text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
              Skills & Technologies
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-gradient-rainbow animate-slide-up glow-text">
            My Expertise
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Cutting-edge technologies and tools I use to create{" "}
            <span className="text-primary font-bold">exceptional</span> digital experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className={`group hover:${category.shadow} transition-all duration-500 hover:scale-110 hover:-translate-y-4 bg-card border-2 border-transparent hover:border-primary/30 animate-fade-in overflow-hidden relative`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-8">
                    <div
                      className={`p-5 bg-gradient-to-br ${category.gradient} rounded-3xl w-fit mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ${category.shadow}`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text group-hover:scale-105 transition-transform duration-300">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:text-primary transition-all duration-300 cursor-default hover:scale-110 text-sm py-1 px-3 animate-fade-in border border-primary/20"
                        style={{ animationDelay: `${index * 150 + skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-20 lg:mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-full mb-8 animate-fade-in backdrop-blur-sm border border-accent/30">
              <Rocket className="mr-2 h-5 w-5 text-accent" />
              <span className="text-lg font-bold text-transparent bg-gradient-to-r from-accent to-highlight bg-clip-text">
                Proficiency Levels
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { skill: "React.js", level: 95, gradient: "from-primary to-secondary", shadow: "shadow-glow" },
              { skill: "Next.js", level: 90, gradient: "from-secondary to-accent", shadow: "shadow-glow-cyan" },
              { skill: "TypeScript", level: 85, gradient: "from-accent to-highlight", shadow: "shadow-glow-purple" },
              {
                skill: "Tailwind CSS",
                level: 92,
                gradient: "from-highlight to-warning",
                shadow: "shadow-glow-highlight",
              },
              { skill: "State Management", level: 88, gradient: "from-warning to-primary", shadow: "shadow-glow" },
              { skill: "API Integration", level: 90, gradient: "from-primary to-accent", shadow: "shadow-glow-cyan" },
            ].map((item, index) => (
              <div
                key={item.skill}
                className="animate-slide-up group"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                    {item.skill}
                  </span>
                  <span className="text-lg font-bold text-accent">{item.level}%</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden relative">
                  <div
                    className={`h-full bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-1500 ease-out relative ${item.shadow} group-hover:animate-pulse`}
                    style={{
                      width: `${item.level}%`,
                      animationDelay: `${800 + index * 100}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})
