import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
)

export const menuDrawerSx = {
  root: { display: 'flex' },
  drawerHeaderContent: (open) => ({
    flexGrow: 1,
    minWidth: 0,
    mr: 1,
    pl: 1,
    display: open ? 'block' : 'none',
    overflow: 'hidden',
  }),
  listItem: { display: 'block' },
  listItemButton: (open) => [
    { minHeight: 48, px: 2.5 },
    open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
  ],
  listItemIcon: (open) => [
    { minWidth: 0, justifyContent: 'center' },
    open ? { mr: 3 } : { mr: 'auto' },
  ],
  listItemText: (open) => [open ? { opacity: 1 } : { opacity: 0 }],
  contentHeader: { p: 2, justifyContent: 'flex-start' },
  content: { p: 2 },
}
