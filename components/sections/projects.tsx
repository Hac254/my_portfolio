"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Define project categories
const categories = ["All", "UI/UX Design", "Photography", "Anime Drawing", "App Development"]

// Sample projects data
// You can easily add more projects or modify existing ones
const projects = [
  {
    title: "E-commerce Website Redesign",
    category: "UI/UX Design",
    image: "https://i.ibb.co/6YzD5yf/image.png",
    link: "https://www.figma.com/design/u0hCdVF9vCnWBP50iF2co6/Whitepace---SaaS-Landing-Page-(Community)?node-id=215-18338&t=zB82FMvWzIIXxREI-1",
  },
  {
    title: "Chosso, JJK",
    category: "Anime Drawing",
    image: "https://telegra.ph/file/11ad0996a2261b8a57e1d.jpg",
    link: "https://telegra.ph/Photos-Dispaly-04-11",
  },
  {
    title: "Self Management App, Therapeutic",
    category: "App Development",
    image: "https://i.ibb.co/g9BzFL4/image.png",
    link: "https://github.com/Hac254/self-management-app",
    demoLink: "https://self-management-model.vercel.app/", // Add demo link for app development projects
  },
  {
    title: "Yoruichi, Bleach",
    category: "Anime Drawing",
    image: "https://telegra.ph/file/031a220f3ca306bc8a71a.jpg",
    link: "https://telegra.ph/Photos-Dispaly-04-11",
  },
  {
    title: "Shinra, Fire Force",
    category: "Anime Drawing",
    image: "https://telegra.ph/file/c5ea70c55e4d4a2db2a51.jpg",
    link: "https://telegra.ph/Photos-Dispaly-04-11",
  },
  {
    title: "Layers of texture, tales of comfort",
    category: "Photography",
    image: "https://i.ibb.co/H2xCT7H/house4.jpg",
    link: "https://telegra.ph/Images-from-my-project-12-12",
  },
  {
    title: "Behavioural Activation Tool, Therapy",
    category: "App Development",
    image: "https://i.ibb.co/QYJHqS9/image.png",
    link: "https://github.com/Hac254/Behavioural-Activation-Project",
    demoLink: "https://behavioural-activation-tool.vercel.app/", // Add demo link for app development projects
  },
  {
    title: "Chic comfort where every seat tells a story",
    category: "Photography",
    image: "https://i.ibb.co/rQSjzJ8/house.jpg",
    link: "https://telegra.ph/Images-from-my-project-12-12",
  },
  {
    title: "Bold statements in cozy corners",
    category: "Photography",
    image: "https://i.ibb.co/PDX62y1/house3.jpg",
    link: "https://telegra.ph/Images-from-my-project-12-12",
  },
  
  {
    title: "Carnice Cakes App",
    category: "App Development",
    image: "https://i.ibb.co/K7k7YNp/image.png?height=200&width=300",
    link: "https://github.com/Hac254/carnice-cakes",
    demoLink: "https://carnicecakes.vercel.app/", // Add demo link for app development projects
  },
  {
    title: "Chatbot App",
    category: "App Development",
    image: "https://i.ibb.co/yg4j0cp/image.png",
    link: "https://github.com/Hac254/TherapyChatbot",
    demoLink: "https://therapy-chatbot-one.vercel.app/", // Add demo link for app development projects
  },
  {
    title: "Choosemore App",
    category: "App Development",
    image: "https://i.ibb.co/P5D04Tp/image.png",
    link: "https://github.com/Hac254/Choosemore-App",
    demoLink: "https://choosemore.vercel.app/", // Add demo link for app development projects
  },
  {
    title: "Hino, Our Story",
    category: "Anime Drawing",
    image: "https://i.ibb.co/z2Mz3qV/photo-2024-12-17-16-11-05.jpg",
    link: "https://telegra.ph/Art-and-Photography-01-27",
  },
  {
    title: "Red Rose, Nature's Beauty",
    category: "Photography",
    image: "https://i.ibb.co/fSTqkzv/photo-2025-01-27-08-53-35.jpg",
    link: "https://telegra.ph/Art-and-Photography-01-27",
  },
  {
    title: "Pink Rose, Nature's Beauty",
    category: "Photography",
    image: "https://i.ibb.co/JmfrG1k/photo-2025-01-27-08-53-37.jpg",
    link: "https://telegra.ph/Art-and-Photography-01-27",
  },
  {
    title: "Sunset by the River, Splendor of Nature",
    category: "Photography",
    image: "https://i.ibb.co/5BVMXrw/photo-2025-01-27-08-53-33.jpg",
    link: "https://telegra.ph/Art-and-Photography-01-27",
  },
  {
    title: "Gpuiy, Anime Drawing",
    category: "Anime Drawing",
    image: "https://i.ibb.co/5Rcx0PG/photo-2024-11-19-15-20-30.jpg",
    link: "https://telegra.ph/Art-and-Photography-01-27",
  },
  // Add more projects as needed
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="text-2xl font-bold gradient-text">My Projects</CardTitle>
          {/* Category selector */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px] border-primary">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  {/* Project card */}
                  <div className="group relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="object-cover w-full h-48 transition-all duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-end p-4 transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 rounded-xl">
                      <div>
                        <h3 className="text-white font-semibold">{project.title}</h3>
                        <Badge
                          variant="secondary"
                          className="mt-2 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 rounded-full"
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                {/* Project details dialog */}
                <DialogContent className="sm:max-w-[600px]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground mt-2">{project.category}</p>
                    <div className="mt-4 space-y-2">
                      <Button className="w-full" onClick={() => window.open(project.link, "_blank")}>
                        View Full Project
                      </Button>
                      {project.category === "App Development" && project.demoLink && (
                        <Button
                          className="w-full bg-secondary hover:bg-secondary/90"
                          onClick={() => window.open(project.demoLink, "_blank")}
                        >
                          View Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

