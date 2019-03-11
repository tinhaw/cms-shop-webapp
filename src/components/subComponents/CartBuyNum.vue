<template>
    <div>
        <div class="mui-numbox"  data-numbox-min='1' data-numbox-max='9'>
            <!-- "-"按钮，点击可减小当前数值 -->
            <button class="mui-btn mui-numbox-btn-minus" type="button" >-</button>
            <input class="mui-numbox-input" :value="initNum" type="number" @change="updateNum" ref="cart_numbox"/>
            <!-- "+"按钮，点击可增大当前数值 -->
            <button class="mui-btn mui-numbox-btn-plus" type="button" >+</button>
        </div> 
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return {
            // num:this.$store.state.selectedNum,
            box:null
        }
    },
    mounted(){
        this.box=mui('.mui-numbox').numbox()
        // console.log(this.box)
    },
    methods:{
  
        updateNum(){
            // let num=this.box.getValue()
            // if(num>9){
            //     num=9
            // }else if(num<1){
            //     num=1
            // }

            this.$store.commit("updateCartSlectedNum",{
                id:this.itemId,
                num:parseInt(this.$refs.cart_numbox.value) 
                })

        }
    },
    props:["initNum","itemId"]
}
</script>
<style lang="less">
    
</style>