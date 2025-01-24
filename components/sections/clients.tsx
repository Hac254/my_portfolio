import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/techcorp" },
  { name: "InnovateSoft", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/innovatesoft" },
  { name: "WebGenius", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/webgenius" },
  { name: "DigitalDreams", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/digitaldreams" },
  { name: "CloudNine", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/cloudnine" },
  { name: "CreativeMinds", logo: "/placeholder.svg?height=80&width=80", link: "https://example.com/creativeminds" },
]

export function ClientsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-8">Clients I've Worked With</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-muted/80 transition-colors"
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

