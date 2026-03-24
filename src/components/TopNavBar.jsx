import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { RouterLink, useRouteMatches } from '@/app/lib/router'

function resolveBreadcrumbLabel(match) {
  const { handle } = match
  if (!handle || handle.breadcrumb === false) return null
  const { breadcrumb } = handle
  if (breadcrumb == null) return null
  return typeof breadcrumb === 'function' ? breadcrumb(match) : breadcrumb
}

function resolveBreadcrumbTo(match) {
  const { handle } = match
  if (handle?.breadcrumbTo != null) return handle.breadcrumbTo
  return match.pathname
}

export default function TopNavBar() {
  const matches = useRouteMatches()

  const crumbs = matches
    .map((match) => {
      const label = resolveBreadcrumbLabel(match)
      if (!label) return null
      return { key: match.id, label, to: resolveBreadcrumbTo(match) }
    })
    .filter(Boolean)

  return (
    <Box>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1
          if (isLast) {
            return (
              <Typography key={crumb.key} sx={{ color: 'text.primary' }}>
                {crumb.label}
              </Typography>
            )
          }
          return (
            <Link
              key={crumb.key}
              component={RouterLink}
              to={crumb.to}
              underline="hover"
              color="inherit"
            >
              {crumb.label}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}
