<template style="background-color:#000;">
  <div class="center-container">
    <md-content class="md-elevation-3">
      <div class="title">
        <img src="@/assets/img/logo.png" alt="logo aja">
        <div class="md-title">Vue Academy</div>
      </div>

      <div class="form">
        <md-field>
          <label>e-mail</label>
          <md-input v-model="data.email" autofocus type="email" required></md-input>
          <span class="md-error">Please insert correct e-mail</span>
        </md-field>

        <md-field md-has-password v-if="!resetPassword">
          <label>Password</label>
          <md-input v-model="data.password" type="password"  required></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between" v-if="!resetPassword">
        <a href="#" @click="resetPassword = true">Reset password</a>
        <md-button class="md-raised md-primary" @click="auth">Log in</md-button>
      </div>

      <div class="actions md-layout md-alignment-center-space-between" v-if="resetPassword">
        <a href="#" @click="resetPassword = false">Log in</a>
        <md-button class="md-raised md-primary" @click="sendReset">Send</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2" />
      </div>
    </md-content>

    <md-dialog-alert
      :md-active.sync="resetSend"
      md-title="Password Reset"
      md-content="We has send link to your email from reset your account"
      md-confirm-text="Ok" />

    <md-dialog-alert
      :md-active.sync="validateError"
      md-title="Validation Error"
      md-content="Please check your input data"
      md-confirm-text="Ok" />

    <md-dialog-alert
      :md-active.sync="wrongEmail"
      md-title="Authentication Error"
      md-content="Your email is not registered"
      md-confirm-text="Ok" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Auth',
  data() {
    return {
      loading: false,
      resetSend: false,
      resetPassword: false,
      validateError: false,
      wrongEmail: false,
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    auth() {
      this.loading = true
      if (!this.validateForm()) {
        this.validateError = true
        this.loading = false
        return false
      }

      axios
        .get(`${process.env.VUE_APP_APIURI}users`)
        .then((result) => {
          const { data } = result
          const users = data.find(x => x.email.toLowerCase().trim() === this.data.email.toLowerCase().trim())

          if (users !== undefined) {
            this.loading = false
            localStorage.username = users.username
            localStorage.userId = users.id
            localStorage.isLogin = true
            return this.$router.push('admin')
          }

          this.wrongEmail = true
          this.loading = false
          return false
        })
        .catch(e => console.error(`API Fetch error ${e}`))

      return false
    },

    sendReset() {
      if (this.emailValidate()) {
        this.resetSend = true
      }
      else {
        this.validateError = true
      }
    },

    emailValidate() {
      const pattern = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(this.data.email)
    },

    validateForm() {
      if (!this.emailValidate()) {
        return false
      }

      if ( this.data.password === '') {
        return false
      }

      return true
    }
  }
}
</script>

<style lang="scss" scoped>

  @import '~@/assets/style/variable';

  .center-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background-color: $color-dark-white;

    .title {
      text-align: center;
      margin-bottom: 30px;

      img {
        margin-bottom: 16px;
        max-width: 80px;
      }
    }

    .actions {
      .md-button {
        margin:0;
      }
    }

    .form {
      margin-bottom: 60px;
    }

    .md-content {
      z-index: 1;
      padding:40px;
      width: 100%;
      max-width: 400px;
      position: relative;
      border-radius: $border-radius-default;
    }

    .loading-overlay {
      z-index: 10;
      top: 0;
      left: 0;
      right: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
