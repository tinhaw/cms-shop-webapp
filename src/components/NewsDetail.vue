<template>
    <div class="newsdetail-container">
        <div class="newsdetail-header">
            <h3 class="newsdetail-title">{{news_detail.title}}</h3>
            <p class="newsdetail-subtitle">
                <span class="newsdetail-time">发表时间：{{news_detail.add_time|timeFormat}}</span>
                <span class="newsdetail-click">点击： {{news_detail.click}} 次</span>
            </p>
        </div>

        <hr>
        <div class="newsdetail-content" v-html="news_detail.content">
           
        </div>

        <cmt-box :id="this.news_id"></cmt-box>
    </div>
</template>

<script>
import comment from './subComponents/Comment.vue'

export default {
    data(){
        return {
            news_id:this.$route.params.news_id,
            news_detail:{}
        }
    },
    methods:{
        getNewsDetail(){
            this.$http.get('get/newsdetail/'+this.news_id).then((response)=>{
                if(response.body.code==0){
                    this.news_detail=response.body.data;
                }
            })
        }
    },
    created(){
        this.getNewsDetail()
    },
    components:{
        "cmt-box":comment
    }
}
</script>

<style lang="less" scope>
    .newsdetail-container{
        // padding:0 5px;
        margin:0 .1rem;
    }
   .newsdetail-title{
       text-align:center;
       font-size: .16rem;
       line-height: .4rem;
       color:brown;
   } 
   .newsdetail-subtitle{
       display: flex;
       justify-content: space-between;
       font-size: .14rem;
       margin:0;
       color:#226aff;
   }
   .newsdetail-content{
       text-indent: .2rem;
       img{
           width:100%;
       }
       h6{
           color:black;
           font-size: .14rem;
           font-weight: 800;
       }
   }
</style>