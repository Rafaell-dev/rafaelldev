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
    description: `Luna é um painel administrativo para e-commerce, com interface intuitiva e responsiva. Centraliza a gestão de produtos (com upload via Cloudinary), pedidos, clientes e análises de desempenho, oferecendo gráficos interativos e relatórios detalhados. Conta com modo claro/escuro, autenticação segura via Clerk e foi desenvolvido com Next.js 14, React, TypeScript, Tailwind, Prisma e PostgreSQL.`,
    images: [
      "/project-details/luna/img1.png",
      "/project-details/luna/img2.png",
      "/project-details/luna/img3.png",
      "/project-details/luna/img4.png",
    ],
    githubUrl: "https://github.com/lunaecommerce/luna",
    liveUrl: "https://luna.anjotech.net",
  },
  "e-commerce": {
    id: "e-commerce",
    linkType: "internalLink",
    name: "E-commerce",
    techStack: "NextJS + TypeScript",
    description: `Loja virtual completa focada na venda de produtos importados, desenvolvida com Next.js 14 (App Router) para alta performance e SEO otimizado. Oferece navegação intuitiva com filtros e busca avançada, checkout seguro integrado ao Stripe, autenticação e gestão de usuários via Clerk, interface responsiva e acessível com Radix UI e Tailwind CSS, além de gerenciamento de estado eficiente com Zustand.`,
    images: [
      "/project-details/gacessorios/img1.png",
      "/project-details/gacessorios/img2.png",
      "/project-details/gacessorios/img3.png",
      "/project-details/gacessorios/img4.png",
    ],
    githubUrl: "https://github.com/lunaecommerce/luna_ecommerce",
    liveUrl: "https://gacessorios.com.br",
  },
  agreste: {
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
