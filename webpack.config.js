const path=require('path')
const HWP=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWepackPlugin=new HWP({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})

module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode:'development',
    plugins:[
        htmlWepackPlugin,
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.js$/,use:'babel-loader',exclude:/node_modules/
            },
            {
                test:/\.vue$/,use:'vue-loader'
            },
            {
                test:/\.css/,use:['style-loader','css-loader']
            },
            {
                test:/\.less/,use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:{
                    loader:'url-loader',
                    query:{
                        limit:1024,
                        name:'assets/[hash:8]-[name].[ext]'
                    }
                }
            },
            {
                test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'
            }
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
        //   "vue$":"vue/dist/vue.js"
        }
      }

}