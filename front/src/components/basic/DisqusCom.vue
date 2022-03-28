<template>
  <section class='comments' aria-labelledby="comment">
    <h2 id="comment">Comments</h2>
    <Disqus shortname='master_real' />
  </section>
</template>

<script>
import { Disqus } from 'vue-disqus'

export default {
  name: 'PostPage',
  components: {
    Disqus
  }
  // ...
}
</script>

<style>

</style>