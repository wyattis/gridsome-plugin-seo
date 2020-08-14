import VueType from 'vue'
import { MetaInfo } from 'vue-meta'
import { makeRichContent } from './seo/makeRichContent'

export default function (Vue: typeof VueType, options: any, context: any) {
  console.log('gridsome-plugin-seo')
  console.log(Vue, options, context)
  Vue.mixin({
    methods: {
      makeSeoContent (data: any) {
        return makeRichContent(data)
      }
    }
  })
}


declare module 'vue/types/vue' {
  interface Vue {
    makeSeoContent (context: any, opts?: any): MetaInfo
  }
}