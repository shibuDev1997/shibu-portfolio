export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  github: string
  demo: string
  category: string
  gradient: string
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface WorkExperience {
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavigationItem {
  href: string
  label: string
}
