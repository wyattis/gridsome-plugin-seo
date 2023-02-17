⚠️⚠️ Discontinued project ⚠️⚠️
# Gridsome SEO plugin
Simplify the addition of meta tags helpful for SEO such as keywords, description and rich media formats like open graph and twitter cards.

This plugin is just wrapping the functionality of the [Nuxt-SEO](https://github.com/TiagoDanin/Nuxt-SEO) plugin.

## Install
- `npm i gridsome-plugin-seo --save`
- `yarn add gridsome-plugin-seo`

## Usage

### `gridsome.config.js`
```javascript
module.exports = {
  plugins: [{
    use: 'gridsome-plugin-seo'
  }]
}
```

### `Index.vue` or other pages and templates
```vue
<script>
export default {
  metaInfo () {
    return this.$seo({
      title: 'My page', // Uses the titleTemplate in Gridsome config
      description: 'My description',
      keywords: 'one,two',
      openGraph: {
        title: 'My site',
        type: 'website'
      },
      twitter: {
        title: 'My site',
        type: 'summary'
      },
      link: [],   // any links
      script: []  // any scripts
    })
  }
}
</script>

```

## Options
All available options in [Nuxt-SEO docs](https://github.com/TiagoDanin/Nuxt-SEO#module-options) are supported.

See the [available schema](https://github.com/TiagoDanin/Nuxt-SEO/blob/de832e109afc0af7af59440ca4850794063cc972/lib/module.js#L17).
