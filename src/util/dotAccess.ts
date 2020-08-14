import { pathAccess } from './pathAccess'

export function dotAccess<T = any> (obj: any, key: string): T {
  const parts = key.split('.')
  return pathAccess(obj, parts)
}