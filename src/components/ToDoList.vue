<template>
  <ul class="todo-main">
  <ToDoItem v-for="(todo,index) in todos" :todo="todo" :key="index" :del="del" :index="index"/>
  </ul>
</template>

<script>
  import ToDoItem from './ToDoItem';
    export default {
        name: "ToDoList",
      components:{ToDoItem},
      props:['todos','del']
    }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }


</style>
