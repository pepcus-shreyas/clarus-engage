import { createHttpClient } from './createHttpClient.js'

/** Shared client: base URL from VITE_ENGAGE_API_HOST unless you use createHttpClient. */
export const defaultHttpClient = createHttpClient()
