<template>
	<div class="progress">
		
		<TopNav>
			<span slot="info">投递进展</span>
			<span slot="img"></span>
			
		</TopNav>
		<div class="box">
			<div v-for="i in 7" class="progresslist">
				<h2><span>职位名称</span>&nbsp;&nbsp;<b>(薪资)</b></h2>
				<h3><span>公司名称</span>&nbsp;&nbsp;<b>(城市)</b></h3>
				<p><span>日期</span><strong>投递成功</strong></p>
			</div>
		</div>
	</div>
</template>

<script>
	import TopNav from '../pubcomponents/TopNav3'
	export default{
		name:'AppProgress',
		components:{
			TopNav
		}
	}
</script>

<style lang="scss" scoped>
  @import "../../style/usage/modules/mine/AppProgress"
</style>