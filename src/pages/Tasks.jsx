import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Loader from '@/components/Loader'
import { fetchTodos } from '@/services/tasksService'
import { useTasksStore } from '@/stores/tasksStore'

function Tasks() {
  const [loading, setLoading] = useState(true)
  const filteredIds = useTasksStore((s) => s.filteredIds)
  const items = useTasksStore((s) => s.items)
  const setTasksFromList = useTasksStore((s) => s.setTasksFromList)

  useEffect(() => {
    let cancelled = false

    fetchTodos()
      .then((res) => {
        if (cancelled) return
        setTasksFromList(res.data)
      })
      .catch((err) => {
        if (cancelled) return
        console.error('Tasks: failed to load /todos', err)
      })
      .finally(() => {
        if (cancelled) return
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [setTasksFromList])

  if (loading) {
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
