<template>
  <div>
    <Heading/>
    <Posts id="content-body"/>
  </div>
</template>

<script>

import Heading from '@/components/Heading.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'home',
  components: {
    Heading,
    Posts
  }
}
</script>
