import { createBrowserRouter, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

/** Data router instance (swap implementation here if you change libraries). */
export function createClientRouter(routes) {
  return createBrowserRouter(routes)
}

export function useClientNavigate() {
  return useNavigate()
}

export function useRouteParams() {
  return useParams()
}

export function useRouteLocation() {
  return useLocation()
}

export function useQueryParams() {
  return useSearchParams()
}
