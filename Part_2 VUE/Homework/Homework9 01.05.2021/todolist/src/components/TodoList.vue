<template>
    <div>
      <submit 
        @addItem="addItem"
        @itemEdited="itemEdited"
        :todoForEdit="todoForEdit"
        :itemEdited="itemEdited"
      >
      </submit>
      <h3>    
        <todo-list-item
            v-for="(todo, index) in todos"
            :key="todo.id"
            :todo="todo"
            :index="index"
            @removeItem="removeItem(index)"
            @editItem="editItem(todo)"
        />
      </h3>
    </div>
    
</template>

<script>

import TodoListItem from "@/components/TodoListItem"
import Submit from "@/components/Submit"

export default {
    props: ["text"],
    components: {
        TodoListItem,
        Submit
    },
    data(){
        return {
            todoForEdit: null,
            todos: [
                {
                    id: 0,
                    title: "Приготовить адовое блюдо",
                    desc: "Пожарить борщ"
                },
                {
                    id: 1,
                    title: "Отправить тачки на экспорт",
                    desc: "Надо угнать Sentinel, Patriot, Infernus..."
                },
                {
                    id: 2,
                    title: "Связать свитер",
                    desc: "Купить крючки для вязания"
                },
                {
                    id: 3,
                    title: "Купить WebStorm",
                    desc: "Ага, щас!"
                },
                {
                    id: 4,
                    title: "Пятый элемент",
                    desc: "Посмотреть фильм?"
                }
            ]
        }
    },
    methods: {
        itemEdited(todo) {
        //Example 1
        //    var todosCopy = [] 
        //    for(var i = 0; i < todos.length; i++) {
        //        var todoElement = todos[i]

        //        if(todo.id != todoElement.id) {
        //             todosCopy[i] = todoElement    
        //        } else {
        //             todosCopy[i] = todo
        //        }
        //    } 
           //Example 2 
           this.todos = this.todos.map((todoElement) => {
                if(todo.id !== todoElement.id) {
                    return todoElement    
                } else {
                    return todo
                }
            })
        
            this.todoForEdit = null
        },
        editItem(todo) {
            this.todoForEdit = todo
        },
        removeItem(index) {
            this.todos.splice(index, 1)
        },
        addItem(todo) {
            todo.id = this.todos.length + 1
            this.todos.unshift(todo)
        },
    }
}
</script>

<style>
</style>