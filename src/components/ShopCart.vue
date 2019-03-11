<template>
    <div>
        <div class="cart-goods-container">
            <div class="mui-card cart-goods-item" v-for="item in goodsInfos" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch
                            :value="$store.getters.getIsSelected[item.id]" 
                            @change="handleSelectedChange(item.id,$store.getters.getIsSelected[item.id])"
                         >
                         </mt-switch>
                        <img :src="item.src" alt="" class="item-img">
                        <div class="item-info">
                            <div class="item-title">{{item.title}}</div>
                            <div class="item-content">
                                <span class="item-price">￥{{item.price}}</span>
                                <cart-num class="item-num" :initNum="$store.getters.getGoodsNum[item.id]" :itemId="item.id"></cart-num>
                                <span class="item-del" @click="handleDeleteItem(item.id)">删除</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cart-total">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div class="total-info">
                            <div class="total-title">总计（不含运费）</div>
                            <div class="total-count">
                                已勾选商品<span class="total-num"> {{selectedCount}} </span>件,
                                总价：<span class="total-num">￥{{selectedSum}}</span>
                            </div>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cartnum from './subComponents/CartBuyNum.vue'
export default {
    data(){
        return {
            // isSelected:false,
            goodsInfos:[],
            
        }
    },
    computed:{
        selectedCount:function(){
            let count=0;
            this.$store.state.cartInfos.forEach(item=>{
                if(item.isSelected){
                    count+=item.num;
                }
            })
            return count;
        },
        selectedSum:function(){
            let sum=0;
            this.$store.state.cartInfos.forEach(item=>{
                if(item.isSelected){
                    sum+=item.num*item.price;
                }
            })
            return sum;
        }
    },
    components:{
        "cart-num":cartnum
    },
    methods:{
        getGoodsInfos(){
        // this.goodsInfos=this.$store.state.cartInfos;
            const ids=this.$store.getters.ids;
            if(ids.length>0){
                this.$http.get('get/cartinfo/'+ids.join(",")).then(response=>{
                    if(response.body.code===0){
                        this.goodsInfos=response.body.data.list;
                    }
                })
            }
        },
        handleSelectedChange(id,oldValue){
            // let newValue=!oldValue;
            this.$store.commit("changeSelected",{id,isSelected:!oldValue});
        },
        handleDeleteItem(id){
            this.goodsInfos.some((item,i)=>{
                if(item.id==id){
                    this.goodsInfos.splice(i,1);
                    return true;
                }
            })
            this.$store.commit("deleteItem",id);
        }
    },
    created(){
        this.getGoodsInfos()
    }
}
</script>

<style lang="less" scoped>
.mui-card-content-inner{
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding:.1rem;
    .item-img{
        height:.6rem;
        // padding-left:5px;
    }
    .item-info{
        // padding-left:5px;
        .item-title{
            font-weight: bold;
            padding:.05rem 0;
        }
        .item-price{
            color:red;
            font-weight: bold;
            font-size: .16rem;
        }
        .item-del{
            color:#226aff;
        }
    }

}
.item-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.total-info{
    color:#888;
    line-height: .3rem;
    .total-count{
        .total-num{
            color:red;
            font-weight: bold;
            font-size: .16rem;
        }
    }
}



</style>
