/** 
 * api接口的统一出口
 */
// 用户中心接口
import user from '@/api/apilist/user'
// 商品分类中心
import goodsClass from '@/api/apilist/goodsClass'
// 商品评价中心
import evaluate from '@/api/apilist/evaluate'
// 礼包管理
import giftPackage from '@/api/apilist/giftPackage'




// 导出接口
export default {    
    user,
    goodsClass,
    evaluate,
    giftPackage
}