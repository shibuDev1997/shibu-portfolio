"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Zap } from "lucide-react"
import Link from "next/link"

const TYPING_SPEED = 150
const DELETING_SPEED = 75
const PAUSE_TIME = 3000

const roles = ["Front-End Developer", "React Specialist", "Next.js Expert", "UI/UX Enthusiast", "TypeScript Developer"]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const typeText = useCallback(() => {
    const currentRole = roles[currentRoleIndex]

    if (isPaused) {
      setTimeout(() => setIsPaused(false), PAUSE_TIME)
      return
    }

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      } else {
        setIsPaused(true)
        setIsDeleting(true)
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
      } else {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }
  }, [displayText, currentRoleIndex, isDeleting, isPaused])

  useEffect(() => {
    if (!isPaused) {
      const timeout = setTimeout(typeText, isDeleting ? DELETING_SPEED : TYPING_SPEED)
      return () => clearTimeout(timeout)
    }
  }, [typeText, isDeleting, isPaused])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-700 via-emerald-600 to-lime-300"
    >
      <div className="absolute inset-0 bg-black/10" />

      <div
        className={`container mx-auto px-4 my-24 relative z-10 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          {/* Main Heading */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg">
              <span className="block">Hi, I'm</span>
              <span className="block mt-4 bg-gradient-to-r from-lime-200 to-yellow-200 bg-clip-text text-transparent">
                Shibu J
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-medium min-h-[3rem] flex items-center justify-center">
              <span className="border-r-2 border-white/70 pr-1 animate-pulse">{displayText}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Crafting <span className="text-lime-200 font-semibold">exceptional digital experiences</span> with React,
            Next.js, and cutting-edge web technologies.
            <span className="text-yellow-200 font-semibold"> 2+ years</span> of expertise in building scalable,
            user-centric applications.
          </p>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-8 transition-all duration-1000 delay-700 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <Link
              href="https://github.com/shibuDev1997"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-500 ease-out hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Github className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500 ease-out" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shibuj1997"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-500 ease-out hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500 ease-out" />
            </Link>
            <Link
              href="mailto:jshibu779@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-500 ease-out hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500 ease-out" />
            </Link>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white border-0 transition-all duration-500 ease-out hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link href="#projects" className="flex items-center">
                <Code className="w-6 h-6 mr-3" />
                View Projects
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-500 ease-out hover:scale-105 backdrop-blur-sm"
            >
              <Link href="#contact" className="flex items-center">
                <Zap className="w-6 h-6 mr-3" />
                Get In Touch
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "10+", label: "Technologies Mastered" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-500 ease-out hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-lime-200 mb-2">{stat.number}</div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link href="#about" className="group">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white transition-colors duration-300">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
            <ArrowDown className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
          </div>
        </Link>
      </div>
    </section>
  )
}
