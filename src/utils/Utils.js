/**
 * Normalizes an array of rows with an `id` into `ids` (order preserved) and `items` (map by id).
 *
 * @template {{ id: string | number }} T
 * @param {T[] | null | undefined} rows
 * @returns {{ ids: T['id'][]; items: Record<string, T> }}
 */
export function normalizeById(rows) {
  const ids = []
  const items = {}

  if (!Array.isArray(rows)) {
    return { ids, items }
  }

  for (const row of rows) {
    if (row == null || row.id == null) continue
    const id = row.id
    ids.push(id)
    items[String(id)] = row
  }

  return { ids, items }
}
