import { useParams } from "react-router";
import { useEffect } from "react";
import { Header } from "@/components/common/header";
import { ProjectsSection } from "@/components/common/projects-section";
import { Footer } from "@/components/common/footer";
import { HeroProjectSection } from "@/components/common/hero-project-section";
import { getProjectById } from "@/data/projects";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (project?.linkType === "externalLink" && project.liveUrl) {
      window.location.href = project.liveUrl;
    }
  }, [project, id]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroProjectSection project={project} />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
