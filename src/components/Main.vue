<template>
  <div>
  <h2 v-if="firstView">输入用户名搜索</h2>
  <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
  <div class="row" v-for="(user,index) in usrs" :key="index">
    <div class="card">
      <a :href="user.url" target="_blank">
        <img src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Main",
      data(){
          return{
            firstView:true,
            loading:false,
            errorMsg:"",
            usrs:null   //[{url:'',avatar_url:'',name:''}]
          }
      }
    }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
