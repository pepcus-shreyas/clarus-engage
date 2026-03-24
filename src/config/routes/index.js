import { createElement } from 'react'
import Engage from '@/layouts/Engage'
import Tasks from '@/pages/Tasks'
import Conversations from '@/pages/Conversations'
import Patients from '@/pages/Patients'
import Reports from '@/pages/Reports'

const routes = [
  {
    path: '/',
    element: createElement(Engage),
    children: [
      { index: true, element: createElement(Tasks) },
      { path: 'tasks', element: createElement(Tasks) },
      { path: 'conversations', element: createElement(Conversations) },
      { path: 'patients', element: createElement(Patients) },
      { path: 'reports', element: createElement(Reports) },
    ],
  },
]

export default routes
