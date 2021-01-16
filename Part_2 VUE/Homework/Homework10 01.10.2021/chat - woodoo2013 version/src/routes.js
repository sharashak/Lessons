import VueRouter from 'vue-router'
import ChatList from "@/components/chat/ChatList";

export default new VueRouter({
    routes: [
        {
            path: '/dialogs/:id',
            component: ChatList,
            props: true
        }
    ],
    mode: 'history'

})