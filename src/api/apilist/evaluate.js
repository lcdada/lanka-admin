/**
 * 商品评价中心
 */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const evaluate = { 
//商品评价接口
    lists (params) {        
        return axios.post(`${base.home}/api/v1/admin/goods/comment/lists`, qs.stringify(params));    
    },
// 审核商品评价
    check (params) {        
        return axios.post(`${base.home}/api/v1/admin/goods/comment/check`, qs.stringify(params));    
    },
// 回复商品评价
    reply (params) {        
        return axios.post(`${base.home}/api/v1/admin/goods/comment/reply`, qs.stringify(params));    
    },
// 查看商品评价的 对话内容
    getReplyList (params) {        
        return axios.post(`${base.home}/api/v1/admin/goods/comment/reply/list`, qs.stringify(params));    
    },
// 商品评论概况
    survey (params){
        return axios.post(`${base.home}/api/v1/admin/goodscomment/survey`, qs.stringify(params));    
    }


}

export default evaluate;