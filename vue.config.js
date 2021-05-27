module.exports = {
    publicPath: './',
    //配置跨域请求
    devServer: {
        port: 8080,
        open: true, //是否自动打开浏览器
        https: false, //是否开启https
        hotOnly: false,
        proxy: { // 配置跨域
            '/api': {
                target: 'http://10.167.0.12:7001/api', //请求接口域名
                ws: true,
                secure: false,
                changOrigin: true, //是否允许跨越
                pathRewrite: {
                    '^/apiheytex': '',
                }
            },
        },
        before: app => {}
    }
}
