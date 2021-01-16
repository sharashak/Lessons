<template>
  <div id="app">
    <div class="row">
      <div class="col-md-3 col-sm-12" >
        <router-link
            class="message-preview-item"
            tag="div"
            :to="'/dialogs/' + preview.id"
            v-for="preview in PreviewСhatMessages"
            :key="preview.id">
          <chat-message
              :avatarImg="preview.avatarImg"
              :userName="preview.userName"
              :message="preview.message"
              :isMy="preview.isMy"
              :prevMessage="{isMy: true}"
              :id="preview.id"
          ></chat-message>
        </router-link>
      </div>
      <div class="col-md-9 col-sm-12">
        <router-view></router-view>
        <chat-message-form />
      </div>
    </div>

  </div>
</template>

<script>


import ChatMessageForm from "@/components/chat/ChatMessageForm";
import ChatMessage from "@/components/chat/chat-message/ChatMessage";

export default {
  name: 'App',
  components: {
    ChatMessageForm,
    ChatMessage
  },
  data() {
    return {
      PreviewСhatMessages: [
        {
          id: 1,
          avatarImg: "https://via.placeholder.com/80",
          userName: "Valodya",
          message: 'Privet Ueban',
          isMy: false,
          prevMessage: {isMy: true}
        },
        {
          id: 2,
          avatarImg: "https://via.placeholder.com/80",
          userName: "Ueban",
          message: 'Privet Valodya',
          isMy: false,
          prevMessage: {isMy: true}
        }
      ]
    }
  }
}
</script>

<style>
.message-preview-item {
  cursor: pointer;
  margin-bottom: 10px;
}

</style>
