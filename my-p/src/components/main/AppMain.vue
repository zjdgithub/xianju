<template>
<div class="main">
	<header>
		
	<div class="top">
       <div class="city">
       	 <i class="fa fa-map-marker" aria-hidden="true"></i>
       	  <span> {{location}}</span>
       	
       </div>
       <router-link :to="{name:'AppCity'}" tag="div" class="search">
        <i class="fa fa-search" aria-hidden="true"></i>
       	<input type="text" placeholder="搜索职位,公司地点"/>
       </router-link>
	</div>
	
	</header>
	<section class="banner">
         <AppBanner></AppBanner>
	</section>
	<nav>
		<ul>
			<router-link :to="{name:'HotPosition'}" tag="li" :key='1'><img src="../../../static/img/nav/nav1.jpg"/><span>热门专区</span></router-link>
			<router-link :to="{name:'PracticePosition'}" tag="li" :key="2"><img src="../../../static/img/nav/nav2.jpg"/><span>实习专区</span></router-link>
			<router-link :to="{name:'ParttimePosition'}" tag="li" :key='3'><img src="../../../static/img/nav/nav3.jpg"/><span>兼职专区</span></router-link>
		</ul>
	</nav>
	
	<div class="list">
		<ul
		 v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-immediate-check='false'
             infinite-scroll-distance="4">
			<router-link :to="{name:'PositionDetails',params:{id:pro},query:{content:'khkjj'}}" tag="li" v-for="pro in pros" :key="pro.id">
				
				<div class="job">
			
				    <div class="left">
				    	<h2>{{pro.posname}}</h2>
				    	<p><span>{{pro.address}}</span>&nbsp;&nbsp;<span>{{pro.express}}</span>&nbsp;&nbsp;<span>{{pro.education}}</span></p>
				    	<h3><span>五险一金</span><span>带薪年假</span><span>绩效奖金</span></h3>
				    </div>
				    <div class="pay">
					     <p>{{pro.pay}}</p>
					    <h3>{{pro.duration}}</h3>
				   </div>
				</div>
				<div class="companyinfo">
					<h5><span><img :src='pro.poster' alt="" />{{pro.companyname}}{{pro.posname}}</span><i class="fa fa-chevron-right" aria-hidden="true"></i></h5>
				</div>
				
			</router-link>
			
		</ul>
	</div>
	</div>
</template>
<script>
	import AppBanner from './AppBanner';
	//import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	import Vue from 'vue'
	 Vue.use(InfiniteScroll);
	 
	 import {mapState,mapActions} from 'vuex'
	export default{
		name:"AppMain",
		data:function(){
			return {
				pros:[],
			    indexProps:[],
				count:4,
				page:0,
				loading:false,
				isOver:false,
				
			};
		},
		components:{AppBanner},
		methods:{
			...mapActions(['changeCity']),
			toArray(obj){
				var arr=[];
				for(var i in obj){
					arr.push[i];
				}
				return arr;
			},
			getPros(){
			let that=this;
			fetch('/api/position/list').then((response)=>response.json())
			  .then((res)=>{
			  if(that.pros.length>=12){
			    
			  	that.isOver=true;
			  	
					that.loading=false;
			  	return false;
			  }
			  else{
			  	 that.pros=res.data.subjects;
			  	 that.page++;
			  	 that.loading=false;
			  }
			   
			  })
			  
			},
			loadMore(){
				if(this.isOver){
					 Toast({
					  message: '已经全部加载了',
					  position: 'bottom',
					  duration: 3000,
					  className:'isToast',
					
					});
					return false;
				}	
				else{
					this.getPros();
				}
			},
			load:function(){	
		  		this.changeCity(localStorage.position) ;
		        console.log(1)
			}
			
		},
		computed:{
			...mapState(['location'])
		},
		mounted(){
			let that = this
			console.log(this);
		  	let timeout  = setInterval(function(){
		  		that.load()
		  		if(that.location != '定位中'){
		  			
		  			clearInterval(timeout);
		  		}
		  	},1000)
			this.loadMore();
		    
		}
	}
</script>

<style lang="scss" scoped>
	.isToast{
		/*background:rgba(0,0,0,0.4);
		height:0.3rem;*/
	}
</style>
<!--<script>
	export default{
		name:"AppMain",
		data:function(){
			return {
				position: "定位中",
				pros:[],
			};
		},
		methods:{
			load:function(){
		  		this.position = localStorage.position
		  	}  
		},
		mounted(){
			let that = this
		  	let timeout  = setInterval(function(){
		  		//alert(1)
		  		
		  		that.load()
		  		console.log(1)
		  		if(that.position != '定位中'){
		  			clearInterval(timeout);
		  		}
		  	},1000)
			
		
			
		}
	}
</script>-->
