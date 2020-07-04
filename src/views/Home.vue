<template>
  <div class="home">
    <hd ref="header"/>
  </div>
</template>

<script>
  import 'bootstrap/dist/js/bootstrap.min.js'
  import hd from "./hd";
export default {
  name: "Home",
  components: {
    hd
  }
};
</script>
<style>
  @import "../assets/css/bootstrap.min.css";

</style>