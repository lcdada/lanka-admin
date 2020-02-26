/**
 * 系统设置
 */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const system = { 
// 角色列表查询
    listRole(params){
        return axios.post(`${base.home}/api/v1/admin/role/lists`, qs.stringify(params));
    },
//添加角色
    addRole (params) {        
        return axios.post(`${base.home}/api/v1/admin/role/add`, qs.stringify(params));    
    },
//角色详情
    detailRole (params) {        
        return axios.post(`${base.home}/api/v1/admin/role/detail`, qs.stringify(params));    
    },
// 为角色设置权限
    setRole (params) {        
        return axios.post(`${base.home}/api/v1/admin/role/add/permission`, qs.stringify(params));    
    },
// 修改角色
    reply (params) {        
        return axios.post(`${base.home}/api/v1/admin/role/edit`, qs.stringify(params));    
    },
// 删除角色
    delRole (params) {        
        return axios.post(`${base.home}/api/v1/admin/role/del`, qs.stringify(params));    
    },
// 权限列表
    perList (params){
        return axios.post(`${base.home}/api/v1/admin/permission/lists`, qs.stringify(params));    
    },
// 用户所拥有权限按钮列表
    perListAll (params){
        return axios.post(`${base.home}/api/v1/admin/permission/lists/button`, qs.stringify(params));    
    },
// 权限添加
    perAdd (params){
        return axios.post(`${base.home}/api/v1/admin/permission/add`, qs.stringify(params));    
    },
// 权限修改
    perEdit (params){
        return axios.post(`${base.home}/api/v1/admin/permission/edit`, qs.stringify(params));    
    },
// 删除权限
    perDel (params){
        return axios.post(`${base.home}/api/v1/admin/permission/del`, qs.stringify(params));    
    },
}

export default system;