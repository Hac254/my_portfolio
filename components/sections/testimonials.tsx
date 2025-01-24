import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechInnovate",
    content: "Joshua's work on our cloud infrastructure was exceptional. His expertise significantly improved our system's efficiency.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, WebSolutions",
    content: "Working with Joshua was a pleasure. His web development skills are top-notch, and he always delivers on time.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, CreativeMinds",
    content: "Joshua's design work for our campaign was brilliant. He has a great eye for detail and understands client needs perfectly.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-8">What People Say</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

