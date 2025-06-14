"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SKILLS, TECHNOLOGIES } from "@/lib/constants"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-emerald-50 to-lime-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate front-end developer with a keen eye for detail and a love for creating
              <span className="text-teal-600 font-semibold"> seamless user experiences</span> through clean, efficient
              code.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Content */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
                <CardContent className="m-8 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Professional Summary</h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Front-End Developer with <span className="text-teal-600 font-bold">2+ years</span> of hands-on
                      experience in designing, developing, and maintaining web applications. Proficient in React.js,
                      Next.js, TypeScript, and modern JavaScript libraries.
                    </p>
                    <p>
                      Strong background in responsive UI/UX development, state management, form handling, and
                      performance optimization. Experienced in building reusable components, conducting code reviews,
                      and integrating RESTful APIs.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    {[
                      { label: "Experience", value: "2+ Years", icon: "🚀" },
                      { label: "Location", value: "Nagercoil, India", icon: "📍" },
                      { label: "Education", value: "B.E Computer Science", icon: "🎓" },
                      { label: "Languages", value: "Tamil, English, Malayalam", icon: "🌐" },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-teal-600">{item.label}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
                <CardContent className="m-8">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {TECHNOLOGIES.map((tech) => (
                      <Badge
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 border-teal-200 hover:from-teal-200 hover:to-emerald-200 hover:scale-110 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
                <CardContent className="m-8">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Core Skills</h3>
                  <div className="space-y-8">
                    {SKILLS.map((skill) => (
                      <div key={skill.name} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-800 dark:text-white text-lg">{skill.name}</span>
                          <span className="text-teal-600 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "Projects Completed" },
                  { number: "2+", label: "Years Experience" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-500 ease-out hover:scale-105"
                  >
                    <CardContent className="m-6">
                      <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
