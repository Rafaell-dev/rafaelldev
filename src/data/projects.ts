export interface Project {
  id?: string;
  linkType?: "externalLink" | "internalLink";
  name?: string;
  techStack?: string;
  description?: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Record<string, Project> = {
  "admin-dashboard": {
    id: "admin-dashboard",
    linkType: "internalLink",
    name: "Admin Dashboard",
    techStack: "NextJS + TypeScript",
    description:
      "Plataforma de gestão de projetos com interface moderna e intuitiva. Sistema completo com autenticação, dashboard interativo e gerenciamento de tarefas em tempo real.",
    images: [
      "/project-details/luna/img1.png",
      "/project-details/luna/img2.png",
      "/project-details/luna/img3.png",
      "/project-details/luna/img4.png",
    ],
    githubUrl: "https://github.com/lunaecommerce/luna",
    liveUrl: "https://gacessorios.com.br",
  },
  "e-commerce": {
    id: "e-commerce",
    linkType: "internalLink",
    name: "E-commerce",
    techStack: "NextJS + TypeScript",
    description:
      "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamentos integrado e painel administrativo para gerenciamento de produtos e pedidos.",
    images: [
      "/project-details/gacessorios/img1.png",
      "/project-details/gacessorios/img2.png",
      "/project-details/gacessorios/img3.png",
      "/project-details/gacessorios/img4.png",
    ],
    githubUrl: "https://github.com/lunaecommerce/luna_ecommerce",
    liveUrl: "https://luna.anjotech.net",
  },
  "agreste": {
    id: "agreste",
    linkType: "internalLink",
    name: "Agreste Motors",
    techStack: "HTML + CSS",
    description:
      "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamentos integrado e painel administrativo para gerenciamento de produtos e pedidos.",
    images: [
      "/project-details/agreste/img1.png",
      "/project-details/agreste/img2.png",
      "/project-details/agreste/img3.png",
      "/project-details/agreste/img4.png",
    ],
    githubUrl: "https://github.com/Rafaell-dev/agrestemotors",
    liveUrl: "https://agrestemotors.anjotech.net",
  },
  "flashcard-app": {
    id: "flashcard-app",
    linkType: "externalLink",
    liveUrl:
      "https://www.figma.com/design/wJjEs6c9uRbALP9sWPqB9c/mindcards?node-id=51-114&t=mFe4lSLUs4dFPZgH-1",
  },
  "api-restful": {
    id: "api-restful",
    linkType: "externalLink",
    liveUrl: "https://github.com/Rafaell-dev/ts-api-boilerplate.git",
  },
};

export const getProjectById = (id: string | undefined): Project | null => {
  if (!id) return null;
  return projectsData[id] || null;
};

export const getAllProjects = (): Project[] => {
  return Object.values(projectsData);
};
