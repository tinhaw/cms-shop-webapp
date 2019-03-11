<template>
    <div class="comments-container">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="请输入评论内容（最多120字）" rows="4" v-model="cmt_content" class="cmt-textarea"></textarea>
        <mt-button type="primary" size="large" @click="submitComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.cmt_id">
                <div class="cmt-head">第{{index+1}}楼,用户:{{ item.user_name }},发表时间:{{ item.add_time| timeFormat }}</div>
                <div class="cmt-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">更多评论...</mt-button>
    </div>
</template>

<script>
import { Toast,Indicator } from 'mint-ui'
import moment from 'moment'

export default {
    data(){
        return {
            cmt_content:"",
            comments:[],
            toastInstance:null,
            page:1
        }
    },
    props:["id"],
    methods:{
        getCommentList(){
            
            this.$http.get('get/comments/'+this.id+'?page='+this.page).then(response=>{
                if(response.body.code==0){
                    this.comments=this.comments.concat(response.body.data.list);
                    Indicator.close();
                }else{
                    Toast("评论列表加载失败...")
                }
            })
        },
        submitComment(){
            
            Indicator.open({
                text: '评论提交中...',
                spinnerType: 'fading-circle'
            });
            this.$http.post('post/submitcmt/'+this.id,{content:this.cmt_content}).then(response=>{
                if(response.body.code==0){
                    // Toast("评论提交成功");
                    const datetime=moment().format('YYYY-MM-DD HH:mm:ss');
                    this.comments.unshift({
                        user_name:"自己",content:this.cmt_content,add_time:datetime,cmt_id:response.body.data.cmt_id
                    })
                    // console.log(this.comments)
                    Indicator.close();
                    this.cmt_content="";
                }else{
                    Toast("评论提交失败")
                }
            })
        },
        getMore(){
            this.page++;
            this.getCommentList();
        }
    },
    created(){
        this.getCommentList();
    }
}
</script>

<style lang="less" scope>
    .comments-container{
        margin:.3rem 0;
        .cmt-textarea{
            font-size: .14rem;
            margin:0;
        }
        .cmt-list{
            margin-top:.3rem;
        }
    }
    .cmt-item{
        margin-bottom:.1rem;
        .cmt-head{
            font-size: .13rem;
            background-color:#ccc;
            line-height: .3rem;
            text-indent: .1rem;
            border-radius: .03rem;
        }
        .cmt-body{
            font-size: .14rem;
            line-height: .3rem;
            text-indent: .1rem;
        }
    }
    
</style>