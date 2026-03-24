import { LayoutOutlet } from '@/app/lib/router'
import DrawerMenu from '@/components/drawer/MenuDrawer'
import TopNavBar from '@/components/breadcrumb/TopNavBar'

function Engage() {
  return (
    <div>
      <DrawerMenu />
      <TopNavBar />
      <LayoutOutlet />
    </div>
  )
}

export default Engage
