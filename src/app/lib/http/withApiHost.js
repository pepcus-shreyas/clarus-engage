/**
 * Merge a different API origin into a request config (axios uses config.baseURL per call).
 *
 * @example
 * defaultHttpClient.get('/users', withApiHost('https://other-service.example'))
 */
export function withApiHost(host, config = {}) {
  const baseURL = (host ?? '').replace(/\/+$/, '') || undefined
  return { ...config, baseURL }
}
