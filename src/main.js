import Vue from 'vue'
import app from './app.vue'

// import { Button,Header,Swipe, SwipeItem,Field,Lazyload } from 'mint-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import router from './routers/router'
import VueResource from 'vue-resource'
import moment from 'moment'

import './css/iconfont/iconfont.css'
import './css/app.less'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// Vue.use(VuePreview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0.85,
//     tapToClose: true,
//     tapToToggleControls: false
//   })

Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.component(Button.name,Button)
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Field.name, Field)
// Vue.use(Lazyload)
Vue.filter("timeFormat",function(dateStr){
    return moment(dateStr).format("YYYY年MM月DD日 HH:mm:ss")
})


Vue.http.options.root='https://www.easy-mock.com/mock/5c491e5742fb8805d9e6e5dc/vue';
Vue.http.options.emulateJSON = true;

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        selectedNum:1,
        // addingGoods:{},
        cartInfos:[],
    },
    mutations:{
        updateSlectedNum(state,newVal){
            state.selectedNum=newVal
        },
        updateCartSlectedNum(state,info){
            state.cartInfos.some((item,index)=>{
                if(item.id==info.id){
                    // state.cartInfos[index].num=info.num;
                    item.num=info.num;
                    return true;
                }
            })
        },
        initSelectedNum(state){
            state.selectedNum=1;
        },
        addCartGoods(state,info){
            let isHas=false;
            state.cartInfos.some(item=>{
                if(item.id==info.id){
                    item.num+=info.num;
                    isHas=true;
                    return true;
                }
            })
            if(!isHas){
                info.isSelected=false;
                state.cartInfos.push(info);
            }
        },
        updateCartInfos(state,newInfo){
            //请求真实数据的情况下
            // state.cartInfos.forEach(item=>{
            //     if(item.id==newInfo.id){
            //         state.cartInfos.title=newInfo.title;
            //         state.cartInfos.src=newInfo.src;
            //     }
            // })
            //mock数据的处理方式
            if(state.cartInfos[newInfo.index]){
                state.cartInfos[newInfo.index].title=newInfo.title;
                state.cartInfos[newInfo.index].src=newInfo.src;
            }
        },
        changeSelected:function(state,info){
            state.cartInfos.some((item)=>{
                if(item.id==info.id){
                    // state.cartInfos[index].isSelected=info.isSelected;
                    item.isSelected=info.isSelected;
                    return true;
                }
            })
        },
        deleteItem(state,id){
            
            state.cartInfos.some((item,i)=>{
                if(item.id==id){
                    state.cartInfos.splice(i,1);
                    return true;
                }
            })

        }
    },
    getters:{
        total_count:function(state){
            let count=0;
            state.cartInfos.forEach(item=>{
                    count+=item.num;

            });
            return count;
        },
        ids:function(state){
            const ids=[];
            state.cartInfos.forEach(item=>{
                ids.push(item.id);
            });
            return ids;
        },
        getIsSelected:function(state){
            const o={};
            state.cartInfos.forEach(item=>{
               o[item.id]=item.isSelected;
            })
            return o;
        },
        getGoodsNum:function(state){
            const o={};
            state.cartInfos.forEach(item=>{
                o[item.id]=item.num;
             })
             return o;
        },
        // getSum:function(state){
        //     let sum=0;
        //     state.cartInfos.forEach(item=>{
        //         if(item.isSelected){
        //             sum+=item.num*item.price;
        //         }
        //     })
        //     return sum;
        // }
        
    }
})

var vm=new Vue({
    el:"#app",
    render:c=>c(app),
    router,
    store
})