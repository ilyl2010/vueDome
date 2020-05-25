<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{completeNum}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="delTrue1" v-show="completeNum>0">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name: "ToDoFooter",
      props:{
        todos:Array,
        delTrue:Function,
        checkALL:Function
      },
      methods:{
        delTrue1(){
          this.delTrue();
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
      }
    }
</script>

<style scoped>

</style>
