import { Header } from "@/components/common/header"
import { HeroSection } from "@/components/common/hero-section"
import { TechStack } from "@/components/common/tech-stack"
import { ProjectsSection } from "@/components/common/projects-section"
import { ExperienceSection } from "@/components/common/experience-section"
import { Footer } from "@/components/common/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TechStack />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  )
}
