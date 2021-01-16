<template>
  <div id="app">
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <chat-message
            avatarImg="https://via.placeholder.com/80"
            userName="Zheka"
            message="Q"
            :isMy="false"
            :prevMessage="{isMy: true}"
        ></chat-message>
        <chat-message
            avatarImg="https://via.placeholder.com/80"
            userName="Valodya"
            message="Q"
            :isMy="false"
            :prevMessage="{isMy: true}"
        ></chat-message>
      </div>
      <div class="col-md-9 col-sm-12">
        <chat-list />
        <chat-message-form />
      </div>
    </div>
  </div>
</template>

<script>

import ChatList from "@/components/chat/ChatList";
import ChatMessageForm from "@/components/chat/ChatMessageForm";
import ChatMessage from "@/components/chat/chat-message/ChatMessage";

export default {
  name: 'App',
  components: {
    ChatMessageForm,
    ChatList,
    ChatMessage
  },
  data() {
    return {
      message: "",
    }
  }
}
</script>

<style>
</style>
