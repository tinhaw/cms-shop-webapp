<template>
    <div>
        <div class="mui-numbox"  data-numbox-min='1' data-numbox-max='9'>
            <!-- "-"按钮，点击可减小当前数值 -->
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" :value="$store.state.selectedNum" type="number" @change="updateNum" ref="numbox"/>
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
            num:this.$store.state.selectedNum,
            box:null
        }
    },
    created(){
        this.$store.commit("initSelectedNum");
    },
    mounted(){
        this.box=mui('.mui-numbox').numbox();
        console.log(this.box);
    },
    methods:{
  
        updateNum(){
            let num=this.box.getValue()
            if(num>9){
                num=9
            }else if(num<1){
                num=1
            }

            this.$store.commit("updateSlectedNum",this.box.getValue())

        }
    },
    // props:['initNum']
}
</script>
<style lang="less">
    
</style>