import { QueryClientProvider } from '@tanstack/react-query'
import { createClientRouter, RouterHost } from '@/app/lib/router'
import { queryClient } from '@/app/lib/query/queryClient'
import routes from '@/config/routes'

const router = createClientRouter(routes)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterHost router={router} />
    </QueryClientProvider>
  )
}

export default App
