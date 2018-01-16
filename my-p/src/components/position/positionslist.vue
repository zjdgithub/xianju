<template>
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
</template>

<script>
	
	//import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	import Vue from 'vue'
	 Vue.use(InfiniteScroll);
	export default{
		name:"PositionsList",
		data:function(){
			return {
				pros:[],
			 
				count:4,
				page:0,
				loading:false,
				isOver:false
			};
		},
		methods:{
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
			}
			
		},
		mounted(){
			this.loadMore();
		    
		}
	}
</script>


<style lang="scss" scoped>
	@import '../../style/usage/modules/pub/listofposition.scss';
</style>