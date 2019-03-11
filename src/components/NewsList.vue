<template>
    <div>
        <ul class="mui-table-view">
				<router-link class="mui-table-view-cell mui-media" v-for="item in news_list" :key="item.news_id" tag="li" :to="'/home/newsdetail/'+item.news_id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                <span class="post_time">发表时间：{{item.add_time|timeFormat}}</span>
                                <span class="click_times">点击：{{item.click}}</span>
                            </p>
						</div>
					</a>
				</router-link>


			</ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data(){
        return {
            news_list:[]
        }
    },
    methods:{
        getNewsList(){
            this.$http.get('get/newslist').then((response)=>{
                if(response.body.code==0){
                    this.news_list=response.body.data.list;
                }else{
                    Toast("加载新闻列表失败...")
                }
            })
        }
    },
    created(){
        this.getNewsList()
    }
}
</script>
<style lang="less" scoped>
    .mui-media-body{
        font-size: .16rem;
        .mui-ellipsis{
            font-size: .14rem;
            color:#226aff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
