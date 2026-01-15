import Navbar from "@/features/public/components/Navbar"
import Hero from "@/features/public/components/Hero"
import Works from "@/features/public/components/Works"
import Education from "@/features/public/components/Education"
import Skills from "@/features/public/components/Skills"
import ContactForm from "@/features/public/components/ContactMe"
import Footer from "@/features/public/components/Footer"

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
      <Footer />
    </div>
  )
}
