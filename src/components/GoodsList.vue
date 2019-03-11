<template>
    <div class="goodslist-container">
        <div class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id" @click="goGoodsInfo(item.id)">
            <img :src="item.src" alt="" class="goods-img">
            <div class="goods-info">
                <h3 class="goods-info-title">{{item.title}}</h3>
                <div class="goods-info-content">
                    <span class="goods-info-market-price">￥ {{item.market_price}}</span>&nbsp;&nbsp;
                    <del class="goods-info-original-price">￥ {{item.original_price}}</del>
                    <div class="goods-info-footer">
                        <span>热卖中</span>
                        <span>剩余 {{item.stock}} 件</span>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodslist:[]
        }
    },
    methods:{
        getGoodsList(){
            this.$http.get('get/goodslist').then(response=>{
                if(response.body.code===0){
                    this.goodslist=response.body.data.list;
                }
            })
        },
        goGoodsInfo(id){
            this.$router.push({name:"goodsinfo",params:{id}})
        }
    },
    created(){
        this.getGoodsList()
    },
    mounted(){
        // console.log(this);
    }
}
</script>
<style lang="less">
  .goodslist-container{
      margin:.1rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
  }
  .goods-item{
    //   cursor: pointer;
      width:49%;
      padding:.03rem;
      box-shadow: 0 0 .08rem #999;
      border-radius: .05rem;
      margin:.05rem 0;
      display: flex;
      flex-direction:column;
      justify-content: space-between;
      .goods-img{
          width:100%;
      }
      .goods-info-title{
          font-size: .14rem;
          color:black;
      }
      .goods-info-content{
          font-size: .13rem;
          background-color: #eee;
          color:rgb(51, 50, 50);
          padding:.08rem .04rem;
          .goods-info-market-price{
              color:red;
              font-size: .16rem;
              font-weight: 800;
          }
          .goods-info-footer{
              display: flex;
              justify-content: space-between;
          }
      }
  }  
</style>