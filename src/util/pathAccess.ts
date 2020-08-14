export function pathAccess<T = any> (obj: any, path: string[]): T {
  for (const k of path) {
    if (obj !== null && typeof obj === 'object' && k in obj) {
      obj = obj[k]
    } else {
      obj = undefined
      break
    }
  }
  return obj
}