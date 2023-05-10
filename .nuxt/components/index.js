export const BtnBig = () => import('../..\\components\\Btn-big.vue' /* webpackChunkName: "components/btn-big" */).then(c => wrapFunctional(c.default || c))
export const BtnSmall = () => import('../..\\components\\Btn-small.vue' /* webpackChunkName: "components/btn-small" */).then(c => wrapFunctional(c.default || c))
export const InterLinks = () => import('../..\\components\\Inter-links.vue' /* webpackChunkName: "components/inter-links" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
