<template>
<div class="main">
	<header>
	<div class="top">
       <div class="city">
       	  <router-link v-model="position" class="position" to="AppMap">{{position}}</router-link>
       	  <i class="fa fa-chevron-down" aria-hidden="true"></i>
       </div>
       <div class="search">
        <i class="fa fa-search" aria-hidden="true"></i>
       	<input type="text" placeholder="搜索职位或者公司"/>
       </div>
	</div>
	</header>
	<section class="banner">
         
          
	</section>
	<nav>
		<ul>
			<router-link :to="{name:'HotPosition'}" tag="li">热门专区</router-link>
			<router-link :to="{name:'PracticePosition'}" tag="li">实习专区</router-link>
			<router-link :to="{name:'ParttimePosition'}" tag="li">兼职专区</router-link>
		</ul>
	</nav>
	<div class="hot">推荐职位</div>
	<div class="list">
		<ul>
			<li v-for="pro in pros">
				<div class="firstdiv"></div>
				<div class="job">
					<h2>{{pro.posname}}</h2>
					<h3>{{pro.companytype}}</h3>
					<p><span>{{pro.address}}</span>&nbsp;&nbsp;<span>{{pro.express}}</span>&nbsp;&nbsp;<span>{{pro.education}}</span></p>
				    <h5><span>{{pro.companyname}}</span><span>{{pro.jobtype}}</span></h5>
				</div>
				<div class="pay">
					<p>{{pro.pay}}</p>
					<h3>{{pro.duration}}</h3>
				</div>
			</li>
			
		</ul>
	</div>
	</div>
</template>
<script>
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
			
			fetch('/api/position/list').then((response)=>response.json())
			  .then((res)=>{
			  	console.log(res.data.subjects);
			  	this.pros=res.data.subjects;
			  })
			
		}
	}
</script>

<style lang="scss">
	@import '../../style/usage/modules/Appmain.scss'
</style>