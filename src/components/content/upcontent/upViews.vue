<template>
  <div id="up-views">
    <el-container>
      <el-header style="height: 80px">
        <div class="user-base-data">
          <el-avatar :src="up_picture" :size="75" @error="errorHandler"></el-avatar>
          <span>up主名称：{{$store.state.up_data.up_name}}</span>
          <span>uid：{{$store.state.up_data.up_uid}}</span>
          <span>粉丝数：{{$store.state.up_data.fans_num}}</span>
        </div>
        <div class="line"></div>
      </el-header>
        <el-aside width="350px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                :router="true"
                :default-active="activeIndex"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item :index="'/user/'+userID+'/upCompreEval'">
                  <i class="el-icon-view"></i>
                  <span slot="title">up主综合评价</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-view"></i>
                  <span slot="title">up主视频评价</span>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-view"></i>
                    <span>up主其他评价</span>
                  </template>
                  <el-menu-item index="3-1">更新时间图</el-menu-item>
                  <el-menu-item index="3-2">播放量图</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
  </div>
</template>

<script>
  export default {
    name: "upViews",
    data() {
      return {
        up_picture: this.$store.state.up_data.up_picture,
        activeIndex: '/user/'+this.$store.state.up_uid+'/upCompreEval',
      }
    },



    computed:{
      userID() {
        return this.$route.params.uid
      }
    },

    methods:{
      errorHandler() {
        return true
      },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },

    }

  }
</script>

<style scoped lang="less">
  #up-views {
    display: flex;
    min-height: 100%;
  }

  .el-header {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 10px;
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: left;
    line-height: 50px;
    align-items: baseline;


  }

  .el-aside ul {
    list-style: none;

  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .user-base-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
  }
  .user-other-data {
    display: flex;
    justify-content: flex-start;
  }
  .user-other-data ul {
    list-style: none;
  }
  .user-other-data a {
    display: flex;
    justify-content: flex-start;
    color: #333333;
    text-decoration:none;
    font-weight: 600;
  }


</style>
