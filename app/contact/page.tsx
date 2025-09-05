"use client"

import type React from "react"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { TabBar } from "@/components/tab-bar"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setCurrentLine(0)
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        <TabBar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-sm text-muted-foreground font-mono mb-2">// Let's connect</div>
              <h1 className="text-4xl font-bold mb-6 text-balance">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Have a project in mind? Let's discuss how we can work together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-card p-6 rounded border border-border">
                  <h2 className="text-xl font-semibold mb-4 text-primary">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary">📧</span>
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-muted-foreground">jshibu779@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary">📱</span>
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-muted-foreground">+91-9487265142</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary">📍</span>
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-muted-foreground">Tamil Nadu, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded border border-border">
                  <h2 className="text-xl font-semibold mb-4 text-primary">Social Links</h2>
                  <div className="space-y-3">
                    <a
                      href="https://www.linkedin.com/in/shibuj1997/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <span>🔗</span>
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/shibuDev1997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <span>💻</span>
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://shibu-portfolio-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <span>🌐</span>
                      <span>Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Terminal Contact Form */}
              <div className="bg-card rounded border border-border overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm font-mono text-muted-foreground">contact-form.sh</div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm bg-background min-h-[400px]">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="text-green-400 mb-4">$ ./contact-form.sh --interactive</div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-primary mb-1">Enter your name:</div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="terminal-input w-full p-2 bg-muted rounded border border-border focus:border-primary focus:outline-none transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <div className="text-primary mb-1">Enter your email:</div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="terminal-input w-full p-2 bg-muted rounded border border-border focus:border-primary focus:outline-none transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <div className="text-primary mb-1">Enter your message:</div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="terminal-input w-full p-2 bg-muted rounded border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                            placeholder="Hello Shibu, I'd like to discuss..."
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                              <span>Sending...</span>
                            </span>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>

                      {isSubmitting && (
                        <div className="text-yellow-400 animate-pulse">
                          <div>Establishing connection...</div>
                          <div>Encrypting message...</div>
                          <div>Sending to shibu@dev.local...</div>
                        </div>
                      )}
                    </form>
                  ) : (
                    <div className="space-y-2 animate-fade-in">
                      <div className="text-green-400">$ Message sent successfully!</div>
                      <div className="text-foreground">✓ Connection established</div>
                      <div className="text-foreground">✓ Message encrypted and delivered</div>
                      <div className="text-foreground">✓ Auto-reply enabled</div>
                      <div className="text-primary mt-4">Thank you for reaching out! I'll get back to you soon.</div>
                      <div className="text-muted-foreground">Expected response time: 24-48 hours</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Terminal Section */}
            <div className="mt-8 p-4 bg-card rounded border border-border font-mono text-sm">
              <div className="text-green-400 mb-2">$ cat availability.txt</div>
              <div className="text-card-foreground pl-4 space-y-1">
                <div>Status: Available for new opportunities</div>
                <div>Preferred work: Remote/Hybrid</div>
                <div>Response time: Within 24 hours</div>
                <div>Best contact method: Email</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
