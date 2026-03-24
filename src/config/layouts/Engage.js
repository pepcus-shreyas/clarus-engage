import AssignmentIcon from '@mui/icons-material/Assignment'
import ChatIcon from '@mui/icons-material/Chat'
import PeopleIcon from '@mui/icons-material/People'
import AssessmentIcon from '@mui/icons-material/Assessment'
import { ROUTE_PATHS } from '@/config/constants/Routes'

/**
 * Drawer navigation items for the Engage layout.
 * `icon`: MUI SvgIcon component. `to`: absolute path for React Router.
 */
export const ENGAGE_DRAWER_NAV_ITEMS = [
  { key: 'tasks', label: 'Tasks', icon: AssignmentIcon, to: ROUTE_PATHS.TASKS },
  { key: 'conversations', label: 'Conversations', icon: ChatIcon, to: ROUTE_PATHS.CONVERSATIONS },
  { key: 'patients', label: 'Patients', icon: PeopleIcon, to: ROUTE_PATHS.PATIENTS },
  { key: 'reports', label: 'Reports', icon: AssessmentIcon, to: ROUTE_PATHS.REPORTS },
]
