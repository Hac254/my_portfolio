import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TestimonialDialog } from "@/components/ui/dialog-testimonial"

const whatIDo = [
  {
    icon: "/icon-design.svg",
    title: "UI/UX Design",
    description: "The most modern, visually stunning and user friendly interfaces made at a professional level.",
  },
  {
    icon: "/icon-dev.svg",
    title: "Web Development",
    description: "Design and development of highly responsive, dynamic, high quality websites tailored to your needs.",
  },
  {
    icon: "/icon-app.svg",
    title: "Mobile Apps",
    description: "Professional development of mobile applications for iOS and Android to give seamless user experience.",
  },
  {
    icon: "/icon-photo.svg",
    title: "Photography",
    description: "I make, take and edit high-quality photographs at a professional level.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechInnovate",
    content: "Joshua's work on our cloud infrastructure was exceptional. His expertise significantly improved our system's efficiency and reliability. The migration process was smooth, and his documentation was thorough. He demonstrated great problem-solving skills and was always available when we needed support. I highly recommend Joshua for any cloud engineering projects.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, WebSolutions",
    content: "Working with Joshua was a pleasure. His web development skills are top-notch, and he always delivers on time. He has a great eye for detail and consistently produces clean, efficient code. His ability to understand complex requirements and translate them into elegant solutions is impressive. I would definitely work with him again on future projects.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, CreativeMinds",
    content: "Joshua's design work for our campaign was brilliant. He has a great eye for detail and understands client needs perfectly. His creative approach and attention to brand consistency helped us achieve outstanding results. The project was delivered ahead of schedule, and the quality exceeded our expectations. A true professional who goes above and beyond.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/techcorp" },
  { name: "InnovateSoft", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/innovatesoft" },
  { name: "WebGenius", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/webgenius" },
  { name: "DigitalDreams", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/digitaldreams" },
  { name: "CloudNine", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/cloudnine" },
  { name: "CreativeMinds", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/creativeminds" },
]

export function AboutSection() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Hello, I'm Josh, a certified IT Personnel and a Cloud Practitioner. I am also a Web and App Developer, Graphics Designer,
            Photographer among other tech related roles which I do on my part-time.
            I currently live in Kenya, Migori town to be precise. I love Music, anime and cats.
            I enjoy turning ideas and concepts into reality as I face new challenging tasks in my field which
            make me learn.
          </p>
          <p className="mt-4 text-muted-foreground">
            Some of the projects I have undertaken include Cloud deployment, Bot dev, Cinematography and film Making,
            System Development etc. The tech world is a fascinating and ever-growing field which needs one to be a life
            long learner.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">What I Do</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2">
          {whatIDo.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="relative w-10 h-10 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Testimonials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialDialog key={index} {...testimonial} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Clients I've Worked With</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all duration-300 ease-in-out"
              >
                <Image src={client.logo} alt={client.name} width={80} height={80} className="max-w-full h-auto" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

