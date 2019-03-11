<template>
    <div class="picdetail-container">
        <div class="picdetail-header">
            <h3 class="picdetail-title">{{img_info.title}}</h3>
            <p class="picdetail-subtitle">
                <span class="picdetail-time">发表时间：{{img_info.add_time|timeFormat}}</span>
                <span class="picdetail-click">点击：{{img_info.click}} 次</span>
            </p>
        </div>
        <hr>
        <div class="thumbs">
           <vue-preview :slides="list" @close="handleClose" ></vue-preview>
        </div>
        <cmt-box :id="this.img_id"></cmt-box>
    </div>
</template>

<script>
import comment from './subComponents/Comment.vue'

export default {
    data(){
        return {
            img_id:this.$route.params.img_id,
            list:[],
            img_info:{}
        }
    },
    created(){
        this.getImgInfo()
        this.getThumbs()
    },
    methods:{
        handleClose () {
            console.log('close event')
        },
        getImgInfo(){
            this.$http.get('get/imginfo/'+this.img_id).then(response=>{
                if(response.body.code==0){
                    this.img_info=response.body.data;
                }
            })
        },
        getThumbs(){
            this.$http.get('get/thumbs/'+this.img_id).then(response=>{
                if(response.body.code==0){
                    const list=[];
                    response.body.data.list.forEach(item=>{
                    
                    item.w=600;
                    item.h=400;
                    item.alt=item.title;
                    list.push(item)
        
                    })
                    this.list=list;

                }else{
                    Toast("略缩图加载失败...")
                }
            })
        }
    },
    components:{
        "cmt-box":comment
    }
}
</script>

<style lang="less" scope>
    .picdetail-container{
        // padding:0 5px;
        margin:0 .1rem;
    }
   .picdetail-title{
       text-align:center;
       font-size: .16rem;
       line-height: .4rem;
       color:brown;
   } 
   .picdetail-subtitle{
       display: flex;
       justify-content: space-between;
       font-size: .14rem;
       margin:0;
       color:#226aff;
   }

    .thumbs{

        img{
            width:100%;
            // margin: 10px;
            box-shadow: 0 0 .06rem #999;
            border-radius:.03rem;
        }
    }
    .pswp__img{
        width:100%;
    }
</style>