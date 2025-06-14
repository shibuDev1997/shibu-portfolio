"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart, Code, Zap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Shibu Dev
            </h3>
            <p className="text-gray-300 max-w-sm leading-relaxed">
              Front-End Developer passionate about creating exceptional digital experiences with modern web
              technologies.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://github.com/shibuDev1997",
                  icon: Github,
                  label: "GitHub",
                  bgColor: "bg-gray-800 hover:bg-gray-700",
                },
                {
                  href: "https://www.linkedin.com/in/shibuj1997",
                  icon: Linkedin,
                  label: "LinkedIn",
                  bgColor: "bg-blue-600 hover:bg-blue-700",
                },
                {
                  href: "mailto:jshibu779@gmail.com",
                  icon: Mail,
                  label: "Email",
                  bgColor: "bg-red-600 hover:bg-red-700",
                },
              ].map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${social.bgColor} transition-all duration-300 ease-out hover:scale-110 shadow-lg`}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#resume", label: "Resume" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 transition-transform"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>jshibu779@gmail.com</p>
              <p>+91 9487265142</p>
              <p>Nagercoil, Kanyakumari, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Shibu Dev. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>Next.js &</span>
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
