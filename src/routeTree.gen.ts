import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as WorkIndexImport } from './routes/work/index'
import { Route as ProjectsIndexImport } from './routes/projects/index'
import { Route as ContactMeIndexImport } from './routes/contact-me/index'

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WorkIndexRoute = WorkIndexImport.update({
  path: '/work/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIndexRoute = ProjectsIndexImport.update({
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any)

const ContactMeIndexRoute = ContactMeIndexImport.update({
  path: '/contact-me/',
  getParentRoute: () => rootRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/contact-me/': {
      preLoaderRoute: typeof ContactMeIndexImport
      parentRoute: typeof rootRoute
    }
    '/projects/': {
      preLoaderRoute: typeof ProjectsIndexImport
      parentRoute: typeof rootRoute
    }
    '/work/': {
      preLoaderRoute: typeof WorkIndexImport
      parentRoute: typeof rootRoute
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LayoutRoute,
  ContactMeIndexRoute,
  ProjectsIndexRoute,
  WorkIndexRoute,
])
