<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <h3 class="md-title" style="flex:1">Vue Academy</h3>
        <md-button @click="logout">Logout</md-button>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-accent">
          <span>Navigation</span>
        </md-toolbar>

        <md-list>
          <md-list-item @click="go('post')">
            <span class="md-list-item-text">List Post</span>
          </md-list-item>

          <md-list-item @click="go('post/create')">
            <span class="md-list-item-text">Create Post</span>
          </md-list-item>

          <md-list-item @click="logout">
            <span class="md-list-item-text">Logout</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Template',
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
    logout() {
      localStorage.clear()
      return this.$router.push('/')
    },
    go(uri) {
      console.log(uri)
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-list-item {
    cursor: pointer;
  }
</style>
