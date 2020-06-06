<template>
  <div>
  <p>{{$route.params.id}}</p>
    <ul>
      <li>id:{{msgDetail.id}}</li>
      <li>title:{{msgDetail.title}}</li>
      <li>content:{{msgDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "MsgDetail",
      data(){
          return{
            msgDetail:{}
          }
      },
      mounted(){
          setTimeout(()=>{
            const  msgDetails=[
              {id:1,title:"til1",content:"con1"},
              {id:2,title:"til2",content:"con2"},
              {id:4,title:"til4",content:"con4"},
            ];
            this.msgDetails=msgDetails;
            const id=this.$route.params.id*1;
            this.msgDetail=msgDetails.find(detail=>detail.id===id)
          },1000)
      },
      watch:{
          $route:function (value) {//params发生改变
            const id=value.params.id*1;
            this.msgDetail=this.msgDetails.find(detail=>detail.id===id)
          }
      }
    }
</script>

<style scoped>

</style>
