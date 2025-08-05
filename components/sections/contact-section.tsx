"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import React from "react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactForm = z.infer<typeof contactSchema>

export const ContactSection = React.memo(function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = useCallback(
    async (data: ContactForm) => {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      reset()
      setIsSubmitting(false)
    },
    [toast, reset],
  )

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-highlight/10 to-primary/10 rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium text-highlight">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient animate-slide-up">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            I'm currently available for new opportunities and exciting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <Card className="bg-card border-border shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className={`mt-1 bg-input text-foreground ${errors.name ? "border-destructive" : "border-border focus:border-primary"}`}
                      />
                      {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={`mt-1 bg-input text-foreground ${errors.email ? "border-destructive" : "border-border focus:border-primary"}`}
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      className={`mt-1 bg-input text-foreground ${errors.subject ? "border-destructive" : "border-border focus:border-primary"}`}
                    />
                    {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className={`mt-1 bg-input text-foreground ${errors.message ? "border-destructive" : "border-border focus:border-primary"}`}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">Let's connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm currently available for new opportunities and exciting projects. Feel free to reach out if you'd
                  like to discuss a project or collaboration!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "jshibu779@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 9487265142" },
                  { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India" },
                ].map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{contact.label}</p>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
