"use client"

import { useState, useRef, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AboutSection } from "@/components/sections/about"
import { ResumeSection } from "@/components/sections/resume"
import { ProjectsSection } from "@/components/sections/projects"
import { BlogsSection } from "@/components/sections/blogs"
import { ContactSection } from "@/components/sections/contact"

export function MainContent() {
  const [activeTab, setActiveTab] = useState("about")
  const [showShadow, setShowShadow] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setShowShadow(scrollRef.current.scrollTop > 0)
      }
    }

    const currentScrollRef = scrollRef.current
    if (currentScrollRef) {
      currentScrollRef.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="flex-1 overflow-hidden">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
        <TabsList className="bg-muted/50 p-1 gap-1 flex flex-wrap justify-center sticky top-0 z-10">
          <TabsTrigger
            value="about"
            className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="resume"
            className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
          >
            Resume
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="blogs"
            className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
          >
            Blogs
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
          >
            Contact
          </TabsTrigger>
        </TabsList>

        <div
          ref={scrollRef}
          className={`flex-1 overflow-y-auto max-h-[calc(100vh-4rem)] scroll-smooth relative ${
            showShadow
              ? 'after:content-[""] after:absolute after:top-0 after:left-0 after:right-0 after:h-4 after:bg-gradient-to-b after:from-background after:to-transparent after:pointer-events-none'
              : ""
          }`}
        >
          <TabsContent value="about">
            <AboutSection />
          </TabsContent>
          <TabsContent value="resume">
            <ResumeSection />
          </TabsContent>
          <TabsContent value="projects">
            <ProjectsSection />
          </TabsContent>
          <TabsContent value="blogs">
            <BlogsSection />
          </TabsContent>
          <TabsContent value="contact">
            <ContactSection />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

