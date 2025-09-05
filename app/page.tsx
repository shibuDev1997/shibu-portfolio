import { MainLayout } from "@/components/main-layout"
import { TabBar } from "@/components/tab-bar"
import Link from "next/link"

export default function HomePage() {
  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        <TabBar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-sm text-muted-foreground font-mono mb-2">// Welcome to my portfolio</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Hi, I'm <span className="text-primary">Shibu J</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 text-pretty">
                Frontend Developer with 3+ years of experience building scalable web applications
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/about"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium"
                >
                  Learn More About Me
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3 border border-border text-foreground rounded hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
                >
                  View My Work
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded border border-border">
                <h3 className="text-lg font-semibold mb-3 text-primary">Current Role</h3>
                <p className="text-card-foreground">
                  Frontend Developer at Adixoo Brand Pvt. Ltd. (Client: Freshworks)
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Building responsive interfaces with React.js, Redux, and TypeScript
                </p>
              </div>

              <div className="bg-card p-6 rounded border border-border">
                <h3 className="text-lg font-semibold mb-3 text-primary">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-muted text-muted-foreground text-sm rounded font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-card rounded border border-border">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card rounded border border-border">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 bg-card rounded border border-border">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>

            <div className="p-4 bg-card rounded border border-border font-mono text-sm">
              <div className="text-green-400 mb-2">$ whoami</div>
              <div className="text-card-foreground">Frontend Developer | React.js Enthusiast | Problem Solver</div>
              <div className="text-green-400 mt-2">$ location</div>
              <div className="text-card-foreground">Tamil Nadu, India</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
