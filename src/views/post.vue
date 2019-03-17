<template>
  <div>
    <Heading/>
    <div id="content-body" class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-layout md-xsmall-size-50 md-small-size-50 md-medium-size-50 md-large-size-40 md-xlarge-size-40">
        <md-card>
          <md-card-header>
            <div class="md-title">{{ data.title }}</div>
          </md-card-header>
          <md-card-content>
            {{ data.body }}
          </md-card-content>
          <hr />
          <h3 style="margin-left:10px">Comment</h3>
          <md-card-content v-for="item of comment" :key="item.id">
            <div class="md-layout-item comment">
              <md-card>
                <md-card-header>
                  {{ item.email }}
                </md-card-header>
                <md-card-content>
                  {{ item.body }}
                </md-card-content>
              </md-card>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>

import Heading from '@/components/Heading.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Heading
  },
  data() {
    return {
      data: {},
      id: this.$route.params.id,
      comment: []
    }
  },
  beforeMount() {
    axios
      .get(`${process.env.VUE_APP_APIURI}posts/${this.id}`)
      .then((result) => {
        this.data = result.data
      })
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_APIURI}comments?postId=${this.id}`)
      .then((result) => {
        this.comment = result.data
      })
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variable';
</style>
