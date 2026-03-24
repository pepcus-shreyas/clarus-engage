/**
 * Attach axios interceptors. Default API host is applied when the client is
 * created (see createHttpClient); per-request overrides use config.baseURL.
 */
export function applyHttpInterceptors(axiosInstance) {
  axiosInstance.interceptors.request.use(
    (config) => {
      // Example: attach auth when you have a session store
      // const token = getAccessToken()
      // if (token) config.headers.Authorization = `Bearer ${token}`
      return config
    },
    (error) => Promise.reject(error),
  )

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  )
}
