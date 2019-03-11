import VueRouter from "vue-router"
import HomePage from '../components/HomePage.vue'
import MemberPage from '../components/MemberPage.vue'
import ShopCart from '../components/ShopCart.vue'
import Search from '../components/Search.vue'
import NewsList from '../components/NewsList.vue'
import NewsDetail from '../components/NewsDetail.vue'
import PicList from '../components/PicList.vue'
import PicDetail from '../components/PicDetail.vue'
import GoodsList from '../components/GoodsList.vue'
import GoodsInfo from '../components/GoodsInfo.vue'
import Authorinfo from '../components/Authorinfo.vue'
import Authorprojects from '../components/Authorprojects.vue'
import Instruction from '../components/Instruction.vue'

const router = new VueRouter({
    routes:[
        {path:'/home',component:HomePage},
        {path:'/member',component:MemberPage},
        {path:'/shopcart',component:ShopCart},
        {path:'/search',component:Search},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsdetail/:news_id',component:NewsDetail},
        {path:'/home/piclist',component:PicList},
        {path:'/home/picdetail/:img_id',component:PicDetail},
        {path:'/home/goodslist',component:GoodsList},
        {path:'/home/goodsinfo/:id',component:GoodsInfo,name:"goodsinfo"},
        {path:'/author/info',component:Authorinfo},
        {path:'/author/projects',component:Authorprojects},
        {path:'/author/instruction',component:Instruction},
        {path:'/',redirect:'/home'},
    ],
    linkActiveClass:'mui-active'
})

export default router;