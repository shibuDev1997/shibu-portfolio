"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PROJECTS } from "@/lib/constants"

export function ProjectsSection() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))]
  const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating expertise in
              <span className="text-teal-600 font-semibold"> modern web technologies</span> and
              <span className="text-emerald-600 font-semibold"> user-centered design</span> principles.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 text-lg font-semibold transition-all duration-300 ease-out hover:scale-105 ${filter === category
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg"
                    : "border-teal-300 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900"
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 ease-out hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-center space-x-4">
                    <Button
                      asChild
                      size="sm"
                      className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700"
                    >
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>

                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-0 px-3 py-1 font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white group-hover:text-teal-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white mb-3">Key Features:</h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200 hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-lg bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700 transition-all duration-500 ease-out hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link
                href="https://github.com/shibuDev1997"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"  // Added flex, centering and gap
              >
                <Github className="w-6 h-6" />
                <span>View More on GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
