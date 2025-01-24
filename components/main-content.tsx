"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AboutSection } from "@/components/sections/about"
import { ResumeSection } from "@/components/sections/resume"
import { ProjectsSection } from "@/components/sections/projects"
import { BlogsSection } from "@/components/sections/blogs"
import { ContactSection } from "@/components/sections/contact"


export function MainContent() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="flex-1">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted/50 p-1 gap-1 flex flex-wrap justify-center sm:justify-start">
          <TabsTrigger value="about" className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">About</TabsTrigger>
          <TabsTrigger value="resume" className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">Resume</TabsTrigger>
          <TabsTrigger value="projects" className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">Projects</TabsTrigger>
          <TabsTrigger value="blogs" className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">Blogs</TabsTrigger>
          <TabsTrigger value="contact" className="px-3 py-1.5 text-sm font-medium transition-all hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">Contact</TabsTrigger>
        </TabsList>

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
      </Tabs>
    </div>
  )
}

