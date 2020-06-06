<template>
    <ul>
      <li v-for="(nwS,index) in newsATTR" :key="index">
      {{nwS}}
      </li>
    </ul>
</template>

<script>
    export default {
        name: "News",
      data(){
          return{
            newsATTR:["new1",'new2','new3']
          }
      }
    }
</script>

<style scoped>

</style>
