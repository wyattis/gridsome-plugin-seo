import { createMeta, template } from 'nuxt-seo'
import { merge } from 'lodash'

console.log('template', template)
// add missing templates
const allMeta = merge(template, {
	twitter: {
		image: {content: true}
	}
})

export default function (Vue, defaultOptions, context) {
  Vue.mixin({
    methods: {
      $seo (options) {
        options = merge({}, defaultOptions, options)
        const meta = createMeta(options, context.head.meta, allMeta)
        return {
          meta
        }
      }
    }
  })
}
