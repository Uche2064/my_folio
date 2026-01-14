import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/features/landing/components/Navbar"
import Hero from "@/features/landing/components/Hero"
import Works from "@/features/landing/components/Works"
import Education from "@/features/landing/components/Education"
import Skills from "@/features/landing/components/Skills"
import ContactForm from "@/features/landing/forms/ContactForm"

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Navbar */}
      <Navbar />
      <main className="">
        {/* Hero */}
       <Hero />

        {/* Works */}
        <Works />

       {/* Education */}
       <Education />

        {/* Skills */}
        <Skills />

        {/* Contact */}
        <ContactForm />
      </main>
    </div>
  )
}
