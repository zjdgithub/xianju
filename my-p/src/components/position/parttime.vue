<template>
	<div class="parttimeposition">
		<TitleNav>兼职专区</TitleNav>
		 <div class="nav">
		 	  <ul>
		
		 	  	<li :class="{'act':isactive1}" @click="isactive1=true;isactive2=false">附近岗位</li>
		 	  	<li :class="{'act':isactive2}" class="noborder" @click="isactive2=true;isactive1=false">周末兼职</li>
		 	  </ul>
		 	
		 </div>
		 <PositionsList></PositionsList>
	     
		
	</div>
</template>

<script>
	import PositionsList from './positionslist'
	import TitleNav from '../pubcomponents/TopNav'
	export default{
		name:"ParttimePosition",
		data(){
			return {
				isactive1:true,
				isactive2:false
			}
		},
		components:{
			PositionsList,
			TitleNav
		},
		
	}
</script>

<style lang='scss'>
	@import '../../style/usage/modules/position/parttime.scss';
	
</style>