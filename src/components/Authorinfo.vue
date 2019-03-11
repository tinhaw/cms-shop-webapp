<template>
    <div class="authorinfo-container">
        <div class="authorinfo-header">
            <h3 class="authorinfo-title">作者简历</h3>
        </div>

        <hr>
        <div class="authorinfo-content">
           <div class="authorinfo-text">
               <h6>工作经历一</h6>
               <p>
                  时间：2007.09 － 2009.09;
               </p>
               <p>
                  公司：湖南省核工业地质局三〇六大队;
               </p>
               <p>
                  职务：岩土技术员;
               </p>
               <p>
                  项目经历：厦蓉高速郴州段勘察等。
               </p>
            </div>
           <div class="authorinfo-text">
               <h6>工作经历二</h6>
               <p>
                  时间：2009.10 － 2012.10;
               </p>
               <p>
                  公司：深圳市工勘岩土集团有限公司;
               </p>
               <p>
                  职务：岩土工程师;
               </p>
               <p>
                  项目经历：惠州万科双月湾、深圳万科第五园、云南华侨城、深圳地铁7号线、东莞地铁2号线等项目的工程地质勘察。
               </p>
            </div>
           <div class="authorinfo-text">
               <h6>工作经历三</h6>
               <p>
                  时间：2012.10 － 2018.12;
               </p>
               <p>
                  公司：深圳市创晷科技有限公司;
               </p>
               <p>
                  职务：法人代表/总经理;
               </p>
               <p>
                  业绩：一次失败的自主创业经历； 
               </p>
               <p>
                  公司经营范围：电子支付产品的经销及开发。 
               </p>
            </div>
           <div class="authorinfo-text">
               <h6>作者github地址</h6>
               <p>
                  <a href="https://github.com/tinhaw">https://github.com/tinhaw</a>
               </p>
              
            </div>
           <div class="authorinfo-btn">
               <mt-button type="danger" size="large" plain @click.native="goProjectsList">
                  点击，去看看作者的项目列表
               </mt-button>
            </div>

        </div>
      
    </div>
</template>

<script>
export default {
    methods:{
       goProjectsList(){
          this.$router.push("/author/projects")
       }
    }
}
</script>

<style lang="less" scoped>
    .authorinfo-container{
        // padding:0 5px;
        margin:0 .1rem;
    }
   .authorinfo-title{
       text-align:center;
       font-size: .2rem;
       line-height: .4rem;
       color:brown;
   } 

   .authorinfo-content{
       .authorinfo-text{
           margin:.1rem 0;
           padding:.05rem .1rem;
           box-shadow: 0 0 .08rem #888;
           border-radius: .05rem;
           p{
                text-indent: .2rem;
                color:#222;
                font-size: .17rem;
                margin:0;
           }
           h6{
                color:black;
                font-size: .18rem;
                font-weight: 800;
                margin:.1rem 0;
            }

       }
       .authorinfo-btn{
               margin:.2rem 0 0;
       }


   }
</style>
