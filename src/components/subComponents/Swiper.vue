<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipelist" :key="item.url">
                <img :src="item.url" alt="图片无法加载" :class="{'full-width':isFullWidth}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['swipelist','isFullWidth']
}
</script>
<style lang="less" scope>
    .mint-swipe-items-wrap{
        .mint-swipe-item{
            // width: 100%;
            text-align: center;
            img{
                width:auto;
                height: 100%;
            }
            .full-width{
                width: 100%;
            }
        }
    }


</style>