<template>
  <div id="app">

    <chat-message
      v-for="(message, index) in messages" 
      v-bind:key="message.id"
      :avatarImg="message.avatarImg"
      :userName="message.userName"
      :message="message.message"
      :isMy="message.isMy"
      :prevMessage="getMessageByIndex(index - 1)"
    ></chat-message>

    <div class="message-edit">
      <input v-model="message">
      <button v-on:click="sendMessage">Отправить</button>
    </div>
    
  </div>

 </template>

<script>
    import ChatMessage from './components/ChatMessage'
    export default {
        name: 'App',
        components: {
          ChatMessage
        },
        methods: {
          getMessageByIndex(index) {
              let message = this.messages[index]
              if(message) {
                return message
              } else {
                return {}
              }
          },
          sendMessage() {
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
        data() {
          return {
            message: "Да-да, соси хуяку",
            messages: [
              {
                id: 1,
                userName: "Володя", 
                avatarImg: "https://via.placeholder.com/80",
                isMy: true,
                message: "Привет"
              },
              {
                id: 2,
                userName: "Володя", 
                avatarImg: "https://via.placeholder.com/80",
                isMy: true,
                message: "Когда вернешь бабки?"
              },
              {
                id: 3,
                userName: "Володя", 
                avatarImg: "https://via.placeholder.com/80",
                isMy: true,
                message: "40 тысяч за проживание"
              },
              {
                id: 4,
                userName: "Жека", 
                avatarImg: "https://via.placeholder.com/80",
                isMy: false,
                message: "Салам алейкум"
              },
              {
                id: 5,
                userName: "Жека", 
                avatarImg: "https://via.placeholder.com/80",
                isMy: false,
                message: "Как дела"
              },
              {
                id: 6,
                userName: "Жека", 
                avatarImg: "https://via.placeholder.com/80",
                isMy: false,
                message: "Видел вчера коляна"
              },
              {
                id: 7,
                userName: "Жека", 
                avatarImg: "https://via.placeholder.com/80",
                isMy: false,
                message: "Я не верну тебе бабки"
              },
              {
                id: 8,
                userName: "Володя", 
                avatarImg: "https://via.placeholder.com/80",
                isMy: true,
                message: "Тебе пизда"
              }
            ]
          }
        }
    }
</script>

<style>

</style>