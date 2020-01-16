
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
                <el-input v-model="goodsName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item label="商品ID：">
                <el-input v-model="goodsId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="商品分类">
                <el-select v-model="goodsClass" placeholder="全部">
                  <el-option label="区域一" value="111"></el-option>
                  <el-option label="区域二" value="222"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="供应商">
                <el-select v-model="Supplier" placeholder="全部">
                  <el-option label="区域一s" value="shanghais"></el-option>
                  <el-option label="区域二ss" value="beijings"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="用户账号：">
                <el-input v-model="userAccount"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="5">
            <el-col :span="7">
              <el-form-item label="活动时间">
                <el-date-picker
                  v-model="chooseTime"
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
            <el-col :span="3">
              <el-form-item label="评论星级">
                <el-select v-model="startNum" placeholder="全部">
                  <el-option label="一星" value="1"></el-option>
                  <el-option label="二星" value="2"></el-option>
                  <el-option label="三星" value="1"></el-option>
                  <el-option label="四星" value="2"></el-option>
                  <el-option label="五星" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item label="审核状态">
                <el-select v-model="exState" placeholder="全部">
                  <el-option label="已审核" value="1"></el-option>
                  <el-option label="未审核" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <el-button type="primary">搜索</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
            <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="id" label="商品id" width="180"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="180"></el-table-column>
        <el-table-column prop="gid" label="商品分类" width="120"></el-table-column>
        <el-table-column prop="supplier_name" label="供应商" width="180" show-overflow-tooltip></el-table-column>
        <el-table-column prop="gid" label="评论星级" width="80"></el-table-column>
        <el-table-column prop="mobile" label="用户" width="160"></el-table-column>
        <el-table-column prop="create_time" label="评论时间" width="160"></el-table-column>
        <el-table-column prop="content" label="评论内容" show-overflow-tooltip></el-table-column>
        <el-table-column prop="status" label="状态"  width="110">
           <template slot-scope="scopeList">
              <el-button type="warning" v-if="tableData[scopeList.$index].status==1">待审核</el-button>
              <el-button type="info" v-if="tableData[scopeList.$index].status==2"> 回收站</el-button>
              <el-button type="success" v-if="tableData[scopeList.$index].status==3">审核通过</el-button>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="danger" @click="handleEdit(scope.$index, scope.row)">审核</el-button>
            <el-button type="success" @click="handleReply(scope.$index, scope.row)">回复</el-button>

            <!-- 审核 -->
             <el-dialog
              title="是否确认审核通过？"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleCloseVisible"
              center
              :modal-append-to-body='false'
            >
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisibleSucc(scope.row)">确 定</el-button>
              </span>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10,20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
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
        pagesize: 5
      },
      // 总页数
      total: 0,
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
      // 选择时间
      chooseTime: "",
      // 供应商
      Supplier: "",
      // 商品分类
      goodsClass: "",
      startNum: "",
      // 审核状态
      exState: "",
      // 商品名称
      goodsName: "",
      // 商品id
      goodsId: "",
      // 用户账号
      userAccount: "",

      dialogVisible: false,
      // 显示评审弹窗
      showEdit: false,
      // 评论回复
      dialogReplay: false,
      // 评论id
      checkId: 0,
      // 评论内容
      content: "",
      // 回复内容
      textarea: "",
      // 回复列表
      replayList: []
    };
  },
  components: {},
  created() {
    this.getCommentList();
  },
  methods: {
    //   监听当前页
    handleSizeChange(newSize) {
      // console.log(`每页 ${newSize} 条`);
      this.queryInfo.pagesize = newSize;
      this.getCommentList();
    },
    // 监听页码值变化
    handleCurrentChange(pageNum) {
      // console.log(`当前页: ${pageNum}`);
      this.queryInfo.pagenum = pageNum;
      this.getCommentList();
    },
    async getCommentList() {
      const { data: res } = await this.$api.evaluate.lists({
        size: this.queryInfo.pagesize,
        page: this.queryInfo.pagenum
      });
      if (res.status != 1) return;
      this.tableData = res.data.list;
      this.total = res.data.total;
    },
    // 审核
    handleEdit(index, row){
      this.dialogVisible = true;
      console.log(row)
      
    },
    // 确认审核
    async dialogVisibleSucc(row){
      const {data:res} = await this.$api.evaluate.check({
        id:row.id,
        status:3
      })
      console.log(row)
      if(res.status != 1) {
        this.$message('审核失败');
        this.dialogVisible = false;
      }
      this.$message('审核成功')
      this.dialogVisible = false;
      this.getCommentList();
    },
    // 回复
    handleReply(index, row){
      // console.log(row)
    },
    // 关闭按钮
    handleCloseVisible(done) {
      done();
    },

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

