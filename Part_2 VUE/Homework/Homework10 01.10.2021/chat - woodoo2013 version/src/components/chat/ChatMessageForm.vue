<template>
  <div class="message-edit">
    <input v-model="message">
    <button v-on:click="sendMessage">Отправить</button>
  </div>
</template>

<script>

export default {
  name: 'ChatMessageForm',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      if(this.message == "") {
        return
      }
      let isMy = Math.random() < 0.5

      this.messages.push({
        id: this.messages.length + 1,
        userName: isMy ? "Володя" : "Жека",
        avatarImg: "https://via.placeholder.com/80",
        isMy: isMy,
        message: this.message
      })

      this.message = ""
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
