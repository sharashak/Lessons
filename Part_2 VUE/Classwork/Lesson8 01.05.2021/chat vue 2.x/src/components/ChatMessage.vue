<template>
  <div class="media">
        <img 
            v-if="(prevMessage.isMy != isMy) && isMy == false"
            v-bind:src="avatarImg" class="mr-3" 
            alt=""
        >
        
        <div 
             v-else-if="(prevMessage.isMy == isMy) && isMy == false" 
             style="width: 95px;"
        >
        </div>

        <div 
            class="media-body" 
            :class="{'text-right': isMy}"
        >

            <h5 v-if="(prevMessage.isMy != isMy)" class="mt-0">
                {{userName}}
            </h5>
            {{message}}
        </div>

        <img 
            v-if="(prevMessage.isMy != isMy) && isMy == true"
            v-bind:src="avatarImg"
            class="mr-3" 
            alt=""
        >

        <div 
          v-else-if="(prevMessage.isMy == isMy) && isMy == true"
          style="width: 95px;"
        >
        </div>
   </div>
</template>

<script>

export default {
  name: 'ChatMessage',
  props: {
    avatarImg: String,
    userName: String,
    message: String,
    isMy: Boolean,
    prevMessage: Object
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>