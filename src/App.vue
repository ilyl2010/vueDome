<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <ToDoHeader ref="header"/>
        <ToDoList :todos="todos" :del="del" />
        <ToDoFooter :delTrue="delTrue" :todos="todos" :checkALL="checkALL"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ToDoFooter from './components/ToDoFooter';
  import ToDoHeader from './components/ToDoHeader';
  import ToDoList from './components/ToDoList';
    export default {
        name: "App",
      components:{ToDoFooter,ToDoHeader,ToDoList},
      data(){
          return{
            //从localstorage读取数据
          todos:JSON.parse(window.localStorage.getItem('todos_key')||'[]')
        }
      },
      methods:{
          add(todo){
            this.todos.unshift(todo);
          },
        del(index){
          this.todos.splice(index,1);
        },
        delTrue(){
            this.todos=this.todos.filter(todo=>!todo.complete)
        },
        checkALL(check){
          this.todos.forEach(todo=>todo.complete=check)
        }
      },
      mounted(){
          this.$refs.header.$on("add",this.add)
      },
      watch:{//监视
          todos:{
            deep:true,//必须是深度监视
            handler:function (value) {
            //把todos最新的值的json数据，保存到localstorage
              window.localStorage.setItem('todos_key',JSON.stringify(value))
            }
          }
      }
    }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
