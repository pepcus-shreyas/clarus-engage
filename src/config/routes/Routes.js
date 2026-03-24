const trimRoot = (path) => path.replace(/^\//, '')

/** Absolute paths for redirects, `Link`, `navigate`, etc. */
export const ROUTE_PATHS = {
  ROOT: '/',
  TASKS: '/tasks',
  CONVERSATIONS: '/conversations',
  PATIENTS: '/patients',
  REPORTS: '/reports',
}

/** Default route when visiting `/` or when no route matches */
export const DEFAULT_ROUTE = ROUTE_PATHS.TASKS

/** Segments relative to the root layout path `/` (React Router child `path`) */
export const ROUTE_SEGMENTS = {
  TASKS: trimRoot(ROUTE_PATHS.TASKS),
  CONVERSATIONS: trimRoot(ROUTE_PATHS.CONVERSATIONS),
  PATIENTS: trimRoot(ROUTE_PATHS.PATIENTS),
  REPORTS: trimRoot(ROUTE_PATHS.REPORTS),
}

/** React Router splat pattern for unmatched paths */
export const ROUTE_MATCH_ALL = '*'
