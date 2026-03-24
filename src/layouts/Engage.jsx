import { LayoutOutlet } from '@/app/lib/router'
import DrawerMenu from '@/components/drawer/MenuDrawer'
import TopNavBar from '@/components/breadcrumb/TopNavBar'
import Typography from '@mui/material/Typography'

function Engage() {
  return (
    <DrawerMenu
      title="Engage"
      defaultOpen={false}
      contentHeader={<TopNavBar />}
      content={<LayoutOutlet />}
      drawerHeader={<Typography variant="h6" noWrap component="div">Engage</Typography>}
    />
  )
}

export default Engage
