<template>
  <div id="app">
    <img @click="fn" src="./assets/logo.png">
    <router-link to="/">首页</router-link>
    <router-link to="/helloRouter">HelloRouter</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    //this.$router 看vue-router的全部路由
    //this.$route 看当前所在的路由
    console.log(this.$router);
    console.log(this.$route);
  },
  //观察当前动态路由的数据变更
   watch: {
    '$route' (newVal, oldVal) {
      console.log(newVal)
    },
    methods:{
      fn(){
        //字符串
        this.$router.push('helloRouter')
      }
    }
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
