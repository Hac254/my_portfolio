import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const form = document.querySelector("form") as HTMLFormElement
    form.addEventListener("submit", handleSubmit)
    return () => form.removeEventListener("submit", handleSubmit)
  }, [])

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setFormStatus("success")
        form.reset()
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      setFormStatus("error")
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.88871134299!2d37.04473007068761!3d-1.0387251189823504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b27c66117%3A0xb6f8a7e126152c26!2sThika!5e0!3m2!1sen!2ske!4v1650000000000!5m2!1sen!2ske"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 sm:space-y-6">
            <input type="hidden" name="access_key" value="e32dd2b7-307c-4838-be52-ec299340377a" />
            <input type="hidden" name="subject" value="New contact form submission from your portfolio" />
            <input type="hidden" name="from_name" value="Your Portfolio Website" />
            <input type="hidden" name="replyto" value="wafulajoosh@gmail.com" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input id="name" name="name" placeholder="Johnte Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" placeholder="morio@example.com" required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Input id="subject" name="subject" placeholder="How can I help you?" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea id="message" name="message" placeholder="Your message here..." rows={4} required />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/80 hover:via-secondary/80 hover:to-accent/80"
            >
              Send Message
            </Button>
          </form>
          {formStatus === "success" && (
            <p className="text-green-500 text-center mt-4">Thank you for your message. I'll get back to you soon!</p>
          )}
          {formStatus === "error" && (
            <p className="text-red-500 text-center mt-4">
              Oops! There was an error sending your message. Please try again later.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

