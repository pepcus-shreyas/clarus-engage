import axios from 'axios'
import { getDefaultApiHost } from './env.js'
import { applyHttpInterceptors } from './interceptors.js'
import { wrapAxiosInstance } from './wrapAxiosInstance.js'

/**
 * @param {object} [options]
 * @param {string} [options.baseURL] - Omit to use VITE_ENGAGE_API_HOST from .env
 * @param {number} [options.timeout]
 * @param {Record<string, string>} [options.headers]
 * @param {import('axios').AxiosRequestConfig} [options.axiosConfig] - Extra axios.create options
 */
export function createHttpClient(options = {}) {
  const fromEnv = getDefaultApiHost()
  const baseURL =
    (options.baseURL ?? fromEnv).replace(/\/+$/, '') || undefined

  const instance = axios.create({
    baseURL,
    timeout: options.timeout ?? 30000,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options.axiosConfig,
  })

  applyHttpInterceptors(instance)

  return wrapAxiosInstance(instance)
}
