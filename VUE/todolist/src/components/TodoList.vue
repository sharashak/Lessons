<template>
    <div>
      <h3>
        <todo-list-item
            v-for="(todo, index) in todos"
            :key="todo.id"
            :todo="todo"
            :index="index"
            @removeItem="removeItem"
            @addItem="addItem"
        />
      </h3>
    </div>
    
</template>

<script>

import TodoListItem from "@/components/TodoListItem"

export default {
    props: ["text"],
    components: {
        TodoListItem
    },
    data(){
        return {
            todos: [
                {
                    id: 0,
                    title: "Первый элемент",
                    desc: "А как?"
                },
                {
                    id: 1,
                    title: "Второй элемент",
                    desc: "А как какать?"
                },
                {
                    id: 2,
                    title: "Третий элемент",
                    desc: "А как какать в свитере?"
                },
                {
                    id: 3,
                    title: "Четвёртый элемент",
                    desc: "А как какать вверх тормашками?"
                },
                {
                    id: 4,
                    title: "Пятый элемент",
                    desc: "А как какать вверх тормашками, чтобы не обосрать свитер?"
                }
            ]
        }
    },
    methods: {
        removeItem(id) {
            this.todos.splice(id, 1)
        },
        addItem() {
            console.log("Hold up")
        }
    }
}
</script>

<style>
</style>