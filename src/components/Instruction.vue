<template>
    <div class="authorinfo-container">
        <div class="authorinfo-header">
            <h3 class="authorinfo-title">项目介绍</h3>
        </div>

        <hr>
        <div class="authorinfo-content">
           <p class="authorinfo-text">
              本项目以 <i> vue </i>作为主体框架，使用的UI库为<i> mint-ui </i>和<i> MUI </i>，项目构建工具为<i> webpack4.x </i>，项目中使用了<i> vuex </i>管理数据，使用<i> vue-resource </i>传递网络数据。
           <p class="authorinfo-text">
              项目中使用<i> easy-mock </i>模拟服务器数据。<b>由于Mock数据的限制，购物车中的商品单价和购物车总价计算用到的商品单价可能会不一致。另外，easy-mock服务器不稳定，可能会出现延迟现象，请谅解。</b>
            </p>
           <p class="authorinfo-text">
               新闻资讯、图片分享栏目中用使用到的图片资源来源于<i> 自建服务器 </i>。域名http://img.dinghaoblog.cn被<i> 反向代理 </i>到地址http://129.28.123.129:8080。商品购买中的相关商品图片使用了京东的图片地址。
            </p>
           <p class="authorinfo-text">
               本项目是作者的练习项目，因为时间原因部分功能尚未上线。项目简陋，不足之处请指正。
            </p>

        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .authorinfo-container{
        // padding:0 5px;
        margin:0 .1rem;
    }
   .authorinfo-title{
       text-align:center;
       font-size: .2rem;
       line-height: .4rem;
       color:brown;
   } 

   .authorinfo-content{
       .authorinfo-text{
           margin:.2rem 0;
            text-indent: .2rem;
            color:#222;
            font-size: .17rem;
            line-height: .3rem;
           h6{
                color:black;
                font-size: .18rem;
                font-weight: 800;
                margin:.1rem 0;
            }
            i{
                color:rgb(73, 99, 247);
            }

       }


   }
</style>