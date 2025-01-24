"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const projects = [
  {
    title: "Brawlhalla",
    category: "App Development",
    image: "https://telegra.ph/file/825ff9b4047b09a7bedaa.png",
  },
  {
    title: "Task Manager",
    category: "App Development",
    image: "https://telegra.ph/file/f3f689a8c12f9b63788ef.jpg",
  },
  {
    title: "Architecture Project",
    category: "Web Development",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Choso-JJK",
    category: "Anime Art",
    image: "https://telegra.ph/file/11ad0996a2261b8a57e1d.jpg",
  },
]

const categories = ["All", ...new Set(projects.map(project => project.category))]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="text-2xl font-bold gradient-text">My Projects</CardTitle>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px] border-primary">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
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
              <div key={index} className="group relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48 transition-all duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-4 transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 rounded-xl">
                  <div>
                    <h3 className="text-white font-semibold">{project.title}</h3>
                    <Badge variant="secondary" className="mt-2 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 rounded-full">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

