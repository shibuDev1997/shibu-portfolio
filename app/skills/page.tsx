import { MainLayout } from "@/components/main-layout"
import { TabBar } from "@/components/tab-bar"

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: "🎨",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
    ],
  },
  {
    title: "UI Frameworks & Libraries",
    icon: "🎯",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "Shadcn UI", level: 90 },
      { name: "Hero UI", level: 75 },
    ],
  },
  {
    title: "Development Tools",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "GitLab", level: 85 },
      { name: "Vite", level: 88 },
      { name: "Babel", level: 80 },
      { name: "NPM", level: 92 },
      { name: "Figma", level: 75 },
    ],
  },
  {
    title: "Testing & API Integration",
    icon: "🧪",
    skills: [
      { name: "Jest", level: 85 },
      { name: "React Testing Library", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Axios", level: 88 },
      { name: "Fetch API", level: 92 },
      { name: "Postman", level: 85 },
    ],
  },
]

export default function SkillsPage() {
  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        <TabBar />
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="text-sm text-muted-foreground font-mono mb-2">// My technical expertise</div>
              <h1 className="text-4xl font-bold mb-6 text-balance">
                Skills & <span className="text-primary">Technologies</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                A comprehensive overview of my technical skills and proficiency levels
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-card p-6 rounded border border-border">
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h2 className="text-xl font-semibold text-primary">{category.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-card-foreground font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500 group-hover:bg-accent"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="bg-card p-6 rounded border border-border mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">Additional Expertise</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Responsive Design",
                  "Web Accessibility",
                  "Performance Optimization",
                  "Code Reusability",
                  "Agile/Scrum",
                  "Cross-browser Testing",
                  "SEO Optimization",
                  "Chrome DevTools",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="p-3 bg-muted rounded text-center hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Section */}
            <div className="p-4 bg-card rounded border border-border font-mono text-sm">
              <div className="text-green-400 mb-2">$ npm list --global</div>
              <div className="text-card-foreground pl-4 space-y-1">
                <div>├── react@18.x</div>
                <div>├── next@15.x</div>
                <div>├── typescript@5.x</div>
                <div>├── tailwindcss@3.x</div>
                <div>└── @testing-library/react@14.x</div>
              </div>
              <div className="text-green-400 mt-4 mb-2">$ echo "Always learning new technologies..."</div>
              <div className="text-card-foreground">Always learning new technologies...</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
