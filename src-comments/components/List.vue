<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="coments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
    <Item v-for="(coment,index) in coments " :key="index" :coment="coment" :delComent="delComent"
    :index="index"/>
    </ul>
  </div>
</template>

<script>
  import Item from "./Item"

    export default {
        name: "List",
      //声明接收属性：这个属性就会成为组件对象的属性
      props:['coments','delComent'],
      components:{Item},

    }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }

</style>
