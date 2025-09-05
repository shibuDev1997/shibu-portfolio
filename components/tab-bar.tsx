"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

const tabs = [
  { name: "home.tsx", href: "/", icon: "📄" },
  { name: "about.tsx", href: "/about", icon: "👤" },
  { name: "skills.tsx", href: "/skills", icon: "⚡" },
  { name: "projects.tsx", href: "/projects", icon: "📁" },
  { name: "contact.tsx", href: "/contact", icon: "📧" },
]

export function TabBar() {
  const pathname = usePathname()

  return (
    <div className="flex bg-card border-b border-border overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm border-r border-border min-w-fit",
              "hover:bg-background transition-colors font-mono",
              "vscode-tab",
              isActive && "active",
            )}
          >
            <span className="mr-2">{tab.icon}</span>
            <span>{tab.name}</span>
            {isActive && <button className="ml-2 hover:bg-muted rounded px-1">×</button>}
          </Link>
        )
      })}
    </div>
  )
}
