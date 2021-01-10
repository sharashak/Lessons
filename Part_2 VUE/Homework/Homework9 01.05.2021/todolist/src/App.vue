<template>
  <div id="app">
    <h1 class="container">TodoList - Vue.js 2.x</h1>
    <todo-list>    
      
    </todo-list>

    <footer class="container">2020-2021 by SchoolBoysCrew</footer>
  </div>
</template>

<script>

import TodoList from "@/components/TodoList"
export default {
  components: {
    TodoList
    },
  data() {
    return {
      
    }
  }
}

</script>

<style>
body {
  background-color: #97999B;
}

#app {
    font-family: Helvetica, sans-serif;
    text-align: center;
}

h1 {
  margin: 10px;
  background-color: #F9E547;
}

footer {
  margin: 10px;
}
</style>