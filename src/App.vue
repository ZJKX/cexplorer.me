<template>
  <div id="app">
    <el-container>
      <el-header>
        <home/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="height: 100px">
      </el-footer>
    </el-container>

<!--底部foot部分-->
  </div>
</template>

<script>
  import Home from 'views/Home'
  export default {
    name: 'app',
    components: {
      Home,
    }
  }


</script>


<style lang="less" scoped>
  .el-header {
    background-color: #fff;
    color: #303133;
    position: absolute;
    top: 0;
    line-height: 60px;
    width: 100%
  }
  .el-main {
    background-color: #fff;
  }
  .el-footer {
    background-color: #333;
    color: #E9EEF3;
    position: absolute;
    bottom: 0;
    width: 100%;

  }
</style>
