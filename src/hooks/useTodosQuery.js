import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '@/services/tasksService'
import { useTasksStore } from '@/stores/tasksStore'

export const todosQueryKey = ['todos']

export function useTodosQuery() {
  const setTasksFromList = useTasksStore((s) => s.setTasksFromList)

  const query = useQuery({
    queryKey: todosQueryKey,
    queryFn: async () => {
      const res = await fetchTodos()
      return res.data
    },
    refetchOnMount: 'always',
  })

  useEffect(() => {
    if (query.data != null) setTasksFromList(query.data)
  }, [query.data, setTasksFromList])

  useEffect(() => {
    if (query.isError) console.error('Tasks: failed to load /todos', query.error)
  }, [query.isError, query.error])

  return {
    /** True only when there is no cached data yet */
    isPending: query.isPending,
    /** True while the queryFn runs (initial load + refetch on mount, etc.) — use for loaders */
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  }
}
