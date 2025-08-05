"use client"

import { useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import React from "react"

const projects = [
  {
    title: "Neem Connect (Admin Dashboard)",
    description: "Enterprise admin dashboard with internal chat, media upload, and role-based access control features.",
    longDescription:
      "Built a comprehensive admin dashboard using Next.js App Router with CSR architecture. Features include internal chat system, media upload functionality, role-based access control, and complex state management via TanStack Query. Integrated REST APIs, NextAuth for secure authentication, and implemented form validation with React Hook Form + Zod.",
    technologies: ["Next.js", "React.js", "TypeScript", "TanStack Query", "NextAuth.js", "React Hook Form"],
    github: "https://github.com/shibuj/neem-connect",
    demo: "https://neem-connect-demo.vercel.app",
  },
  {
    title: "The Legend New Saravana Stores",
    description: "E-commerce platform with SSR, payment integration, and dynamic product management.",
    longDescription:
      "Implemented Server-Side Rendering using Next.js for optimal SEO and performance. Built dynamic UI components for product catalog, shopping cart, and checkout process. Integrated Razorpay for secure payment processing and managed user authentication via NextAuth.",
    technologies: ["Next.js", "React.js", "Razorpay", "NextAuth.js", "TanStack Query", "SSR"],
    github: "https://github.com/shibuj/saravana-stores",
    demo: "https://saravana-stores-demo.vercel.app",
  },
  {
    title: "TeeKart - E-Commerce App",
    description: "Modern e-commerce application with advanced filtering, cart management, and promo codes.",
    longDescription:
      "Built using Next.js 15 App Router with modern state management using Zustand. Features include advanced product filtering, shopping cart, wishlist functionality, promo code system, and comprehensive form validation. Styled with Tailwind CSS and Shadcn UI for a modern, responsive design.",
    technologies: ["Next.js 15", "Zustand", "Tailwind CSS", "TanStack Query", "Shadcn UI", "TypeScript"],
    github: "https://github.com/shibuj/teekart",
    demo: "https://teekart-demo.vercel.app",
  },
]

export const ProjectsSection = React.memo(function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium text-accent">Featured Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient animate-slide-up">
            My Work
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-glow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="hover:bg-primary/5"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-primary">{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="hover:bg-primary/10 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button asChild size="sm" className="bg-gradient-to-r from-primary to-secondary">
                            <Link href={project.demo} target="_blank">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Link>
                          </Button>
                          <Button asChild variant="outline" size="sm">
                            <Link href={project.github} target="_blank">
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button asChild size="sm" className="bg-gradient-to-r from-secondary to-accent">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})
