import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { RouterLink, useRouteLocation } from '@/app/lib/router';
import { Drawer, DrawerHeader, menuDrawerSx } from '@/styles/components/MenuDrawer';

export default function MenuDrawer({
  drawerHeader,
  defaultOpen = false,
  contentHeader,
  content,
  drawerNavItems = [],
}) {
  const { pathname } = useRouteLocation();
  const [open, setOpen] = React.useState(defaultOpen);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={menuDrawerSx.root}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box sx={menuDrawerSx.drawerHeaderContent(open)}>
            {drawerHeader}
          </Box>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerNavItems.map((item) => {
            const IconComponent = item.icon
            const linkProps = item.to
              ? { component: RouterLink, to: item.to }
              : {}
            return (
              <ListItem key={item.key} disablePadding sx={menuDrawerSx.listItem}>
                <ListItemButton
                  {...linkProps}
                  selected={Boolean(item.to && pathname === item.to)}
                  sx={menuDrawerSx.listItemButton(open)}
                >
                  <ListItemIcon sx={menuDrawerSx.listItemIcon(open)}>
                    {IconComponent ? <IconComponent /> : null}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={menuDrawerSx.listItemText(open)}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
      <Box>
        <DrawerHeader sx={menuDrawerSx.contentHeader}>
          {contentHeader}
        </DrawerHeader>
        <Box sx={menuDrawerSx.content}>
          {content}
        </Box>
      </Box>
    </Box>
  );
}