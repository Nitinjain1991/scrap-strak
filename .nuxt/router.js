import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39c642a9 = () => interopDefault(import('..\\pages\\Stark-ai-homepage1.vue' /* webpackChunkName: "pages/Stark-ai-homepage1" */))
const _39d45a2a = () => interopDefault(import('..\\pages\\Stark-ai-homepage2.vue' /* webpackChunkName: "pages/Stark-ai-homepage2" */))
const _35629876 = () => interopDefault(import('..\\pages\\Stark-ai-v1.vue' /* webpackChunkName: "pages/Stark-ai-v1" */))
const _35466974 = () => interopDefault(import('..\\pages\\Stark-ai-v2.vue' /* webpackChunkName: "pages/Stark-ai-v2" */))
const _352a3a72 = () => interopDefault(import('..\\pages\\Stark-ai-v3.vue' /* webpackChunkName: "pages/Stark-ai-v3" */))
const _350e0b70 = () => interopDefault(import('..\\pages\\Stark-ai-v4.vue' /* webpackChunkName: "pages/Stark-ai-v4" */))
const _34f1dc6e = () => interopDefault(import('..\\pages\\Stark-ai-v5.vue' /* webpackChunkName: "pages/Stark-ai-v5" */))
const _2bbf65f6 = () => interopDefault(import('..\\pages\\videoprofile.vue' /* webpackChunkName: "pages/videoprofile" */))
const _4ab34aaa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Stark-ai-homepage1",
    component: _39c642a9,
    name: "Stark-ai-homepage1"
  }, {
    path: "/Stark-ai-homepage2",
    component: _39d45a2a,
    name: "Stark-ai-homepage2"
  }, {
    path: "/Stark-ai-v1",
    component: _35629876,
    name: "Stark-ai-v1"
  }, {
    path: "/Stark-ai-v2",
    component: _35466974,
    name: "Stark-ai-v2"
  }, {
    path: "/Stark-ai-v3",
    component: _352a3a72,
    name: "Stark-ai-v3"
  }, {
    path: "/Stark-ai-v4",
    component: _350e0b70,
    name: "Stark-ai-v4"
  }, {
    path: "/Stark-ai-v5",
    component: _34f1dc6e,
    name: "Stark-ai-v5"
  }, {
    path: "/videoprofile",
    component: _2bbf65f6,
    name: "videoprofile"
  }, {
    path: "/",
    component: _4ab34aaa,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
