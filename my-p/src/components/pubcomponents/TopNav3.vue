<template>
	<div class="head">
			<h1>
				<i @click="goTo()"><img src="../../../static/joblist/fanhui.png" title="xianju"/></i>
				<slot name="info"></slot>
				<i @click="collect"><slot name='img'></slot></i>
			</h1>
		</div>
</template>

<script>
	export default {
		name:'AppTopNav3',
		methods:{
			collect(){
				this.$parent.fn();
			},
			goTo(){
			window.history.go(-1);
             
			}
		},
	}
</script>

<style lang="scss" scoped="scoped">
   @import '../../style/usage/core/reset.scss';
   
   .head{
	width:100%;
	height:0.44rem;
	background:#12c4b8;
	box-sizing: border-box;
	h1{
	 width:100%;
	  @include flexbox();
	  @include align-items(center);
	  @include justify-content(space-between);
	  line-height:0.44rem;
	  padding:0 0.1rem;
	  
	  span{
	  	font-size:0.17rem;
	  	color:#ffffff;
	  	
	  }
	}
	
}

</style>