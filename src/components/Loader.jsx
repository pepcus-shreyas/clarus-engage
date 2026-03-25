import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function Loader({ 'aria-label': ariaLabel = 'Loading', sx, ...boxProps }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: 200, ...sx }}
      {...boxProps}
    >
      <CircularProgress aria-label={ariaLabel} />
    </Box>
  )
}

export default Loader
