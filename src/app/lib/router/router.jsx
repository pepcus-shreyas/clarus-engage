import { Link, Navigate, Outlet, RouterProvider } from 'react-router-dom'

/** Root component that hosts the router tree. */
export function RouterHost({ router }) {
  return <RouterProvider router={router} />
}

/** Declarative redirect (e.g. catch-all → home). */
export function Redirect(props) {
  return <Navigate {...props} />
}

/** Nested route outlet. */
export function LayoutOutlet() {
  return <Outlet />
}

export function RouterLink(props) {
  return <Link {...props} />
}
