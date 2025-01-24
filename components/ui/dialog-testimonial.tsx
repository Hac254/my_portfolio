"use client"

import { X } from 'lucide-react'
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface TestimonialDialogProps {
  name: string
  role: string
  content: string
  image: string
}

export function TestimonialDialog({ name, role, content, image }: TestimonialDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Image
                src={image}
                alt={name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/icon-quote.svg"
                alt="Quote"
                width={34}
                height={23}
                className="absolute -top-2 -left-2 opacity-20"
              />
              <p className="italic text-muted-foreground line-clamp-3 pl-8">
                {content}
              </p>
            </div>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <button
          onClick={() => document.querySelector('button[data-state="open"]')?.dispatchEvent(new Event('click'))}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4 text-white" />
          <span className="sr-only">Close</span>
        </button>
        <DialogHeader>
          <div className="flex items-center">
            <Image
              src={image}
              alt={name}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <div>
              <DialogTitle>{name}</DialogTitle>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </DialogHeader>
        <div className="relative mt-4">
          <Image
            src="/icon-quote.svg"
            alt="Quote"
            width={34}
            height={23}
            className="absolute -top-2 -left-2 opacity-20"
          />
          <p className="italic text-muted-foreground pl-8">{content}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

