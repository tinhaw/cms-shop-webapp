<template>
    <div class="app-container">
        <mt-header fixed :title="pathDic[$route.matched[0].path]">
			<span slot="left" @click="goBack" v-show="backwardFlag">
				<mt-button icon="back">返回</mt-button>
			</span>
		</mt-header>

		<transition>
		       <router-view></router-view>
		</transition>
 
       
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-dh" to='/home'>
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-dh" to='/member'>
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-dh" to='/shopcart'>
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.total_count}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-dh" to='/search'>
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import pathDic from './lib/pathdic.js'

export default {
    data(){
        return {
			backwardFlag:false,
			pathDic
        }
    },
    methods:{
		goBack(){
			this.$router.go(-1);
		}
	},
	created(){
		if(this.$route.path=='/home'){
			this.backwardFlag=false;
		}else{
			this.backwardFlag=true;
		}
	},
	watch:{
		"$route.path":function(newVal){
			// console.log(this.$route.matched[0].path)
			if(newVal=='/home'){
				this.backwardFlag=false;
			}else{
				this.backwardFlag=true;
			}
		}
	}
}
</script>

<style lang="less" scope>
	.app-container{
		padding-top:40px;
		padding-bottom:50px;
		overflow-x: hidden;
		background-color: #fff;
		height:calc(100vh);
	}
	.v-enter {
	opacity: 0;
	transform: translateX(100%);
	}

	.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);

	}

	.v-enter-active,
	.v-leave-active {
	transition: all 0.5s ease;
	}
	.v-leave-active{
		position: absolute;
	}

	.mui-bar-tab .mui-tab-item-dh.mui-active {
		color: #007aff;
	}

	.mui-bar-tab .mui-tab-item-dh {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}

	.mui-bar-tab .mui-tab-item-dh .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.mui-bar-tab .mui-tab-item-dh .mui-icon~.mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.mint-header.is-fixed{
		z-index: 99;
	}
</style>
