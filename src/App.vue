<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd2}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    data(){
      return{

      }
    },
    computed:{
      ...mapState(['count']),
      ...mapGetters({evenOrOdd2:'evenOrOdd'})
    },
    methods:{
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    }
  }
</script>

<style>

</style>
