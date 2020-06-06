<template>
  <ul>
    <li v-for="(message, index) in messages" :key="index">
      {{message.msg}}
    </li>
  </ul>
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
              {id:3,msg:'message3'},
            ];
            this.messages=messages;
          },1000)
      }
    }
</script>

<style scoped>

</style>
