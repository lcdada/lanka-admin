<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card">
      <!-- 搜索添加 -->
      <el-row :gutter="10">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="addRoleDialogVisible = true">添加角色</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="name" label="职位" width="180"></el-table-column>
        <el-table-column prop="remark" label="角色" width="180"></el-table-column>
        <el-table-column prop="status" label="状态" width="180">
            <template slot-scope="scope">
                <el-tag v-if="scope.row.status === 2" type="success">正常</el-tag>
                <el-tag v-if="scope.row.status === 1" type="danger">禁用</el-tag>
            </template>1
        </el-table-column>
        <el-table-column prop="created_at" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="updated_at" label="更新时间" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
              <el-button size="mini" type="primary" icon="el-icon-edit" @click="showEditDialong(scope.row.id)">编辑</el-button>
              <el-button size="mini" type="danger" icon="el-icon-delete-solid" @click="removeUserById(scope.row.id)">删除</el-button>
              <el-button size="mini" type="warning" icon="el-icon-setting">分配权限</el-button>
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
        :total="400"
      ></el-pagination>
    </el-card>
    <!-- 添加角色 -->
    <el-dialog
        title="提示"
        :visible.sync="addRoleDialogVisible"
        width="50%"
        @close="addDialogClose"
        >
        <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px" >
            <el-form-item label="职位" prop="userPosition">
                <el-input v-model="addForm.userPosition"></el-input>
            </el-form-item>
            <el-form-item label="角色" prop="userRelo">
                <el-input v-model="addForm.userRelo"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="addRoleDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addRelo">确 定</el-button>
        </span>
    </el-dialog>
    <!-- 修改角色 -->
    <el-dialog
        title="编辑角色"
        :visible.sync="editDialogVisible"
        width="50%"
        @close="editDialogClose"
>
        <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px" >
            <el-form-item label="角色名" >
                <el-input v-model="editForm.name" prop="name"></el-input>
            </el-form-item>
            <el-form-item label="备注" >
                <el-input v-model="editForm.remark" prop="remark"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editUserInfo">确 定</el-button>
        </span>
    </el-dialog>
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
        pagesize: 2
      },
      // 角色列表 
      tableData: [],
    //   添加角色对话框显示与隐藏
      addRoleDialogVisible:false,
    //   编辑角色对换框
      editDialogVisible:false,
    //   查询角色信息
      editForm:{
       
      },
    //   修改角色验证规则
      editFormRules:{
          name:[
              {required : true,message:'请输入角色',trigger:'blur'},
              {min:2,max:8,message:"角色名称长度在2-8位之间",trigger:'blur'}
          ],
          remark:[
              {required : true,message:'请输入职位',trigger:'blur'},
              {min:2,max:8,message:"职位名称长度在2-8位之间",trigger:'blur'}
          ]
      },
    // 添加用户的表单数据
      addForm:{
          userPosition:'',
          userRelo:''
      },
    //   添加表单的验证规则
      addFormRules:{
          userPosition:[
              {required : true,message:'请输入职位',trigger:'blur'},
              {min:2,max:8,message:"职位名称长度在2-8位之间",trigger:'blur'}
          ],
          userRelo:[
              {required : true,message:'请输入角色',trigger:'blur'},
              {min:2,max:8,message:"角色名称长度在2-8位之间",trigger:'blur'}
          ]
      }
    };
  },
  components: {},
  created() {
    this.getRoleList();
  },
  methods: {
    // 获取角色列表
    async getRoleList() {
      const { data: res } = await this.$api.system.listRole({});
      console.log(res);
      if (res.status != 1) return  this.$message('获取角色列表失效');
      this.tableData = res.data;
    },
    // 监听添加对话框关闭
    addDialogClose(){
        this.$refs.addFormRef.resetFields()
    },
    // 添加角色确认事件
    addRelo(){
        this.$refs.addFormRef.validate(async valid =>{
            console.log( valid)
            if(!valid) return
            const { data: res } = await this.$api.system.addRole({
                name:this.addForm.userRelo,
                remark:this.addForm.userPosition
            });
            console.log(res);
            if (res.status != 1){
                this.$message.error('获取角色列表失效');
            } 
            this.$message.success('添加角色成功')
            this.addRoleDialogVisible = false;
            this.getRoleList()
        })
    },
    // 显示编辑角色对话框
    async showEditDialong(id){
       
        const {data:res} = await this.$api.system.detailRole({
            id:id
        })
        console.log(res)
        if(res.status != 1){
            return this.$message.error("查询失败")
        }
        this.editForm =  res.data
        this.editDialogVisible =true

    },
     // 监听编辑对话框的关闭事件
    editDialogClose(){
        this.$refs.editFormRef.resetFields()
    },
    // 提交编辑信息事件
    editUserInfo(){
        this.$refs.editFormRef.validate(async valid => {
          if(!valid) return
            const { data: res } = await this.$api.system.reply({
                name:this.editForm.name,
                remark:this.editForm.remark,
                id:this.editForm.id
            });
            console.log(res);
            if (res.status != 1){
                this.$message.error('修改角色列表失效');
            } 
            this.$message.success('修改角色成功')
            this.editDialogVisible = false;
            this.getRoleList()
        })
    },
    // 删除角色
    async removeUserById(id){
        const confirmResult = await this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err => err)
        // console.log(confirmResult)
        // 确认删除返回字符串confirm
        // 取消返回字符串 cancel
        if(confirmResult != "confirm"){
            return this.$message.info('已取消删除')
        }
        const { data: res } = await this.$api.system.delRole({
            id:id
        });
        if(res.status !=1){
            return this.$message.error('删除角色失败')
        } 
        this.$message.success('删除角色成功')
        this.getRoleList()
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
</style>

