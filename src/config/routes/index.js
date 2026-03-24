import { createElement } from 'react'
import Engage from '@/layouts/Engage'
import TaskList from '@/pages/TaskList'

const routes = [
  {
    path: '/',
    element: createElement(Engage),
    children: [
      { index: true, element: createElement(TaskList) },
      { path: 'tasks', element: createElement(TaskList) },
    ],
  },
]

export default routes
