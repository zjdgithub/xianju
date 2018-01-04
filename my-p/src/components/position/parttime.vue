<template>
	<div class="parttimeposition">
		<h2 class="title">
			<router-link tag="i" :to="{name:'AppMain'}"><i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
			<span>
				兼职专区
			</span>
		
		</h2>
		 <div class="nav">
		 	  <ul>
		
		 	  	<li>附近岗位</li>
		 	  	<li class="noborder">周末兼职</li>
		 	  </ul>
		 	
		 </div>
		 <div class="list">
		 <ul>
			<li v-for="pro in pros">
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
			</li>
			
		</ul>
	    </div>
	
		
	</div>
</template>

<script>
	export default{
		name:"ParttimePosition",
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
	@import '../../style/usage/modules/position/parttime.scss';
</style>