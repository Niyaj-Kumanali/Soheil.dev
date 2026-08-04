import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Experience } from "@/components/Experience"
import { Skills } from "@/components/Skills"
import { Certifications } from "@/components/Certifications"
import { Education } from "@/components/Education"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <ThemeProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
