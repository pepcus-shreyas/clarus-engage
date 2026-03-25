import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Loader from '@/components/Loader'
import { useTodosQuery } from '@/hooks/useTodosQuery'
import { useTasksStore } from '@/stores/tasksStore'

function Tasks() {
  const { isFetching } = useTodosQuery()
  const filteredIds = useTasksStore((s) => s.filteredIds)
  const items = useTasksStore((s) => s.items)

  if (isFetching) {
    return <Loader aria-label="Loading tasks" />
  }

  return (
    <Box>
      <Typography variant="h6" component="h1" gutterBottom>
        Tasks
      </Typography>
      <List dense disablePadding>
        {filteredIds.map((id) => {
          const task = items[String(id)]
          return (
            <ListItem key={id} disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary={task?.title ?? `Task ${id}`} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default Tasks
