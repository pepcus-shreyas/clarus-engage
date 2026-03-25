import { defaultHttpClient } from '@/app/lib/http'

/** @returns {Promise<{ data: unknown }>} */
export function fetchTodos() {
  return defaultHttpClient.get('/todos')
}
