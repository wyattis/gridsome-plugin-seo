export default function (api: any, options: any) {
  console.log('gridsome-plugin-seo', options)
}

export const defaultOptions = () => ({
  output: {
    openGraph: true,
    twitter: true,
    robots: false
  },
  data: {
    type: 'website'
  },
  extract: {
    default: {
      title: 'title',
      keywords: 'keywords',
      description: 'description',
      image: 'image',
      url: 'path'
    }
  }
})