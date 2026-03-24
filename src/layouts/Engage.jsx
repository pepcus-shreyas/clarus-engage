import { LayoutOutlet } from '@/app/lib/router'
import DrawerMenu from '@/components/drawer/MenuDrawer'
import TopNavBar from '@/components/breadcrumb/TopNavBar'
import Typography from '@mui/material/Typography'
import { ENGAGE_DRAWER_NAV_ITEMS } from '@/config/layouts/Engage'

function Engage() {
  return (
    <DrawerMenu
      defaultOpen={true}
      contentHeader={<TopNavBar />}
      content={<LayoutOutlet />}
      drawerHeader={<Typography variant="h6" noWrap component="div">Engage</Typography>}
      drawerNavItems={ENGAGE_DRAWER_NAV_ITEMS}
    />
  )
}

export default Engage
