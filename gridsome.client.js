import { createMeta, template } from 'nuxt-seo'
import { merge } from 'lodash'

// add missing templates
template = merge(template, {
	twitter: {
		image: {content: true}
	}
})

export default function (Vue, defaultOptions, context) {
  Vue.mixin({
    methods: {
      $seo (options) {
        options = {
          ...defaultOptions,
          ...options
        }
        const meta = createMeta(options, context.head.meta, template)
        return {
          meta
        }
      }
    }
  })
}
