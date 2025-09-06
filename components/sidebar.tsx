"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "home.tsx", href: "/", icon: "📄" },
  { name: "about.tsx", href: "/about", icon: "👤" },
  { name: "skills.tsx", href: "/skills", icon: "⚡" },
  { name: "projects.tsx", href: "/projects", icon: "📁" },
  { name: "contact.tsx", href: "/contact", icon: "📧" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Collapse sidebar by default on small screens
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)") // md breakpoint
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsCollapsed(e.matches) // true if small screen
    }

    handleChange(mediaQuery) // set on mount
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <div
      className={cn(
        "flex flex-col bg-sidebar border-r border-sidebar-border h-screen",
        // width transition for smooth open/close
        "transition-[width] duration-300 ease-in-out",
        isCollapsed ? "w-12" : "w-64",
        // drawer-style slide on mobile
        "fixed md:static z-50",
        isCollapsed ? "-translate-x-0" : "translate-x-0"
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-sidebar-accent rounded text-sidebar-foreground"
        >
          {isCollapsed ? "→" : "←"}
        </button>
      </div>

      {/* Explorer Header */}
      {!isCollapsed && (
        <div className="px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground border-b border-sidebar-border">
          Explorer
        </div>
      )}

      {/* File Tree */}
      <div className="flex-1 p-2 overflow-y-auto">
        {!isCollapsed && (
          <div className="mb-2">
            <div className="flex items-center text-sm text-sidebar-foreground mb-1">
              <span className="mr-1">📂</span>
              <span>SHIBU-PORTFOLIO</span>
            </div>
          </div>
        )}

        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-2 py-1 text-sm rounded transition-colors",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground",
                  isCollapsed && "justify-center",
                )}
              >
                <span className="text-base">{item.icon}</span>
                {!isCollapsed && <span className="ml-2 font-mono">{item.name}</span>}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      {!isCollapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-muted-foreground">
            <div>Frontend Developer</div>
            <div className="text-primary">Shibu J</div>
          </div>
        </div>
      )}
    </div>
  )
}
