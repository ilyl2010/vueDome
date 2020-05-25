<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:" @click="delComents">删除</a>
    </div>
    <p class="user"><span >{{coment.name}}</span><span>说:</span></p>
    <p class="centence">{{coment.content}}</p>
  </li>
</template>

<script>
    export default {
        name: "Item",
      //这种方式指定了属性名和属性值
      props:{
          coment:Object,
        delComent:Function,
        index:Number
      },
      methods:{
        delComents(){
          const {coment,index,delComent}=this;
          if(window.confirm(`确认删除${coment.name}？`)){
            delComent(index);
          }
        }
      }
    }
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
