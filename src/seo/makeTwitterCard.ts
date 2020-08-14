import { Meta, sharedKeys, SEOConfig, NodeType } from './types'

function getTwitterType (config: SEOConfig) {
  if (config.twitter && config.twitter.type) {
    return config.twitter.type
  }
  switch (config.type) {
    case NodeType.IMAGE:
      return 'summary_large_image'
    case NodeType.VIDEO:
      return 'player'
    default:
      return 'summary'
  }
}

export function makeTwitterCard (config: SEOConfig): Meta[] {
  const meta: Meta[] = [{
    name: 'card',
    content: getTwitterType(config)
  }]

  for (const key of sharedKeys) {
    if (config[key]) {
      meta.push({
        name: key,
        content: config[key]!
      })
    }
  }

  if (config.twitter) {
    for (const key of <const>['site', 'creator']) {
      if (config.twitter[key]) {
        meta.push({
          name: key,
          content: config.twitter[key]!
        })
      }
    }
  }

  return meta
}