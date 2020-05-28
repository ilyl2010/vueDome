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
    export default {
        name: "App",
        data(){
          return{
            repoUrl:'',
            repoName:''
          }
        }
    }
</script>

<style scoped>

</style>
