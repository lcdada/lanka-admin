module.exports = {
  lintOnSave: false,
  devServer :{
      proxy:{
        '/api': {
            target:"http://192.168.4.110",//请求的目标地址的BaseURL
            changeOrigin: true, //是否开启跨域
            pathRewrite: {
                '^/api': '' //规定请求地址以什么作为开头
            }
        }
      }
  }
};
