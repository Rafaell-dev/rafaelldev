import { Header } from "@/components/common/header"
import { ProjectsSection } from "@/components/common/projects-section"
import { Footer } from "@/components/common/footer"
import { HeroProjectSection } from "@/components/common/hero-project-section"

export default function ProjectDetails() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroProjectSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
