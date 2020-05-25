<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
<Add :addComent="addComent"/>
<List :coments="coments" :delComent="delComent"/>
    </div>
  </div>
</template>

<script>
  import Add from "./components/Add";
  import List from "./components/List";
    export default {
      name: "App",
      components:{Add,List},
      data(){
          return{
            coments:[//数据在哪个组件，更新数据的行为就定义在此组件
              {
                name:"jack",
                content:"so so"
              },
              {
                name:"BOB",
                content:"so easy"
              },
              {
                name:"rose",
                content:"hard"
              }
            ]
          }
      },
      methods:{
        addComent(coment){
          this.coments.unshift(coment);
        },
        delComent(index){
          this.coments.splice(index,1);
        }
      }
    }
</script>

<style scoped>

</style>
