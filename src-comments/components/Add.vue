<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: "Add",
      props:{
        addComent:{ //指定属性名和属性值必要性
          type:Function,
          required:true
        }
      },
      data(){
          return{
            name:"",
            content:""
          }
      },
      methods:{
          add(){
            //1检查输入数据的合法性
            const name=this.name.trim();
            const content=this.content.trim();
            if(!name ||!content){
              alert("姓名与评论不能为空");
              return
            }
            //2根据输入的数据，封装成一个coment对象
            const coment={
              name,
              content
            }
            //3添加到coments中
            this.addComent(coment);
            //4清楚输入
            this.name="";
            this.content=""
          }
      }
    }
</script>

<style scoped>

</style>
