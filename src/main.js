import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//声明使用插件，内部会给vm对象和组件对象添加一个属性：$http，两个方法get()、post()
Vue.use(VueResource)


// noinspection JSAnnotator
new Vue({
  el:"#app",
  components:{App},
  template:'<App/>'
})
