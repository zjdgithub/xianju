<template>
	<div class="practiceposition">
		<h2 class="title">
			<router-link tag="i" :to="{name:'AppMain'}"><i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
			<span>
				实习专区
			</span>
		
		</h2>
		 <div class="nav">
		 	  <ul>
		 	  	<li>转正机会</li>
		 	  	<li>短期实习</li>
		 	  	<li class="noborder">寒假实习</li>
		 	  </ul>
		 	
		 </div>
		 <div class="list">
		 <ul>
			<router-link :to="{name:'PositionDetails',params:{id:pro},query:{content:'khkjj'}}" tag="li" v-for="pro in pros" :key="pro.id">
				<div class="firstdiv"></div>
				<div class="job">
					<h2 >{{pro.posname}}</h2>
					<h3>{{pro.companytype}}</h3>
					<p><span>{{pro.address}}</span>&nbsp;&nbsp;<span>{{pro.express}}</span>&nbsp;&nbsp;<span>{{pro.education}}</span></p>
				    <h5><span>{{pro.companyname}}</span>&nbsp;&nbsp;<span>{{pro.jobtype}}</span></h5>
				</div>
				<div class="pay">
					<p>{{pro.pay}}</p>
					<h3>{{pro.duration}}</h3>
				</div>
			</router-link>
			
		</ul>
	    </div>
	
		
	</div>
</template>

<script>
	export default{
		name:"PracticePosition",
		data:function(){
			return {
				pros:[]
			}
		},
		mounted(){
			fetch('/api/position/list').then((response)=>response.json())
			  .then((res)=>{
			  	console.log(res.data.subjects);
			  	this.pros=res.data.subjects;
			  })
		}
	}
</script>

<style lang='scss'>
	@import '../../style/usage/modules/position/Practiceposition.scss';
</style>