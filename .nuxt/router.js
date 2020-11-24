import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5573be9b = () => interopDefault(import('..\\pages\\layouts' /* webpackChunkName: "" */))
const _55332be6 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _50c1c00a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _457dddbb = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _09042b5e = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _0fb9031b = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2c482108 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _5573be9b,
    children: [{
      path: "",
      component: _55332be6,
      name: "home"
    }, {
      path: "/login",
      component: _50c1c00a,
      name: "login"
    }, {
      path: "/register",
      component: _50c1c00a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _457dddbb,
      name: "profile"
    }, {
      path: "/settings",
      component: _09042b5e,
      name: "settings"
    }, {
      path: "/editor",
      component: _0fb9031b,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _2c482108,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
