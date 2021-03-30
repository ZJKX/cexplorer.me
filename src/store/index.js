import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
import {getUPDATA} from "../network/upData";

// getUPDATA('23947287').then(res => {
//   console.log(res);
// })

export default new Vuex.Store({
  state: {
    up_data: {
      'up_name': '',
      'up_uid': '',
      'up_picture': '',
      'fans_num': 0,
      'video_num': 0,
      'updatespan': 0,
      'danmu_dict': [],
      'comment_dict': [],
      'up_other_data': [],
      'up_score': 0,
    },
    err: {
      'errno':'',
      'errmsg':'',
    }
  },
  //定义方法
  mutations: {
    request_updata(state,uid) {
      getUPDATA(uid).then(res => {
        if (res.data.errmsg){
          console.log(res);
          state.err.errno = res.data.errno;
          state.err.errmsg = res.data.errmsg;
        }
        else {
          console.log(res);
          state.err.errno = '';
          state.err.errmsg = '';
          state.up_data.up_name = res.data.up_name;
          state.up_data.up_uid = res.data.up_uid;
          state.up_data.up_picture = res.data.up_picture;
          state.up_data.fans_num = res.data.fans_num;
          state.up_data.video_num = res.data.video_num;
          state.up_data.updatespan= res.data.updatespan;
          state.up_data.danmu_dict.push(...res.data.danmu_dict);
          state.up_data.comment_dict.push(...res.data.comment_dict);
          state.up_data.up_other_data.push(...res.data.up_other_data);
          state.up_data.up_score = res.data.up_score;
        }
      });



    },
    resetstate(state){
      state.err = {
        'errno':'',
        'errmsg':'',
      };
      state.up_data = {
        'up_name': '',
        'up_uid': '',
        'up_picture': '',
        'fans_num': 0,
        'video_num': 0,
        'updatespan': 0,
        'danmu_dict': [],
        'comment_dict': [],
        'up_other_data': [],
        'up_score': 0,
      };
    }

  },
  actions: {
    // context上下文
    getupdata(context, uid) {
      // context.commit('resetstate');
      context.commit('request_updata',uid)
    },

  },
  modules: {
  },

})
