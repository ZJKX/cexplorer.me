<template>
  <div id="home">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">up主数据
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>

</template>

<script>
  export default {
      name: "Home",
    data() {
      return {
        input: '',
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
