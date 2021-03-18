<template>
  <div id="home">
    <router-link to="/home">
    <el-image
      class="logo"
      style="width: 200px; height: 200px"
      :src= "src"
      :fit="fit">
    </el-image>
    </router-link>
    <div class="wd">
      <el-input
        maxlength="30"
        placeholder="请输入up主的UID"
        v-model="uid"
        autofocus="true"
        clearable
        @keyup.enter.native="handleinput">
      </el-input>
      <router-link :to="'/user/'+uid">
        <el-button type="primary" icon="el-icon-search" id="search-button" @click="getUPDATA" ref="btn">搜索</el-button>
      </router-link>

    </div>
  </div>
</template>

<script>


  export default {
    name: "Home",
    data() {
      return {
        fit: 'fill',
        src: require('../../assets/img/logo.jpg'),//VUE 使用：src获取图片源时，使用require来获取
        uid: '',

      }
    },

    //监听数据
    watch: {
      uid(val) {
        this.uid = val.replace(/\D/g, '') //限制只能输入数字
      }

    },

    methods: {
      handleinput() {
        this.$store.dispatch('getupdata', this.uid);
        this.$router.push({ name: 'user', params: { uid: this.uid }})

      },

      getUPDATA() {
        this.$store.dispatch('getupdata', this.uid)

      }

    }
  }
</script>

<style scoped>

  #home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wd {
    display:inline-flex;
    margin: 0 auto;
    width: 800px;
  }

</style>
