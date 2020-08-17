import { createMeta, template } from 'nuxt-seo'
import { merge } from 'lodash'

console.log('template', template)
// add missing templates
const allMeta = merge(template, {
	twitter: {
		image: { content: true }
	}
})

export default function (Vue, defaultOptions, context) {
  Vue.mixin({
    methods: {
      $seo (options) {
        options = merge({}, defaultOptions, options)
        const { title, meta, link, script } = options
        const optsCopy = { title, meta, link, script }
        const nextMeta = createMeta(options, context.head.meta, allMeta)
        return merge({
          meta: nextMeta
        }, optsCopy)
      }
    }
  })
}
