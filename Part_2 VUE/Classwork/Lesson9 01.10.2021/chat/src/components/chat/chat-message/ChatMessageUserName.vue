<template>
  <h5 v-if="isShowed" class="mt-0">
    {{userName}}
  </h5>
</template>

<script>


export default {
  name: 'ChatMessageUserName',
  computed: {
  },
  props: {
    userName: String,
    isShowed: Boolean
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
