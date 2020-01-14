/**
 * 礼包管理
 */

import base from '../base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const giftPackage = { 
//礼包查询接口
    list (params) {        
        return axios.post(`${base.home}/gift/package/list`, qs.stringify(params));    
    }

}

export default giftPackage;