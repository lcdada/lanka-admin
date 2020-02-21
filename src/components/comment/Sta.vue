<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品评价中心</el-breadcrumb-item>
      <el-breadcrumb-item>评论概况</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="topOverView"></div>
    <div class="echarts">
      <div id="Start" style="width: 500px;height:400px;"></div>
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "商品评论详情"
        },
        tooltip: {},
        legend: {
          data: ["供应商排行"]
        },
        xAxis: {
          data: ["供应商1", "供应商2", "供应商3", "供应商4", "供应商5", "供应商6"]
        },
        yAxis: {},
        series: [
          {
            name: "供应商排行",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    getStart() {
      let startChart = this.$echarts.init(document.getElementById("Start"));
      let option = {
        title: {
          text: "评论星级",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["一星", "二星", "三星", "四星", "五星"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "一星" },
              { value: 310, name: "二星" },
              { value: 234, name: "三星" },
              { value: 135, name: "四星" },
              { value: 1548, name: "五星" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
       startChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
    this.getStart()
  }
};
</script>
<style lang="stylus" scoped>
.topOverView {
  width: 100%;
  height: 200px;
}

.echarts {
  display: flex;
}
</style>
