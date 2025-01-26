import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogs = [
  {
    title: "Cloud Computing",
    category: "Tech",
    date: "April 11, 2024",
    image: "https://telegra.ph/file/9f5bc860018407da97e1f.jpg",
    excerpt: "Everything you need to know about Cloud Computing",
    link: "https://telegra.ph/What-is-Cloud-Computing-Everything-You-Need-to-Know-04-11",
  },
  {
    title: "Web Development",
    category: "Tech",
    date: "April 16, 2024",
    image: "https://telegra.ph/file/81904b6848ca7b8a49e4c.png",
    excerpt: "What is web development? Everything you need to know about it.",
    link: "https://telegra.ph/Web-Development-04-16-2",
  },
  {
    title: "Guide to Calisthenics",
    category: "Fitness",
    date: "Jan 16, 2024",
    image: "https://telegra.ph/file/0986a53608a39df389628.jpg",
    excerpt: "Want to perform strength moves that defy gravity? We've got a workout for that",
    link: "https://telegra.ph/Guide-to-Calisthenics-04-16",
  },
  {
    title: "Artificial intelligence",
    category: "Tech",
    date: "March 11, 2024",
    image: "https://telegra.ph/file/a32ce890ec9723d0dcec9.jpg",
    excerpt: "What Is AI?",
    link: "https://telegra.ph/Artificial-Intelligence-AI-04-16",
  },
  {
    title: "Mental Health",
    category: "Well being",
    date: "Aug 23, 2023",
    image: "https://telegra.ph/file/686d10e8a57a8f737d593.png",
    excerpt: "What is Mental Health?",
    link: "https://telegra.ph/Mental-Health-04-16",
  },
  {
    title: "Anime",
    category: "Fun",
    date: "Feb 11, 2022",
    image: "https://telegra.ph/file/3cd577027ee2a455251a9.jpg",
    excerpt: "Everything You Need To Know about this artform",
    link: "https://telegra.ph/What-Is-Anime-04-16",
  },
]

export function BlogsSection() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">My Blog Posts</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={200}
                className="object-cover h-48 w-full"
              />
              <CardContent className="p-4">
                <Badge>{blog.category}</Badge>
                <h3 className="font-semibold mt-2">{blog.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{blog.date}</p>
                <p className="text-sm mt-2">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  Read More
                </a>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

