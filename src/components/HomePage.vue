<template>
    <div>
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipelist" :key="item.img">
                <img :src="item.url" alt="图片无法加载">
            </mt-swipe-item>
        </mt-swipe> -->
        <my-swipe :swipelist="getSwipes" :isFullWidth="true"></my-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../static/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/piclist">
                    <img src="../static/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../static/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to='/author/info'>
                    <img src="../static/images/menu4.png" alt="">
                    <div class="mui-media-body">作者简介</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to='/author/projects'>
                    <img src="../static/images/menu6.png" alt="">
                    <div class="mui-media-body">作者项目列表</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to='/author/instruction'>
                    <img src="../static/images/menu5.png" alt="">
                    <div class="mui-media-body">本项目说明</div>
                </router-link>
            </li>

        </ul> 
        <div class="home-tip">
            提示：本应用为移动端webApp，为达到最佳的观看效果，请用手机或将浏览器切换至移动端模式查看。
        </div>

    </div>
</template>

<script>
import Swiper from './subComponents/Swiper.vue'
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            swipelist:[]
        }
    },
    components:{
        "my-swipe":Swiper
    },
    methods: {
        getSwipe(){
            this.$http.get('get/lunbotu')
                    .then(response=>{
                        // Toast("加载轮播图成功...")
                        if(response.body.code==0){
                            this.swipelist=response.body.data.list;
                            // console.log(this.swipelist);
                        }
                    },response=>{
                        Toast("加载轮播图失败...")
                    })
        }
    },
    computed:{
        getSwipes:function(){
            return this.swipelist;
        }
    },
    created(){
       this.getSwipe();
    }
}
</script>

<style lang="less">
    .mui-table-view.mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        img {
            width: .6rem;
            height: .6rem;
        }

        .mui-media-body{
            line-height: .20rem!important;
            height: .20rem!important;
        }
    }
    .mui-table-view.mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
    .home-tip{
        margin:0 .2rem;
        // position: fixed;
        // bottom: 1rem;
        font-size: .14rem;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        line-height: .16rem;
        color: rgba(80, 80, 80, 0.3);
    }

    
</style>
