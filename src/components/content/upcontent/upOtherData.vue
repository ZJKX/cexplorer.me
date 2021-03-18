<template>
  <div class="user-other-data">
    <ul>
      <li v-for="(item,index) in $store.state.up_data.up_other_data" :key="item">
        <a :href="item.up_video_url" :title="item.up_video_title" target="_blank">{{index + 1}}.{{item.up_video_title}}</a>
        <!--          <span>发布时间:{{item.up_play_volume}}</span>-->
        <!--          <span>播放量:{{item.up_play_volume}}</span>-->
        <!--          <span>点赞数:{{item.up_video_upvote}}</span>-->
        <!--          <span>硬币数:{{item.up_video_coin}}</span>-->
        <!--          <span>收藏数:{{item.up_video_collection}}</span>-->
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "upOtherData"
  }
</script>

<style scoped>

</style>
