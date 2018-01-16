<template>
	<div class="hotposition">
		 <TitleNav>
		 	热门专区
		 </TitleNav>
		 	
		 <div class="banner">
		 	 <div class="imgs">
		 	 	<img src="../../../static/img/banner/hotbanner.png" title="xianju"/>
		 	 	
		 	 </div>
		 	 <div class="pic">
		 	 	<img src="../../../static/img/banner/jinxuan.png" alt="tltle" title="xianju"/>
		 	 	<img src="../../../static/img/banner/guoyou.png" alt="pic" title="xianju"/>
		 	 </div>
		 </div>	
		<PositionsList></PositionsList>
	
		
	</div>
</template>

<script>
	import PositionsList from './positionslist'
	import TitleNav from '../pubcomponents/TopNav'
	export default{
		name:"HotPosition",
		components:{PositionsList,TitleNav}
	}
</script>

<style lang='scss'>
	@import '../../style/usage/modules/position/HotPosition.scss';
</style>