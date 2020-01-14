
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户中心</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card">
      <!-- 搜索添加 -->
      <div>
        <el-form label-width="100px">
          <el-row :gutter="5">
            <el-col :span="4">
              <el-form-item label="商品名称：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item label="商品id：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item v-model="region" label="商品分类">
                <el-select placeholder="全部">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="供应商">
                <el-select v-model="region" placeholder="全部">
                  <el-option label="区域一s" value="shanghais"></el-option>
                  <el-option label="区域二ss" value="beijings"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="用户账号：">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="value2"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-form-item>
            </el-col>
           
          </el-row>
        </el-form>
      </div>
      <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="id" label="商品id" width="180"></el-table-column>
        <el-table-column prop="uid" label="商品名称" width="180"></el-table-column>
        <el-table-column prop="gid" label="商品分类"></el-table-column>
        <el-table-column prop="gid" label="供应商"></el-table-column>
        <el-table-column prop="gid" label="评论星级"></el-table-column>
        <el-table-column prop="gid" label="用户"></el-table-column>
        <el-table-column prop="gid" label="评论时间"></el-table-column>
        <el-table-column prop="content" label="评论内容"></el-table-column>
        <el-table-column label="操作">
          <template>
            <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
              <el-button type="primary" icon="el-icon-edit"></el-button>
            </el-tooltip>

            <el-button type="danger" icon="el-icon-delete-solid"></el-button>
            <el-button type="success" icon="el-icon-edit"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="303"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        // 当前页数
        pagenum: 1,
        // 每页也显示数据
        pagesize: 5,
        // 总页数
        total: ""
      },
      tableData: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value2: "",
      region: ""
    };
  },
  components: {},
  created() {
    this.getCommentList();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async getCommentList() {
      const { data: res } = await this.$api.evaluate.lists({});
      console.log(res);
      if (res.status != 1) return;
      this.tableData = res.data.list;
      this.total = res.data.total;

      // .then(res => {
      //   console.log(res);
      //   console.log(res.data.data.list)
      //   this.tableData = res.data.list
      //   this.total = res.data.total
      // })
      // .catch(err => {
      //   console.log(err);
      // });
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="stylus">
.el-table {
  margin-top: 15px;
  font-size: 12px;
}

.el-pagination {
  margin-top: 15px;
}

.divCol {
  display: flex;
}
</style>

