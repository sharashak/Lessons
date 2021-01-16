<template>
  <div class="chat-message">
    <chat-message
        v-for="(message, index) in messages[id - 1]"
        :key="message.id"
        :avatarImg="message.avatarImg"
        :userName="message.userName"
        :message="message.message"
        :isMy="message.isMy"
        :prevMessage="getMessageByIndex(index)"
    ></chat-message>
  </div>
</template>

<script>
import ChatMessage from "@/components/chat/chat-message/ChatMessage";

export default {
  name: 'ChatList',
  props: ['id'],
  data() {
    return {
      messages: [
        [
          {
            id: 1,
            userName: "Володя",
            avatarImg: "https://via.placeholder.com/80",
            isMy: true,
            message: "Привет"
          },
          {
            id: 10,
            userName: "Володя",
            avatarImg: "https://via.placeholder.com/80",
            isMy: true,
            message: "Когда вернешь бабки?"
          },
          {
            id: 20,
            userName: "Володя",
            avatarImg: "https://via.placeholder.com/80",
            isMy: true,
            message: "40 тысяч за проживание"
          },
          {
            id: 2,
            userName: "Жека",
            avatarImg: "https://via.placeholder.com/80",
            isMy: false,
            message: "Салам алейкум"
          },
          {
            id: 3,
            userName: "Жека",
            avatarImg: "https://via.placeholder.com/80",
            isMy: false,
            message: "Как дела"
          },
          {
            id: 4,
            userName: "Жека",
            avatarImg: "https://via.placeholder.com/80",
            isMy: false,
            message: "Видел вчера коляна"
          },
          {
            id: 5,
            userName: "Жека",
            avatarImg: "https://via.placeholder.com/80",
            isMy: false,
            message: "Я не верну тебе бабки"
          },
          {
            id: 6,
            userName: "Володя",
            avatarImg: "https://via.placeholder.com/80",
            isMy: true,
            message: "Тебе пизда"
          }
        ],
        [
          {
            id: 1,
            userName: "Володя",
            avatarImg: "https://via.placeholder.com/80",
            isMy: true,
            message: "GGG"
          },
          {
            id: 10,
            userName: "Володя",
            avatarImg: "https://via.placeholder.com/80",
            isMy: true,
            message: "GGG вернешь бабки?"
          },
          {
            id: 20,
            userName: "Володя",
            avatarImg: "https://via.placeholder.com/80",
            isMy: true,
            message: "4Пашел нахуй"
          },
          {
            id: 2,
            userName: "Жека",
            avatarImg: "https://via.placeholder.com/80",
            isMy: false,
            message: "Салам алейкум"
          },
          {
            id: 3,
            userName: "Жека",
            avatarImg: "https://via.placeholder.com/80",
            isMy: false,
            message: "Пампарам"
          },
          {
            id: 4,
            userName: "Жека",
            avatarImg: "https://via.placeholder.com/80",
            isMy: false,
            message: "ААА"
          },
          {
            id: 5,
            userName: "Жека",
            avatarImg: "https://via.placeholder.com/80",
            isMy: false,
            message: "Какие"
          },
          {
            id: 6,
            userName: "Володя",
            avatarImg: "https://via.placeholder.com/80",
            isMy: true,
            message: "делал"
          }
        ],
      ]
      }
    },
  methods: {
    getMessageByIndex(index) {
      let message = this.messages[this.id - 1][index - 1]
      if(message) {
        return message
      } else {
        return {}
      }
    },
  },
  components: {
    ChatMessage,
  }
}
</script>

<style scoped>
</style>
