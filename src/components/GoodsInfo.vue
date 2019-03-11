<template>
    <div class="goodsinfo-container">
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
            >
                <div class="ball" v-if="ballFlag" ref="ball"></div>
            </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <my-swiper :swipelist="getSwipes" :isFullWidth="false"></my-swiper>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="goods-price">
                        <label class="label">市场价：</label>
                        <del class="market-price">￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label class="label">销售价：</label>
                        <span class="sell-price">￥{{goodsinfo.sell_price}}</span>
                    </div>
                    <div class="buy-num-container">
                        <label class="label">购买数量：</label>
                        <buy-num ></buy-num>

                    </div>
                    <div class="buy-btn">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopcart">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="goodsinfo-item">
                        <label class="label">商品编号：</label>
                        <span class="goodsinfo-content">{{goodsinfo.id}}</span>
                    </div>
                    <div class="goodsinfo-item">
                        <label class="label">库存情况：</label>
                        <span class="goodsinfo-content">{{goodsinfo.stock}}</span>
                    </div>
                    <div class="goodsinfo-item">
                        <label class="label">上架时间：</label>
                        <span class="goodsinfo-content">{{goodsinfo.add_time|timeFormat}}</span>
                    </div>
                    
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>
        
</template>
<script>
import swiper from "./subComponents/Swiper.vue"
import BuyNum from './subComponents/BuyNum.vue'
export default {
    data(){
        return {
            swipelist:[],
            id:this.$route.params.id,
            goodsinfo:{},
            ballFlag:false,
                 
        }
 
    },
    components:{
        "my-swiper":swiper,
        "buy-num":BuyNum
    },
    created(){
        this.getSwipelist()
        this.getGoodsInfo()
    },
    methods:{
        getSwipelist(){
            this.$http.get('get/goodsinfo_imgs/'+this.id).then(response=>{
                if(response.body.code===0){
                    const list=[]
                    response.body.data.list.forEach(item=>{
                        list.push({
                            url:item
                        })
                    })
                    this.swipelist=list
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('get/goodsinfo/'+this.id).then(response=>{
                if(response.body.code===0){
                    this.goodsinfo=response.body.data;
                }
            })
        },
        addToShopcart(){
            // console.log(this.$store.state.selectedNum)
            //  this.ballFlag = !this.ballFlag;
            const info={
                num:this.$store.state.selectedNum,
                id:this.id,
                price:this.goodsinfo.sell_price
            }
            this.$store.commit("addCartGoods",info);
            
            this.ballFlag = !this.ballFlag;
            console.log(this.ballFlag);
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)";
            // el.style.transition="all 2s ease";
        },
        enter(el,done){
            el.offsetWidth;
            el.style.transition = "all 0.5s ease";
            const ballPosition=this.$refs.ball.getBoundingClientRect();
            const badgePosition=document.getElementById("badge").getBoundingClientRect();

            const xDist=badgePosition.left-ballPosition.left;
            const yDist=badgePosition.top-ballPosition.top;
  
            el.style.transform=`translate(${xDist}px,${yDist}px)`;
            setTimeout(()=>{
                done()
            },500)
        },
        afterEnter(el){
            this.ballFlag=false;
        }
    },
    computed:{
        getSwipes:function(){
            return this.swipelist;
        }
    }
}
</script>
<style lang="less" scope>
    .goodsinfo-container{
        // position: relative;
        background-color: #eee;
        // overflow: hidden;
        .ball{
            background-color: red;
            width:.18rem;
            height:.18rem;
            border-radius: 50%;
            position: fixed;
            left:1.5rem;
            top:4.6rem;
            z-index: 99;
        }
    }
    .sell-price{
        color:red;
        font-size: .16rem;
        font-weight: 800;
    }
    .goods-price{
        margin-bottom:.1rem;
    }
    .buy-num-container{
        display: flex;
        align-items: center;
        margin-bottom:.1rem;

    }
    .goodsinfo-item{
        margin:.05rem 0;
    }
    .label,.goodsinfo-content{
        color:#777;
    }
    .mui-card-footer{
        flex-wrap: wrap;
    }
    .mint-button.is-plain{
        margin:.06rem 0;
    }

   
</style>