<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import  PubSub from 'pubsub-js'
    export default {
        name: "Search",
      data(){
        return{
          searName:""
        }
      },
      methods:{
        search(){
          const searName=this.searName.trim();
          if(searName){
            PubSub.publish("search",searName)
          }
        }
      }
    }
</script>

<style scoped>

</style>
