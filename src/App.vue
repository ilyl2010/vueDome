<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <ToDoHeader ref="header"/>
        <ToDoList :todos="todos"  />
        <!--<ToDoFooter :delTrue="delTrue" :todos="todos" :checkALL="checkALL"/>-->
        <ToDoFooter>
          <input type="checkbox" v-model="isCheck" slot="checkall"/>
          <span slot="count">已完成{{completeNum}} / 全部{{todos.length}}</span>
          <button class="btn btn-danger" @click="delTrue" v-show="completeNum>0" slot="delete">清除已完成任务</button>
        </ToDoFooter>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js';
  import ToDoFooter from './components/ToDoFooter';
  import ToDoHeader from './components/ToDoHeader';
  import ToDoList from './components/ToDoList';
  import storageUtil from './util/storageUtil'

    export default {
        name: "App",
      components:{ToDoFooter,ToDoHeader,ToDoList},
      data(){
          return{
            //从localstorage读取数据
          todos:storageUtil.readTodos()
        }
      },
      computed:{
        completeNum(){
          return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
        },
        isCheck:{
          get(){
            return this.completeNum===this.todos.length
          },
          set(value){
            this.checkALL(value)
          }
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
        PubSub.subscribe('del', (msg,data) =>{
                this.del(data)
        })
      },
      watch:{//监视
          todos:{
            deep:true,//必须是深度监视
            handler:function (value) {
            //把todos最新的值的json数据，保存到localstorage
              storageUtil.saveTodos(value)
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
