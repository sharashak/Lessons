<template>
  <div class="media">
    <chat-message-avatar
        :isNeedImage="isNeedLeftImage"
        :isNeedMatgin="isNeedLeftMargin"
        :img="avatarImg"/>

    <chat-message-body :isMy="isMy">
      <chat-message-user-name
          :isShowed="isNeedUserName"
          :userName="userName"
      />
      <chat-message-text :text="message"/>
    </chat-message-body>
    <chat-message-avatar
        :isNeedImage="isNeedRightImage"
        :isNeedMatgin="isNeedRightMargin"
        :img="avatarImg"
    />
  </div>
</template>

<script>
import ChatMessageAvatar from "@/components/chat/chat-message/ChatMessageAvatar"
import ChatMessageBody from "@/components/chat/chat-message/ChatMessageBody";
import ChatMessageUserName from "@/components/chat/chat-message/ChatMessageUserName";
import ChatMessageText from "@/components/chat/chat-message/ChatMessageText";

export default {
  name: 'ChatMessage',
  components: {
    ChatMessageAvatar,
    ChatMessageBody,
    ChatMessageUserName,
    ChatMessageText
  },
  props: {
    avatarImg: String,
    userName: String,
    message: String,
    isMy: Boolean,
    prevMessage: Object
  },
  computed: {
    isNeedLeftImage() {
      return this.isNeedUserName && !this.isMy
    },
    isNeedLeftMargin() {
      return !this.isNeedUserName && !this.isMy
    },
    isNeedUserName() {
      return (this.prevMessage.isMy != this.isMy)
    },
    isNeedRightImage() {
      return this.isNeedUserName && this.isMy
    },
    isNeedRightMargin() {
      return !this.isNeedUserName && this.isMy
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
