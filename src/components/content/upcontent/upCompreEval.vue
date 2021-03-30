<template>
  <div id="upCompreEval">
  <el-row :gutter="50">
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">
      <div ref="radar" :style="{width: '500px', height: '400px'}"></div>
    </div></el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">
      <div ref="pie" :style="{width: '600px', height: '400px'}"></div>
    </div></el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    name: "upCompreEval",
    data() {
      return {

      }
    },
    mounted() {
      this.drawradar();
      this.drawpie();
    },
    methods:{
      drawradar(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.radar);
        // 绘制图表
        myChart.setOption({
          title: {
            text: 'UP主能力雷达图'
          },
          tooltip: {},
          legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
            top: 'center',
            align: 'left',
            left: '0%',
            orient: 'vertical',
            icon: 'circle',

          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: '销售（sales）', max: 6500},
              { name: '管理（Administration）', max: 16000},
              { name: '信息技术（Information Techology）', max: 30000},
              { name: '客服（Customer Support）', max: 38000},
              { name: '研发（Development）', max: 52000},
              { name: '市场（Marketing）', max: 25000}
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
              }
            ]
          }]
        });
      },
      drawpie(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.pie);
        // 绘制图表
        myChart.setOption({
          title: {
            text: 'UP主综合评分\n'+this.$store.state.up_data.up_score,
            left: 'center',
            top: 'center',
            z: 0,
            rich: {
              value: {
                color: '#303133',
                fontSize: 40,
                fontWeight: 'bold',
                lineHeight: 40,
              },
              name: {
                color: '#909399',
                lineHeight: 20
              },
            },

          },
          tooltip: {
            trigger: 'item',

          },
          legend: {
            top: 'center',
            align: 'right',
            right: '5%',
            orient: 'vertical',
            icon: 'circle',
          },
          series: [
            {
              name: 'up主综合评分',
              type: 'pie',
              hoverAnimation: false,//关闭鼠标放上去时的动画效果
              radius: ['60%', '70%'],
              avoidLabelOverlap: false,
              z: 1,
              label: {
                padding: [30, 30, 30, 30],
                backgroundColor: '#fff',
                show: false,
                position: 'center',
                textStyle: {
                  fontSize: 21,
                  // color: '#ffdf25'
                },
                rich: {
                  value: {
                    color: '#303133',
                    fontSize: 40,
                    fontWeight: 'bold',
                    lineHeight: 40,
                  },
                  name: {
                    color: '#909399',
                    lineHeight: 20
                  },
                },
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '20',
                  formatter: '{b}\n{d}%',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: this.$store.state.up_data.up_score*0.25, name: '粉丝数评分'},
                {value: this.$store.state.up_data.up_score*0.15, name: '视频数量评分'},
                {value: this.$store.state.up_data.up_score*0.50, name: '视频质量评分'},
                {value: this.$store.state.up_data.up_score*0.15, name: '视频更新频率评分'},

              ]
            }
          ]
        });
      }
    }
  }
</script>

<style scoped>

</style>
