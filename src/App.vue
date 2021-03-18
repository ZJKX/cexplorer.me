<template>
  <div id="app" class='flex-box'>
    <el-container>
<!--      顶部header-->
      <el-header>
        <navbar/>
      </el-header>
<!--      中间内容展示-->
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="height: 80px">
    <!--底部foot部分-->
      </el-footer>
    </el-container>


  </div>
</template>

<script>
  import navbar from 'views/navbar'
  export default {
    name: 'app',
    created () {
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    },

    components: {
      navbar,
    }
  }


</script>


<style lang="less" scoped>

  .flex-box {
    display: flex;
    min-height: 100%;
  }
    .el-header {
    background-color: #fff;
    color: #303133;
    align-self: flex-start;
    line-height: 60px;
    width: 100%
  }
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;

  }
  .el-footer {

    background-color: #333;
    color: #E9EEF3;
    align-items: flex-end;

  }
</style>
