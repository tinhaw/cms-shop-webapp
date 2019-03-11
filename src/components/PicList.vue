<template>
    <div class="piclist-container">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.cate_id==0?'mui-active':'']" v-for="item in category" :key="item.cate_id" @click="getCateById(item.cate_id)">
                        {{item.title}}
                    </a>
                    
                </div>
            </div>
        </div>
        <ul class="img-container">
            <router-link class="img-item" v-for="item in img_list" :key="item.img_id" tag="li" :to="'/home/picdetail/'+item.img_id">
                <img class="img-tag" v-lazy="item.img_url">
                <div class="img-info">
                    <h3 class="img-info-title">{{item.title}}</h3>
                    <div class="img-info-describe">{{item.describe}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '../lib/mui/js/mui.min.js'

export default {
    data(){
        return {
            category:[],
            img_list:[]
        }
    },
    methods:{
        getCategory(){
            this.$http.get('get/pic_category').then(response=>{
                if(response.body.code===0){
                    this.category=response.body.data.list;
                    this.category.unshift({cate_id:0,title:"全部"})
                }
            })
        },
        getCateById(cate_id=0){
            this.$http.get('get/img_list/'+cate_id).then(response=>{
                if(response.body.code==0){
                    this.img_list=response.body.data.list;
                }
            })
        }
    },
    created(){
        this.getCategory()
        this.getCateById()
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style lang="less" scope>
    *{
        touch-action:pan-x;
    }
    .img-container{
        list-style-type: none;
        padding:.1rem;
        margin:0;
    }

    // .piclist-container{
    //     overflow: 
    // }

    .img-item{
        position: relative;
        margin-bottom:.1rem;
        max-height: 2.5rem;  
        box-shadow: 0 0 .08rem #999;
        border-radius: .05rem;
        background-color: #999;
        overflow: hidden;
        img{
            width: 100%;
            vertical-align: middle;
            // background-color: #999
        }
        img[lazy=loading] {
            width: .4rem;
            height: 2.5rem;
            margin: auto;
            display: flex;
            justify-content: space-around;
        }
    }
    .img-info{
        position: absolute;
        bottom:0;
        color:#fff;
        background-color:rgba(0,0,0,0.4);
        padding:.05rem;
        .img-info-title{
            font-size: .14rem;
        }
        .img-info-describe{
            font-size: .13rem;
        }
    }


</style>