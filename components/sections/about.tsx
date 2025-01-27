import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TestimonialDialog } from "@/components/ui/dialog-testimonial"

const whatIDo = [
  {
    icon: "/icons/icon-design.svg",
    title: "UI/UX Design",
    description: "The most modern, visually stunning and user friendly interfaces made at a professional level.",
  },
  {
    icon: "/icons/icon-dev.svg",
    title: "Web Development",
    description: "Design and development of highly responsive, dynamic, high quality websites tailored to your needs.",
  },
  {
    icon: "/icons/icon-app.svg",
    title: "Mobile Apps",
    description:
      "Professional development of mobile applications for iOS and Android to give seamless user experience.",
  },
  {
    icon: "/icons/icon-photo.svg",
    title: "Photography",
    description: "I make, take and edit high-quality photographs at a professional level.",
  },
]

const testimonials = [
  {
    name: "Judith Oliech",
    role: "Secretary, Bodi Highschool",
    content:
      "Joshua's work on our cloud infrastructure was exceptional. His expertise significantly improved our system's efficiency and reliability. The migration process was smooth, and his documentation was thorough. He demonstrated great problem-solving skills and was always available when we needed support. I highly recommend Joshua for any cloud engineering projects.",
    image: "https://i.ibb.co/wYG44zV/judith-oliech.png",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, WebSolutions",
    content:
      "Working with Joshua was a pleasure. His web development skills are top-notch, and he always delivers on time. He has a great eye for detail and consistently produces clean, efficient code. His ability to understand complex requirements and translate them into elegant solutions is impressive. I would definitely work with him again on future projects.",
    image: "https://i.ibb.co/XVbSQLC/profile-pic-4.png",
  },
  {
    name: "Carnice Dianne",
    role: "CEO, Carnice Cakes",
    content:
      "Joshua's design and website development brilliant. He has a great eye for detail and understands client needs perfectly. His creative approach and consistency helped us achieve outstanding results. The website was delivered ahead of schedule, and the quality exceeded our expectations. A true professional who goes above and beyond.",
    image: "https://i.ibb.co/r2zNTfM/Whats-App-Image-2025-01-22-at-12-01-52-PM.jpg",
  },
  {
    name: "Raha Fuad",
    role: "Marketing Director, CreativeMinds",
    content:
      " :) ",
    image: "https://i.ibb.co/Vq0FhRG/profile-pic-9.png",
  },
]

const clients = [
  {
    name: "Ransom & Wilder",
    logo: "https://i.ibb.co/bHpGgW8/logo-1-color.png",
    link: "https://ntfos.com/dt_logos/ransom/",
  },
  {
    name: "Big Enough",
    logo: "https://i.ibb.co/x74sPXh/logo-2-color.png",
    link: "https://ntfos.com/dt_logos/ransom/",
  },
  {
    name: "Cara Indoors",
    logo: "https://i.ibb.co/2jv0rcj/logo-3-color.png",
    link: "https://www.madeindesign.co.uk/prod-cara-indoor-padded-armchair-plastic-material-textile-grey-black-tissu-kartell-ref5842-4d.html",
  },
  {
    name: "Mountain Sport",
    logo: "https://i.ibb.co/8cCNnW6/logo-6-color.png",
    link: "https://www.mountainsports.com/?srsltid=AfmBOop1gKGL1RLMGqL5jihW8HSeeLzGyRrDZHk1QWbqKY8FwCEF-NDw",
  },
  
]

export function AboutSection() {
  return (
    <div className="space-y-8">
      {/* About Me section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Hello, I'm Josh, a certified IT Personnel and a Cloud Practitioner. I am also a Web and App Developer,
            Graphics Designer, Photographer among other tech related roles which I do on my part-time. I currently live
            in Kenya, Migori town to be precise. I love Music, anime and cats. I enjoy turning ideas and concepts into
            reality as I face new challenging tasks in my field which make me learn.
          </p>
          <p className="mt-4 text-muted-foreground">
            Some of the projects I have undertaken include Cloud deployment, Bot dev, Cinematography and film Making,
            System Development etc. The tech world is a fascinating and ever-growing field which needs one to be a life
            long learner.
          </p>
        </CardContent>
      </Card>

      {/* What I Do section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">What I Do</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2">
          {whatIDo.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="relative w-24 h-24 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image src={item.icon || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Testimonials section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Testimonials</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="flex gap-6 w-max pb-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[300px] flex-shrink-0">
                <TestimonialDialog {...testimonial} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Clients section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Clients I've Worked With</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="flex gap-8 w-max pb-4">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 ease-in-out group text-center w-[200px]"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="max-w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="mt-3 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

