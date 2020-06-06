<template>
  <div>
  <ul>
    <li v-for="message in messages" :key="message.id">
      <router-link :to="`/home/message/detail/${message.id}`">{{message.msg}}</router-link>
    </li>
  </ul>
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
