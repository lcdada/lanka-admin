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
            <el-row :gutter="10">
                <el-col :span="8">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            
            </el-row>
            <el-table
            :data="tableData"
            style="width: 100%"
            stripe
            >
            <el-table-column type="index" label="#">

            </el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
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
            :total="400">   
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                queryInfo:{
                    query:'',
                    // 当前页数
                    pagenum:1,
                    // 每页也显示数据
                    pagesize:2
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        components: {

        },
        methods: {
             handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style lang="stylus">
    .el-table
        margin-top 15px
        font-size 12px
    .el-pagination
        margin-top 15px
</style>

