<template>
  <div class="media-body" :class="{'text-right': isMy}">
    <slot></slot>
  </div>
</template>

<script>


export default {
  name: 'ChatMessageBody',
  computed: {
  },
  props: {
    isMy: Boolean
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
