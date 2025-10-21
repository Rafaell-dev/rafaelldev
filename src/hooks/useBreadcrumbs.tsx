'use client';

import { useMemo } from 'react';
import { useLocation } from 'react-router';

type BreadcrumbItem = {
  title: string;
  link: string;
};

const routeMapping: Record<string, BreadcrumbItem[]> = {
  '/dashboard': [{ title: 'Dashboard', link: '/dashboard' }],
  '/dashboard/employee': [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Employee', link: '/dashboard/employee' }
  ],
  '/dashboard/product': [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Product', link: '/dashboard/product' }
  ],
  '/dashboard/services': [{ title: 'Serviços', link: '/dashboard/services' }],
  '/dashboard/schedule': [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Agenda', link: '/dashboard/shedule' }
  ],
  '/dashboard/appointments': [
    { title: 'Atendimentos', link: '/dashboard/appointments' }
  ],
  '/dashboard/services/new': [
    { title: 'Serviços', link: '/dashboard/services' },
    { title: 'Novo', link: '/dashboard/services/new' }
  ],
  '/dashboard/catalog': [{ title: 'Catálogo', link: '/dashboard/services' }]
};

export function useBreadcrumbs() {
    const { pathname } = useLocation();

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
