/**
 * Thin wrapper so call sites do not import axios directly (easier to swap later).
 */
export function wrapAxiosInstance(instance) {
  return {
    get: (url, config) => instance.get(url, config),
    post: (url, data, config) => instance.post(url, data, config),
    put: (url, data, config) => instance.put(url, data, config),
    patch: (url, data, config) => instance.patch(url, data, config),
    delete: (url, config) => instance.delete(url, config),
    request: (config) => instance.request(config),
    /** Escape hatch for axios-only features. */
    raw: instance,
  }
}
