/**
 * 商品分类中心
 */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const goodsClass = { 
//新增分类
    add (params) {        
        return axios.post(`${base.home}/api/v1/admin/goods/cate/add`, qs.stringify(params));    
    },
// 获取单个分类
    find (params) {        
        return axios.post(`${base.home}/api/v1/admin/goods/cate/find`, qs.stringify(params));    
    },
// 编辑分类
    find (params) {        
        return axios.post(`${base.home}/api/v1/admin/goods/cate/find`, qs.stringify(params));    
    },
// 删除分类
    del (params) {        
        return axios.post(`${base.home}/api/v1/admin/goods/cate/del`, qs.stringify(params));    
    },
// 获取分类列表 tree
    lists (params) {        
        return axios.post(`${base.home}/api/v1/admin/goods/cate/lists`, qs.stringify(params));    
    },




}

export default goodsClass;