"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Calendar, MapPin, ChevronDown, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react'
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="lg:sticky lg:top-6 transition-all duration-300 ease-in-out overflow-hidden w-full lg:w-80 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-6">
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
            <Image 
              src="/https://i.ibb.co/SNxQVFS/my-avatar.png?height=120&width=120"
              alt="Joshua Wafula"
              width={120}
              height={120}
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover transition-all duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="text-center sm:text-left lg:text-center">
            <h1 className="text-xl md:text-2xl font-medium mb-2">Wafula Joshua</h1>
            <div className="inline-block bg-muted px-3 py-1 rounded-lg text-sm">
              Cloud Engineer
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden w-full mt-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform ml-2",
            isExpanded && "transform rotate-180"
          )} />
        </Button>

        <div className={cn(
          "mt-6 grid gap-4",
          !isExpanded && "lg:block hidden"
        )}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-muted">
                <Mail className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Email</p>
                <a href="mailto:contact@example.com" className="hover:text-primary">
                  contact@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-muted">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Phone</p>
                <a href="tel:+254792195650" className="hover:text-primary">
                  +(254) 792 195 650
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-muted">
                <Calendar className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Birthday</p>
                <time dateTime="2002-04-24">April 24, 2002</time>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-muted">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Location</p>
                <address>Migori, Kenya</address>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4 justify-center sm:justify-start lg:justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-all duration-300 ease-in-out">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-all duration-300 ease-in-out">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-all duration-300 ease-in-out">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-all duration-300 ease-in-out">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-all duration-300 ease-in-out">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}

