/** Default Engage API origin from Vite env (must be prefixed with VITE_). */
export function getDefaultApiHost() {
  return (import.meta.env.VITE_ENGAGE_API_HOST ?? '').replace(/\/+$/, '')
}
