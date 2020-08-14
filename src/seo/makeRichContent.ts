import { SEOConfig } from './types'
import { MetaInfo } from 'vue-meta'
import { makeOpenGraph } from './makeOpenGraph'
import { makeTwitterCard } from './makeTwitterCard'

type SEOFlags = {
  openGraph?: boolean
  twitter?: boolean
}

const defaultConfig = {
  robots: 'all'
}

export function makeRichContent (config: SEOConfig, flags: SEOFlags = { openGraph: true, twitter: true }): MetaInfo {
  config = Object.assign({}, defaultConfig, config)
  const ogMeta = flags.openGraph ? makeOpenGraph(config) : []
  const twitterMeta = flags.twitter ? makeTwitterCard(config) : []
  // TODO: Filter twitter descriptions 
  let basicMeta = []
  if (config.keywords) {
    basicMeta.push({
      name: 'keywords',
      content: config.keywords
    })
  }
  if (config.robots) {
    basicMeta.push({
      name: 'robots',
      content: config.robots
    })
  }
  const meta = basicMeta.concat(ogMeta.map(m => ({
    name: 'og:' + m.name,
    content: m.content
  })), twitterMeta.map(m => ({
    name: 'twitter:' + m.name,
    content: m.content
  })))
  return {
    meta
  }
}