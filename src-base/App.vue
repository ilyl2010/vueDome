<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--3、使用组件-->
    <myNew/>
  </div>
</template>

<script>
  //1、引入组件
import myNew from './components/myNew'

export default {
  name: 'App',
  components: {
    //2、导入组件库
    myNew
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
