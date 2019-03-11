<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" >
                <div class="mui-table-view-cell-wrap">
                    <img class="mui-media-object mui-pull-left" src="../static/images/vue.png">
                    <div class="mui-media-body">
                        移动端CMS+商城（vue等开发）
                        <p class='mui-ellipsis'>
                           <span class="mui-ellipsis-label">上线地址：</span><a class="mui-ellipsis-addr" href="http://webapp.dinghaoblog.cn"> http://webapp.dinghaoblog.cn</a>
                        </p>
                        <p class='mui-ellipsis'>
                           <span class="mui-ellipsis-label">github地址：</span><a class="mui-ellipsis-addr" href="https://github.com/tinhaw/cms-shop-webapp"> https://github.com/tinhaw/cms-shop-webapp</a>
                        </p>
                    </div>
                </div>
            </li>
            <li class="mui-table-view-cell mui-media" >
                <div class="mui-table-view-cell-wrap">
                    <img class="mui-media-object mui-pull-left" src="../static/images/react.png">
                    <div class="mui-media-body">
                        共享单车后台管理系统（react等开发）
                        <p class='mui-ellipsis'>
                           <span class="mui-ellipsis-label">上线地址：</span><a class="mui-ellipsis-addr" href="http://ebike.dinghaoblog.cn"> http://ebike.dinghaoblog.cn</a>
                        </p>
                        <p class='mui-ellipsis'>
                           <span class="mui-ellipsis-label">github地址：</span><a class="mui-ellipsis-addr" href="https://github.com/tinhaw/shared-bikes-management"> https://github.com/tinhaw/shared-bikes-management</a>
                        </p>
                    </div>
                </div>
            </li>
            <li class="mui-table-view-cell mui-media" >
                <div class="mui-table-view-cell-wrap">
                    <img class="mui-media-object mui-pull-left" src="../static/images/node.png">
                    <div class="mui-media-body">
                        简易微博系统（node+ejs开发）
                        <p class='mui-ellipsis'>
                           <span class="mui-ellipsis-label">上线地址：</span><a class="mui-ellipsis-addr" href="http://microblog.dinghaoblog.cn"> http://microblog.dinghaoblog.cn</a>
                        </p>
                        <p class='mui-ellipsis'>
                           <span class="mui-ellipsis-label">github地址：</span><a class="mui-ellipsis-addr" href="https://github.com/tinhaw/microblog"> https://github.com/tinhaw/microblog</a>
                        </p>
                    </div>
                </div>
            </li>
            <li class="mui-table-view-cell mui-media" >
                 <div class="mui-table-view-cell-wrap">
                    <img class="mui-media-object mui-pull-left" src="../static/images/node.png">
                    <div class="mui-media-body">
                        简易相册系统（node+ejs开发）
                        <p class='mui-ellipsis'>
                           <span class="mui-ellipsis-label">上线地址：</span><a class="mui-ellipsis-addr" href="http://album.dinghaoblog.cn"> http://album.dinghaoblog.cn</a>
                        </p>
                        <p class='mui-ellipsis'>
                           <span class="mui-ellipsis-label">github地址：</span><a class="mui-ellipsis-addr" href="https://github.com/tinhaw/microalbum">  https://github.com/tinhaw/microalbum</a>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="btn-wrapper">
            <mt-button type="danger" size="large" plain @click.native="goPAuthorInfo">
                    点击，去看看作者的简介
            </mt-button>
        </div>

    </div>
</template>

<script>
export default {
    methods:{
        goPAuthorInfo(){
            this.$router.push("/author/info")
        }
    }
}
</script>

<style lang="less" scoped>
    .mui-media-body{
        font-size: .16rem;
        .mui-ellipsis{
            font-size: .14rem;
            color:#888;
            display: flex;
            // justify-content: space-between;
            .mui-ellipsis-addr{
                color: #226aff;
            }
        }
    }
    .mui-table-view-cell-wrap{
        display: flex;
        align-items: center;
    }
    .btn-wrapper{
        margin: .2rem;
    }
</style>