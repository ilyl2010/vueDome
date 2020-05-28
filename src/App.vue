<template>
  <div >
    <div v-if="!repoUrl">
      loading
    </div>
    <div v-else>
      most star repo is <a :href="repoUrl">{{repoName}}</a>
    </div>
  </div>
</template>

<script>
  import axios from  'axios'
    export default {
        name: "App",
        data(){
          return{
            repoUrl:'',
            repoName:''
          }
        },
      mounted(){
          //发ajax请求获取数据
        const url='https://api.github.com/search/repositories?q=vu&sort=stars'
        // this.$http.get(url).then(
        //   response => {//成功回调函数
        //     console.log(response.data) // 得到返回结果数据
        //     const result=response.data;
        //     const mostRopo=result.items[0];
        //     this.repoUrl=mostRopo.html_url;
        //     this.repoName=mostRopo.name;
        //   },
        //   response => {//失败回调函数
        //     console.log(response.data) // 得到返回结果数据
        //     alert("失败")
        //   },
        //)
        axios.get(url).then(
          response => {//成功回调函数
            console.log(response.data) // 得到返回结果数据
            const result=response.data;
            const mostRopo=result.items[0];
            this.repoUrl=mostRopo.html_url;
            this.repoName=mostRopo.name;
          }).catch(error=>{
          alert("失败")
        })
      }
    }
</script>

<style scoped>

</style>
