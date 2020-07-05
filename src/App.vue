<template>
  <div id="app">
    <transition :name="transitionName">
    <router-view id="login"/>
    </transition>
  </div>
</template>

<style scoped>
  @import "./assets/css/donghua.css";
#app {
  text-align: center;
}


</style>
<script >
  export default {
    name: "app",
    data() {
      return {
        transitionName: "",
      }
    },
    // watch: {//使用watch 监听$router的变化
    //   $route(to, from) {
    //     //如果to索引大于from索引,判断为前进状态,反之则为后退状态
    //     if (to.meta.index > from.meta.index) {
    //       //设置动画名称
    //       this.transitionName = "slide-left";
    //     } else {
    //       this.transitionName = "slide-right";
    //     }
    //   }
    // }
  }
</script>