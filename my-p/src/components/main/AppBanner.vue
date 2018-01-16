<template>
	 <div class="swiper-container app-banner swiper-container-horizontal">
      <div class="swiper-wrapper">
        <div v-for="billboard in billboards" :key='billboard.id' class="swiper-slide">
        	<img width="100%" :src="billboard.imageUrl" :alt="billboard.name" />
        </div>
      </div>
      
      <!--<div class="swiper-pangination swiper-pagination-bullets" >
      	 <span class="swiper-pagination-bullet"></span>
      	 <span class="swiper-pagination-bullet"></span>
      	 <span class="swiper-pagination-bullet"></span>
      </div>-->
  </div>
</template>

<script>
	
	import axios from 'axios'
	
	export default{
		name:"AppBanner",
		data(){
			return {
				billboards:[]
			}
		},
		methods:{
			getData(){
				var that=this;
				this.billboards=[{id:1,name:'banner1',imageUrl:'../../../static/img/banner/1.jpg'},
				{id:2,name:'banner2',imageUrl:'../../../static/img/banner/2.jpg'},
				{id:3,name:'banner3',imageUrl:'../../../static/img/banner/3.jpg'}];
			
		    },
		},
		mounted(){
			this.getData();
			
		},
		updated(){
			new Swiper('.app-banner',{loop:true,autoplay: 3000})
		}
	}
</script>

<style>
</style>