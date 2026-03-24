import { createElement } from 'react'
import { Redirect } from '@/app/lib/router'
import Home from '@/views/layouts/home/Home.jsx'

/**
 * Default route loads Home; unknown paths redirect to `/`.
 */
const routes = [
  {
    path: '/',
    element: createElement(Home),
  },
  {
    path: '*',
    element: createElement(Redirect, { to: '/', replace: true }),
  },
]

export default routes
