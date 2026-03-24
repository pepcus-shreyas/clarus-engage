import { createElement } from 'react'
import { Redirect } from '@/app/lib/router'
import {
  DEFAULT_ROUTE,
  ROUTE_MATCH_ALL,
  ROUTE_PATHS,
  ROUTE_SEGMENTS,
} from '@/config/routes/Routes'
import Engage from '@/layouts/Engage'
import Tasks from '@/pages/Tasks'
import Conversations from '@/pages/Conversations'
import Patients from '@/pages/Patients'
import Reports from '@/pages/Reports'

/**
 * Breadcrumb metadata on `handle` (read by TopNavBar via useMatches):
 * - `breadcrumb`: string, or `(match) => string` for params / data-driven labels
 * - `breadcrumbTo`: optional; where the crumb links (defaults to `match.pathname`)
 * - `breadcrumb: false` to omit this match from the trail
 * Add the same on nested `children` when you introduce deeper routes.
 */
const routes = [
  {
    path: ROUTE_PATHS.ROOT,
    element: createElement(Engage),
    handle: {
      breadcrumb: 'Engage',
      breadcrumbTo: DEFAULT_ROUTE,
    },
    children: [
      { index: true, element: createElement(Redirect, { to: DEFAULT_ROUTE, replace: true }) },
      {
        path: ROUTE_SEGMENTS.TASKS,
        element: createElement(Tasks),
        handle: { breadcrumb: 'Tasks' },
      },
      {
        path: ROUTE_SEGMENTS.CONVERSATIONS,
        element: createElement(Conversations),
        handle: { breadcrumb: 'Conversations' },
      },
      {
        path: ROUTE_SEGMENTS.PATIENTS,
        element: createElement(Patients),
        handle: { breadcrumb: 'Patients' },
      },
      {
        path: ROUTE_SEGMENTS.REPORTS,
        element: createElement(Reports),
        handle: { breadcrumb: 'Reports' },
      },
      { path: ROUTE_MATCH_ALL, element: createElement(Redirect, { to: DEFAULT_ROUTE, replace: true }) },
    ],
  },
]

export default routes
