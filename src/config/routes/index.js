import { createElement } from 'react'
import { Redirect } from '@/app/lib/router'
import {
  DEFAULT_ROUTE,
  ROUTE_MATCH_ALL,
  ROUTE_PATHS,
  ROUTE_SEGMENTS,
} from '@/config/constants/Routes'
import Engage from '@/layouts/Engage'
import Tasks from '@/pages/Tasks'
import Conversations from '@/pages/Conversations'
import Patients from '@/pages/Patients'
import Reports from '@/pages/Reports'

const routes = [
  {
    path: ROUTE_PATHS.ROOT,
    element: createElement(Engage),
    children: [
      { index: true, element: createElement(Redirect, { to: DEFAULT_ROUTE, replace: true }) },
      { path: ROUTE_SEGMENTS.TASKS, element: createElement(Tasks) },
      { path: ROUTE_SEGMENTS.CONVERSATIONS, element: createElement(Conversations) },
      { path: ROUTE_SEGMENTS.PATIENTS, element: createElement(Patients) },
      { path: ROUTE_SEGMENTS.REPORTS, element: createElement(Reports) },
      { path: ROUTE_MATCH_ALL, element: createElement(Redirect, { to: DEFAULT_ROUTE, replace: true }) },
    ],
  },
]

export default routes
