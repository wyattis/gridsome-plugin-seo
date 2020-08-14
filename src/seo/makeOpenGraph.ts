import { SEOConfig, Meta, sharedKeys, NodeType } from './types'

function getOGType (config: SEOConfig) {
  if (config.openGraph && config.openGraph.type) {
    return config.openGraph.type
  }
  switch (config.type) {
    case NodeType.IMAGE:
      return 'image'
    case NodeType.VIDEO:
      return 'video'
    default:
      return 'website'
  }
}

export function makeOpenGraph (config: SEOConfig): Meta[] {
  const meta: Meta[] = [{
    name: 'type',
    content: getOGType(config)
  }]
  for (const key of sharedKeys) {
    if (config[key]) {
      meta.push({
        name: `${key}`,
        content: config[key]!
      })
    }
  }

  if (config.url) {
    meta.push({
      name: 'url',
      content: config.url
    })
  }

  // if (typeof res.image === 'string') {
  //   meta.push({
  //     name: 'og:image',
  //     content: res.image
  //   })
  // } else {
  //   // TODO: Insert OpenGraph image stuff
  // }
  // if (typeof res.video === 'string') {
  //   meta.push({
  //     name: 'og:video',
  //     content: res.video
  //   })
  // } else {
  //   // TODO: Insert OpenGraph video stuff
  // }

  return meta
}