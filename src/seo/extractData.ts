import { SEOConfig } from './types'

export type Config = {
  data?: Partial<SEOConfig>
  extract?: {
    default: {}
  }
}
export function extractData (config: {}, ...sources: any[]): SEOConfig {



}