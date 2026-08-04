import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { ImpactStrip } from "@/components/ImpactStrip"
import { Projects } from "@/components/Projects"
import { Experience } from "@/components/Experience"
import { Skills } from "@/components/Skills"
import { Certifications } from "@/components/Certifications"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <ThemeProvider>
      <Nav />
      <main>
        <Hero />
        <ImpactStrip />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
