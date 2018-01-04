<template>
	<div class="progress">
		<h2 class="title">
			<router-link tag="i" :to="{name:'AppInvitation'}"><i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
			<span>
				投递进展
			</span>
		
		</h2>
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
	export default{
		name:'AppProgress'
	}
</script>

<style lang="scss" scoped>
  @import "../../style/usage/modules/mine/AppProgress"
</style>