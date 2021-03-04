<template>
  <div id="up-views">
    <h2>这是up主展示的页面</h2>
    <h2>{{uidID}}</h2>
  <div>
    {{up_data}}
  </div>
  </div>
</template>

<script>
  import {getUPDATA} from "../../network/upData";


  export default {
    name: "upViews",
    data() {
      return {
        up_data: {
          'up_name': '',
          'up_uid': '',
          'up_picture': '',
          'video_num': 0,
          'updatespan': 0,
          'danmu_dict': [],
          'comment_dict': [],
          'up_other_data': [],
          'up_score': 0,
        }
      }
    },
    computed:{
      uidID() {
        return this.$route.params.uid
      }
    },
    methods:{
      getUPDATA(uid) {
        getUPDATA(uid).then(res => {
          this.up_name = res.data.up_name
        })
      }
    }

  }
</script>

<style scoped>

</style>
