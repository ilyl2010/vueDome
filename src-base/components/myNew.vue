<template>
    <div>
      <p 发布class="msg">{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "myNew",
        data(){    //组件中必须是函数
          return {
            msg:'hello!'
          }
      }
    }
</script>

<style scoped>
  .msg{
    font-size: 50px;
    color: red;
  }
</style>
