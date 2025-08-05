import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import React from "react"

const timeline = [
  {
    year: "2023-2025",
    title: "Front-End Developer",
    company: "Capecom Solutions Pvt Ltd",
    type: "work",
    description:
      "Building modern web applications using Next.js App Router, managing complex state with TanStack Query, and developing enterprise-level dashboards.",
    icon: Briefcase,
  },
  {
    year: "2022-2023",
    title: "Web Developer",
    company: "Accenture",
    type: "work",
    description:
      "Migrated enterprise forms and UI components with modern frameworks, built responsive interfaces ensuring data accuracy and accessibility.",
    icon: Briefcase,
  },
  {
    year: "2021-2022",
    title: "Web Developer",
    company: "SB Software Solutions",
    type: "work",
    description:
      "Built responsive websites using React.js, managed forms with React Hook Form and Redux Toolkit, improved page load speed and SEO performance.",
    icon: Briefcase,
  },
  {
    year: "2015-2019",
    title: "Bachelor of Engineering",
    company: "Hindustan Institute of Technology",
    type: "education",
    description: "Computer Science Engineering with focus on software development and modern web technologies.",
    icon: GraduationCap,
  },
]

export const AboutSection = React.memo(function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-highlight/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient animate-slide-up">
            My Story
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
            I'm a passionate Front-End Developer with <span className="text-primary font-semibold">3+ years</span> of
            experience creating scalable web applications that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-primary">My Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] bg-card border-border animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl shadow-lg ${
                            item.type === "work"
                              ? "bg-gradient-to-br from-primary to-secondary"
                              : "bg-gradient-to-br from-accent to-highlight"
                          } group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <Badge
                              variant="secondary"
                              className="w-fit mb-2 sm:mb-0 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                            >
                              <Calendar className="mr-1 h-3 w-3" />
                              {item.year}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-secondary font-semibold mb-3 flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {item.company}
                          </p>
                          <p className="text-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-primary">What I Do</h3>
            <div className="space-y-8">
              {[
                {
                  title: "React.js Development",
                  description:
                    "Building modern, scalable web applications using React.js, Next.js, and TypeScript with focus on performance and user experience.",
                  gradient: "from-primary to-secondary",
                },
                {
                  title: "UI/UX Implementation",
                  description:
                    "Creating responsive, pixel-perfect designs using Tailwind CSS, Material UI, and Shadcn UI with mobile-first approach.",
                  gradient: "from-secondary to-accent",
                },
                {
                  title: "State Management & APIs",
                  description:
                    "Managing complex application state with Redux Toolkit, Zustand, and TanStack Query while integrating RESTful APIs efficiently.",
                  gradient: "from-accent to-highlight",
                },
              ].map((highlight, index) => (
                <div key={index} className="group animate-fade-in" style={{ animationDelay: `${300 + index * 200}ms` }}>
                  <div className="relative p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-[1.02]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div className="relative z-10">
                      <h4 className="font-bold text-xl mb-4 text-primary group-hover:scale-105 transition-transform duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-20">
          {[
            { label: "Location", value: "Chennai, Tamil Nadu", icon: MapPin },
            { label: "Experience", value: "3+ Years", icon: Briefcase },
            { label: "Education", value: "B.E Computer Science", icon: GraduationCap },
            { label: "Focus", value: "Frontend Development", icon: Briefcase },
          ].map((info, index) => {
            const IconComponent = info.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card border-border animate-fade-in"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm text-foreground mb-1">{info.label}</div>
                  <div className="font-semibold text-foreground">{info.value}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
})
