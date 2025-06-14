"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, MapPin, Calendar, Building, GraduationCap, Award } from "lucide-react"
import { WORK_EXPERIENCE, EDUCATION, EXPERIENCE } from "@/lib/constants"

export function ResumeSection() {
  const handleDownloadResume = () => {
    const resumeContent = `
SHIBU J - Front-End Developer
Email: jshibu779@gmail.com
Phone: +91 9487265142
Website: shibu-dev.vercel.app
LinkedIn: linkedin.com/in/shibuj1997
GitHub: github.com/shibuDev1997

PROFESSIONAL SUMMARY:
Front-End Developer with 2+ years of hands-on experience in designing, developing, and maintaining web applications. Proficient in React.js, Next.js, TypeScript, and modern JavaScript libraries.

WORK EXPERIENCE:
${WORK_EXPERIENCE.map(
  (exp) => `
${exp.company} - ${exp.role} (${exp.period})
${exp.achievements.map((achievement) => `• ${achievement}`).join("\n")}
`,
).join("\n")}

EDUCATION:
${EDUCATION.degree}
${EDUCATION.institution} (${EDUCATION.period})
    `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Shibu_J_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-lime-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              My professional journey, skills, and achievements in front-end development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white transition-all duration-300 ease-out hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-teal-300 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900 transition-all duration-300 ease-out hover:scale-105"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Online
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-gray-800 dark:text-white">
                <Building className="w-8 h-8 mr-3 text-teal-600" />
                Work Experience
              </h3>

              <div className="space-y-6">
                {WORK_EXPERIENCE.map((exp, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl text-gray-800 dark:text-white">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-medium text-teal-600">{exp.company}</CardDescription>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center text-gray-800 dark:text-white">
                          <Award className="w-4 h-4 mr-2 text-teal-600" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} className="bg-teal-100 text-teal-700 border-teal-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education & Stats */}
            <div className="space-y-6">
              {/* Education */}
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center text-gray-800 dark:text-white">
                  <GraduationCap className="w-8 h-8 mr-3 text-teal-600" />
                  Education
                </h3>
                <Card className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800 dark:text-white">{EDUCATION.degree}</CardTitle>
                    <CardDescription className="font-medium text-teal-600">{EDUCATION.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {EDUCATION.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {EDUCATION.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    { value: EXPERIENCE.years, label: "Years Experience" },
                    { value: EXPERIENCE.projects, label: "Projects Completed" },
                    { value: EXPERIENCE.technologies, label: "Technologies Mastered" },
                  ].map((stat, index) => (
                    <Card
                      key={stat.label}
                      className="text-center hover:shadow-lg transition-all duration-500 ease-out hover:scale-105"
                    >
                      <CardContent className="m-6">
                        <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Contact Info</h3>
                <Card className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
                  <CardContent className="m-6 space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">Email:</span>
                      <br />
                      <span className="text-gray-600 dark:text-gray-300">jshibu779@gmail.com</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">Phone:</span>
                      <br />
                      <span className="text-gray-600 dark:text-gray-300">+91 9487265142</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">Location:</span>
                      <br />
                      <span className="text-gray-600 dark:text-gray-300">Nagercoil, India</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
