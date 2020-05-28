<template>
  <li @mouseleave="handle(false)" @mouseenter="handle(true)" :style="{background:bgCol}" >
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.til}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delTodo">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js';

    export default {
      name: "ToDoItem",
      props:{
          todo:Object,
        index:Number
      },
      data(){
        return{
        bgCol:"white",
          isShow:false
        }
      },
      methods:{
        handle(isEnter){
          if(isEnter){
            this.bgCol='#aaaaaa';
            this.isShow=true;
          }else {
            this.bgCol='white';
            this.isShow=false;
          }
        },
        delTodo(){
          //this.del(this.index);
          //发布消息
          PubSub.publish("del",this.index)
        }
      }
    }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }
</style>
