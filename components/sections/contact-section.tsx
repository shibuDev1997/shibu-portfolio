"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">Send Me a Message</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-teal-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="transition-all duration-300 focus:ring-2 focus:ring-teal-500 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white transition-all duration-300 ease-out hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">Contact Information</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "jshibu779@gmail.com",
                      href: "mailto:jshibu779@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 9487265142",
                      href: "tel:+919487265142",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Nagercoil, Kanyakumari, India",
                      href: "#",
                    },
                  ].map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors duration-300">
                        <info.icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">{info.label}</h4>
                        {info.href !== "#" ? (
                          <Link
                            href={info.href}
                            className="text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors duration-300"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">Connect With Me</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Let's connect on social media and professional networks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {[
                      {
                        href: "https://github.com/shibuDev1997",
                        icon: Github,
                        label: "GitHub",
                        bgColor: "bg-gray-900 hover:bg-gray-800",
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
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full ${social.bgColor} transition-all duration-300 ease-out hover:scale-110 shadow-lg hover:shadow-xl`}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="hover:shadow-lg transition-all duration-500 ease-out hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-800 dark:text-white">
                        <Clock className="w-4 h-4 mr-2" />
                        Response Time
                      </span>
                      <span className="text-teal-600 font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-gray-800 dark:text-white">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Current Status
                      </span>
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        <span className="text-gray-600 dark:text-gray-300">Available for projects</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 dark:text-white">Time Zone</span>
                      <span className="text-gray-600 dark:text-gray-300">IST (UTC+5:30)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
