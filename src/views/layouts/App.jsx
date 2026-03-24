import { createClientRouter, RouterHost } from '@/app/lib/router'
import routes from '@/config/routes'

const router = createClientRouter(routes)

function App() {
  return <RouterHost router={router} />
}

export default App
