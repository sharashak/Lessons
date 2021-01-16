<template>
    <img
        v-if="isNeedImage"
        v-bind:src="img" class="mr-3"
        alt=""
    >
    <div
        v-else-if="isNeedImage"
        style="width: 95px;"
    >
    </div>
</template>

<script>


export default {
  name: 'ChatMessageAvatar',
  props: {
    isNeedMargin: Boolean,
    isNeedImage: Boolean,
    img: String
  },
  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
