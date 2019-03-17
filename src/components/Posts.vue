<template>
  <div class="md-layout md-alignment-top-left">
    <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-medium-size-33 md-large-size-20 md-xlarge-size-20" v-for="item of posts" :key="item.id">
      <md-card md-with-hover>
        <div @click="detailPost(item.id)">
          <md-card-header>
            <div class="md-title">{{ item.title }}</div>
          </md-card-header>
          <md-card-content>
            {{ item.body }}
          </md-card-content>
        </div>
      </md-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts',
  data() {
    return {
      posts: []
    }
  },
  beforeMount() {
    this.getPost()
  },
  methods: {
    getPost() {
      axios
        .get(`${process.env.VUE_APP_APIURI}posts`)
        .then((result) => {
          this.posts = result.data
        })
    },
    detailPost(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~@/assets/style/variable';

  .md-layout {
    .md-layout-item {
      margin-top: $margin-default+$margin-default;

      .md-card {
        margin:auto;
        width:95%;
      }
    }
  }
</style>
