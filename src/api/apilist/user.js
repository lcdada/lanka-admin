/**
 * 用户中心
 */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const user = { 
//管理员登录
    login (params) {        
        return axios.post(`${base.home}/api/v1/admin/login`, qs.stringify(params));    
    },
// 添加管理员接口
    addAdmin (params) {        
        return axios.post(`${base.home}/api/v1/admin/register`, qs.stringify(params));    
    },
// 获取登录用户信息
    getUserInfo (params) {        
        return axios.post(`${base.home}/api/v1/admin/info`, qs.stringify(params));    
    },
// 用户退出登录接口
    userLogout (params) {        
        return axios.post(`${base.home}/api/v1/admin/logout`, qs.stringify(params));    
    },
// 获取左侧菜单栏
    getMenus (params){
        return axios.post(`${base.home}/api/v1/admin/role/menus`, qs.stringify(params));    
    }


}

export default user;