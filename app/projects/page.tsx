import { MainLayout } from "@/components/main-layout"
import { TabBar } from "@/components/tab-bar"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "TeeKart",
    description: "Online t-shirt shopping with cart, wishlist, and offers",
    longDescription:
      "A comprehensive e-commerce platform for t-shirt shopping featuring a modern, clean design with smooth UI interactions. Built with Next.js 15 App Router for optimal performance and SEO.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Zustand", "React Hook Form"],
    features: [
      "Shopping cart functionality",
      "Wishlist management",
      "Special offers and discounts",
      "Mobile-friendly responsive design",
      "Smooth UI animations",
      "Modern checkout process",
    ],
    status: "Completed",
    github: "#",
    demo: "#",
    image: "/modern-e-commerce-t-shirt-website.jpg",
  },
  {
    id: 2,
    name: "Enterprise Forms Migration",
    description: "Migrated legacy enterprise forms to modern React components",
    longDescription:
      "Led the migration of complex enterprise forms from legacy systems to modern React-based solutions, ensuring data accuracy and improved user experience.",
    technologies: ["React.js", "TypeScript", "Redux", "Material UI", "Jest"],
    features: [
      "Form validation and error handling",
      "Data accuracy improvements",
      "Accessibility compliance",
      "Performance optimization",
      "Unit and integration testing",
    ],
    status: "Completed",
    github: "#",
    demo: "#",
    image: "/enterprise-forms-dashboard-interface.jpg",
  },
  {
    id: 3,
    name: "Responsive Web Interfaces",
    description: "Collection of responsive websites with improved performance",
    longDescription:
      "Developed multiple responsive websites focusing on performance optimization, SEO improvements, and cross-browser compatibility.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js"],
    features: [
      "Mobile-first responsive design",
      "SEO optimization",
      "Page load speed improvements",
      "Cross-browser compatibility",
      "Modern UI layouts",
    ],
    status: "Ongoing",
    github: "#",
    demo: "#",
    image: "/responsive-website-collection-showcase.jpg",
  },
]

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        <TabBar />
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="text-sm text-muted-foreground font-mono mb-2">// My work and projects</div>
              <h1 className="text-4xl font-bold mb-6 text-balance">
                Featured <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                A showcase of my recent work and contributions to various projects
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={project.id} className="bg-card rounded border border-border overflow-hidden">
                  {/* Project Tab Header */}
                  <div className="flex items-center px-6 py-3 bg-muted border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 font-mono text-sm text-muted-foreground">
                      {project.name.toLowerCase().replace(/\s+/g, "-")}.tsx
                    </div>
                    <div className="ml-auto">
                      <span
                        className={`px-2 py-1 text-xs rounded font-mono ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                    {/* Project Image */}
                    <div className="order-2 lg:order-1">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-64 object-cover rounded border border-border"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="order-1 lg:order-2 space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold text-primary mb-2">{project.name}</h2>
                        <p className="text-card-foreground leading-relaxed">{project.longDescription}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-primary/10 text-primary text-sm rounded font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Key Features
                        </h3>
                        <ul className="space-y-1 text-sm text-card-foreground">
                          {project.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <span className="text-primary mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 pt-4">
                        <Link
                          href={project.github}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          View Code
                        </Link>
                        <Link
                          href={project.demo}
                          className="px-4 py-2 border border-border text-foreground rounded hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                        >
                          Live Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Section */}
            <div className="mt-8 p-4 bg-card rounded border border-border font-mono text-sm">
              <div className="text-green-400 mb-2">$ git log --oneline</div>
              <div className="text-card-foreground pl-4 space-y-1">
                <div>a1b2c3d feat: add TeeKart e-commerce platform</div>
                <div>e4f5g6h refactor: migrate enterprise forms to React</div>
                <div>h7i8j9k perf: optimize responsive web interfaces</div>
                <div>k0l1m2n docs: update project documentation</div>
              </div>
              <div className="text-green-400 mt-4 mb-2">$ echo "More projects coming soon..."</div>
              <div className="text-card-foreground">More projects coming soon...</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
