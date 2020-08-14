import { pathAccess } from "./util/pathAccess"

export function mergeConfig (obj: any, paths: string[][]) {
  const copy = {} as any
  for (const key in obj) {
    if (!paths.find(p => p[0] === key)) {
      copy[key] = obj[key]
    }
  }
  for (const path of paths) {
    const childObj = pathAccess(obj, path)
    if (childObj) {
      Object.assign(copy, childObj)
    }
  }
  return copy
}