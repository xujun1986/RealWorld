<template>
  <div class="auth-page">
  <div class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
        <p class="text-xs-center">
          <!-- <a href="">Have an account?</a> -->
          <nuxt-link to="/login" v-if="!isLogin">Have an account?</nuxt-link>
          <nuxt-link to="/register" v-else>Need an account?</nuxt-link>
        </p>
        <ul class="error-messages">
          <template v-for="(messages, field) in errors">
            <li v-for="(message, index) in messages" :key="index">
              {{ field }} {{ messages}}
            </li>
          </template>
        </ul>
        <form @submit.prevent="onSubmit">
          <fieldset class="form-group" v-if="!isLogin">
            <input class="form-control form-control-lg" required type="text" placeholder="Your Name" v-model="user.username">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" required type="email" placeholder="Email" v-model="user.email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" required type="password" placeholder="Password" v-model="user.password" minlength="8">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{ isLogin ? 'Sign in' : 'Sign up' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// 仅在客户端加载js-cookie
const Cookie = process.client ? require('js-cookie'): undefined
import { login, register } from '@/api/user'
export default {
  name: 'LoginPage',
  middleware: 'notAuthenticated',
  computed: {
    isLogin () {
      return this.$route.name === 'login'
    }
  },
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {} // 错误信息
    }
  },
  methods: {
    async onSubmit () {
      try {
        // 提交表单，请求登录
        const { data } = this.isLogin ? await login({
          user: this.user
        }): await register({
          user: this.user
        })
        console.log('data', data)
        // 保存用户的登录状态
        this.$store.commit('setUser', data.user)

        // 为了防止刷新页面数据丢失，数据需要持久化
        Cookie.set('user', data.user)
        // 跳转到首页
        this.$router.push('/')
      }
      catch (err) {
        console.log('请求失败', err)
        console.dir(err)
        this.errors = err.response.data.errors
      }
    }
  }
}
</script>

<style scoped>

</style>
