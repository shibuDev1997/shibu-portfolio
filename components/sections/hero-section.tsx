import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Code2, Sparkles, Zap, Rocket } from "lucide-react"
import Link from "next/link"
import React from "react"

export const HeroSection = React.memo(function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10" />
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/30 to-highlight/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-warning/20 to-primary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="flex justify-center space-x-8 mb-8 animate-fade-in">
            <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-glow animate-pulse">
              <Code2 className="h-10 w-10 text-white" />
            </div>
            <div
              className="p-4 bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-glow-cyan animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              <Rocket className="h-10 w-10 text-white" />
            </div>
            <div
              className="p-4 bg-gradient-to-br from-accent to-highlight rounded-2xl shadow-glow-purple animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              <Zap className="h-10 w-10 text-white" />
            </div>
            <div
              className="p-4 bg-gradient-to-br from-highlight to-warning rounded-2xl shadow-glow-highlight animate-pulse"
              style={{ animationDelay: "1.5s" }}
            >
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <span className="block text-gradient-rainbow animate-slide-up glow-text">Shibu J</span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text font-bold mb-8 animate-slide-up">
              Front-End Developer & React.js Specialist
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-slide-up">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12">
              Crafting <span className="text-primary font-bold glow-text">cutting-edge</span> web applications with{" "}
              <span className="text-secondary font-bold">3+ years</span> of experience in{" "}
              <span className="text-accent font-bold">React.js</span>,{" "}
              <span className="text-highlight font-bold">Next.js</span>, and{" "}
              <span className="text-warning font-bold">TypeScript</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white px-10 py-6 text-xl rounded-2xl shadow-glow-lg hover:shadow-glow transition-all duration-500 hover:scale-110 animate-pulse"
            >
              <Link href="#contact">
                <Zap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
                <ArrowDown className="ml-3 h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-3 border-primary/50 hover:border-primary bg-card hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 text-primary px-10 py-6 text-xl rounded-2xl backdrop-blur-sm hover:shadow-glow-cyan transition-all duration-500 hover:scale-110"
            >
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-3 h-6 w-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in">
            {[
              { number: "3+", label: "Years Experience", gradient: "from-primary to-secondary", shadow: "shadow-glow" },
              {
                number: "15+",
                label: "Projects Completed",
                gradient: "from-secondary to-accent",
                shadow: "shadow-glow-cyan",
              },
              {
                number: "5+",
                label: "Technologies",
                gradient: "from-accent to-highlight",
                shadow: "shadow-glow-purple",
              },
              {
                number: "100%",
                label: "Client Satisfaction",
                gradient: "from-highlight to-warning",
                shadow: "shadow-glow-highlight",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-8 bg-gradient-to-br ${stat.gradient} rounded-3xl ${stat.shadow} transition-all duration-500 hover:scale-110 hover:-translate-y-2 group cursor-pointer`}
              >
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-125 transition-transform duration-300 glow-text">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/90 mt-2 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-3 border-primary/50 rounded-full flex justify-center bg-gradient-to-b from-primary/20 to-secondary/20 backdrop-blur-sm">
          <div className="w-2 h-4 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
})
