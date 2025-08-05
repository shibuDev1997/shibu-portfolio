import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"
import React from "react"

const experiences = [
  {
    title: "Front-End Developer",
    company: "Capecom Solutions Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "Sep 2023 - Jun 2025",
    description:
      "Leading front-end development for multiple enterprise projects including Neem Connect admin dashboard and e-commerce platforms. Built CSR architecture using Next.js App Router, developed internal chat systems, and implemented role-based access control features.",
    technologies: ["Next.js", "React.js", "TypeScript", "TanStack Query", "NextAuth.js", "React Hook Form", "Zod"],
  },
  {
    title: "Web Developer",
    company: "Accenture",
    location: "Chennai, Tamil Nadu",
    period: "Oct 2022 - Feb 2023",
    description:
      "Migrated enterprise forms and UI components with modern frameworks. Built responsive interfaces ensuring data accuracy and accessibility across multiple client projects.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Web Developer",
    company: "SB Software Solutions",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2021 - Sep 2022",
    description:
      "Built responsive websites using React.js and modern web technologies. Managed forms and data using React Hook Form and Redux Toolkit. Improved page load speed and SEO performance across multiple projects.",
    technologies: ["React.js", "Redux Toolkit", "React Hook Form", "Bootstrap", "JavaScript", "SEO"],
  },
]

export const ExperienceSection = React.memo(function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium text-primary">Work Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient animate-slide-up">
            My Journey
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="hover:shadow-glow-lg transition-all duration-500 hover:scale-[1.02] bg-card border-border animate-slide-in-left"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{experience.title}</CardTitle>
                    <p className="text-lg font-semibold text-secondary mt-1">{experience.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4 leading-relaxed">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="hover:bg-primary/10 transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})
