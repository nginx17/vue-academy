<template>
  <div>
    <md-toolbar md-elevation="1" class="md-primary">
      <h3 class="md-title" @click="goHome">Vue Academy</h3>
      <md-button v-if="!isLogin" href="/authorization" >Login</md-button>
      <md-button v-else href="/admin">{{userName}}</md-button>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  data() {
    return {
      isLogin: false,
      userName: ''
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
  mounted() {
    if (localStorage.isLogin) {
      this.userName = localStorage.username
      this.isLogin = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-toolbar {
    position:fixed !important;
  }

  .md-title {
    cursor:pointer;
    flex:1;
  }
</style>
