<template>
  <div>
  <ul>
    <li v-for="message in messages" :key="message.id">
      <router-link :to="`/home/message/detail/${message.id}`">{{message.msg}}</router-link>
      <button @click="pushShow(message.id)">push</button>
      <button @click="replaceShow(message.id)">replace</button>
    </li>
  </ul>
    <button @click="$router.back()">回退</button>
    <hr>
  <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Messages",
      data(){
          return{
            messages:[

            ]
          }
      },
      methods:{
        pushShow(id){//栈结构
          this.$router.push(`/home/message/detail/${id}`)
        },
        replaceShow(id){//队列结构
          this.$router.replace(`/home/message/detail/${id}`)
        }
      },
      mounted(){
          setTimeout(()=>{
            const messages=[
              {id:1,msg:'message1'},
              {id:2,msg:'message2'},
              {id:4,msg:'message4'},
            ];
            this.messages=messages;
          },1000)
      }
    }
</script>

<style scoped>

</style>
