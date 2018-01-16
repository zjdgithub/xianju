<template>
	<div class="parttimeposition">
		<TitleNav>兼职专区</TitleNav>
		 <div class="nav">
		 	  <ul>
		
		 	  	<li>附近岗位</li>
		 	  	<li class="noborder">周末兼职</li>
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
		components:{
			PositionsList,
			TitleNav
		}
	}
</script>

<style lang='scss'>
	@import '../../style/usage/modules/position/parttime.scss';
</style>