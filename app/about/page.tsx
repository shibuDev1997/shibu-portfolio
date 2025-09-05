import { MainLayout } from "@/components/main-layout"
import { TabBar } from "@/components/tab-bar"

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        <TabBar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-sm text-muted-foreground font-mono mb-2">// About me</div>
              <h1 className="text-4xl font-bold mb-6 text-balance">
                About <span className="text-primary">Shibu J</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Profile Section */}
              <div className="lg:col-span-1">
                <div className="bg-card p-6 rounded border border-border">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Shibu J</h3>
                    <p className="text-primary font-medium mb-4">Frontend Developer</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>📧 jshibu779@gmail.com</div>
                      <div>📱 +91-9487265142</div>
                      <div>📍 Tamil Nadu, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="lg:col-span-2">
                <div className="bg-card p-6 rounded border border-border h-full">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Professional Summary</h3>
                  <p className="text-card-foreground leading-relaxed mb-4">
                    Frontend Developer with 3+ years of experience in building scalable and responsive web applications
                    using React.js and Next.js. Proficient in JavaScript (ES6+), TypeScript, and integrating REST APIs.
                  </p>
                  <p className="text-card-foreground leading-relaxed">
                    Experienced in Agile/Scrum environments with a strong understanding of UI/UX principles,
                    accessibility standards, and testing practices. Passionate about creating performant, user-friendly
                    web experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Professional Experience</h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-semibold">Frontend Developer</h3>
                    <span className="text-sm text-muted-foreground font-mono">Aug 2025 – Present</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Adixoo Brand Pvt. Ltd. (Client: Freshworks)</p>
                  <ul className="text-card-foreground space-y-1 text-sm">
                    <li>• Built responsive and dynamic web interfaces using React.js, Redux, and TypeScript</li>
                    <li>• Collaborated with cross-functional teams to integrate frontend with REST APIs</li>
                    <li>• Focused on performance optimization, reusability, and accessibility</li>
                    <li>• Implemented unit and integration testing with Jest and React Testing Library</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-semibold">Frontend Developer</h3>
                    <span className="text-sm text-muted-foreground font-mono">Sep 2023 – Jun 2025</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Capecom Solutions Pvt Ltd</p>
                  <ul className="text-card-foreground space-y-1 text-sm">
                    <li>
                      • Developed responsive and interactive web interfaces using HTML, CSS, JavaScript, TypeScript and
                      React.js
                    </li>
                    <li>
                      • Integrated frontend components with RESTful APIs through close collaboration with backend and
                      design teams
                    </li>
                    <li>• Emphasized performance optimization, code reusability, and web accessibility standards</li>
                  </ul>
                </div>

                <div className="bg-card p-6 rounded border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-semibold">Frontend Developer</h3>
                    <span className="text-sm text-muted-foreground font-mono">Oct 2022 – Feb 2023</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Accenture</p>
                  <ul className="text-card-foreground space-y-1 text-sm">
                    <li>• Migrated enterprise forms and UI components with modern frameworks</li>
                    <li>• Built responsive interfaces ensuring data accuracy and accessibility</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Education</h2>
              <div className="bg-card p-6 rounded border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold">B.E. – Computer Science Engineering</h3>
                  <span className="text-sm text-muted-foreground font-mono">Jul 2015 – May 2019</span>
                </div>
                <p className="text-primary font-medium mb-2">Hindusthan Institute of Technology, Coimbatore</p>
                <p className="text-card-foreground text-sm">CGPA: 6.5/10</p>
              </div>
            </div>

            {/* Terminal Section */}
            <div className="p-4 bg-card rounded border border-border font-mono text-sm">
              <div className="text-green-400 mb-2">$ cat personal_info.json</div>
              <div className="text-card-foreground pl-4">
                <div>{"{"}</div>
                <div className="pl-4">
                  <div>"name": "Shibu J",</div>
                  <div>"role": "Frontend Developer",</div>
                  <div>"experience": "3+ years",</div>
                  <div>"location": "Tamil Nadu, India",</div>
                  <div>"passion": "Building amazing web experiences"</div>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
