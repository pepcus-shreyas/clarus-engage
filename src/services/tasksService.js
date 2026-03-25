import { defaultHttpClient as apiClient } from '@/app/lib/http'

/** @returns {Promise<{ data: unknown }>} */
export function fetchTodos() {
  return apiClient.get('/todos')
}
