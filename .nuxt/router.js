import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _03106df0 = () => interopDefault(import('../pages/layouts' /* webpackChunkName: "" */))
const _c381fa50 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _29d9a090 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _19cae5e0 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _0177259c = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _04ce9526 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _4c365f46 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _03106df0,
    children: [{
      path: "",
      component: _c381fa50,
      name: "home"
    }, {
      path: "/login",
      component: _29d9a090,
      name: "login"
    }, {
      path: "/register",
      component: _29d9a090,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _19cae5e0,
      name: "profile"
    }, {
      path: "/settings",
      component: _0177259c,
      name: "settings"
    }, {
      path: "/editor",
      component: _04ce9526,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _4c365f46,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
