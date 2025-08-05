"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { Menu, X, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"
import React from "react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const Navbar = React.memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-primary/10 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#home" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:shadow-glow transition-all duration-300">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">Shibu J</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-primary/20">
              <ThemeToggle />
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="hover:bg-primary/10">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl rounded-2xl m-4 p-6 border border-primary/10 shadow-glow">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})
