<template>
  <div id="navbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>

    </el-menu>
    <div class="line"></div>
  </div>

</template>

<script>
  export default {
      name: "Navbar",
    data() {
      return {
        activeIndex: '/home',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);


      }
    }
  }
</script>

<style scoped>

</style>
