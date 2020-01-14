module.exports = {
  lintOnSave: false,
  devServer :{
      proxy:{
        '/api': {
            target:"http://dev-gift.lkvip.cn",//请求的目标地址的BaseURL
            changeOrigin: true, //是否开启跨域
            ws:true,
            pathRewrite: {
                '^/api': '' //规定请求地址以什么作为开头
            }
        }
      }
  }
};
