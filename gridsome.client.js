import { createMeta, template } from 'nuxt-seo'

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
