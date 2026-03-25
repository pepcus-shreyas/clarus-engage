import { create } from 'zustand'
import { normalizeById } from '@/utils'

export const useTasksStore = create((set) => ({
  ids: [],
  items: {},
  filteredIds: [],

  /**
   * @param {Array<{ id: string | number }>} list
   */
  setTasksFromList(list) {
    const { ids, items } = normalizeById(list)
    set({
      ids,
      items,
      filteredIds: [...ids],
    })
  },

  setFilteredIds(filteredIds) {
    set({ filteredIds })
  },

  resetTasks() {
    set({ ids: [], items: {}, filteredIds: [] })
  },
}))
