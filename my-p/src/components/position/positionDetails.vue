<template>
	<div class="positiondetail">
		<h2 class="title">
			<router-link tag="i" :to="{name:'AppMain'}"><i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
			<span>
				职位详情
			</span>
		     <b class="collect">收藏</b>
		</h2>
		<div class="contents">
			<div class="top">
				<h4><span>{{details.posname}}</span>&nbsp;&nbsp;<span>{{details.pay}}</span></h4>
			    <div class="no"><span>{{details.address}}</span>&nbsp;&nbsp;<span>{{details.express}}</span>&nbsp;&nbsp;<span>{{details.education}}</span></div>
			    <p>公司的待遇说明公司的待遇说明公司的待遇说明
			    公司的待遇说明
			    公司的待遇说明
			    公司的待遇说明公司的待遇说明公司的待遇说明</p>
			</div>
			<div class="middle">
				<img src="" alt="" title=""/>
				<div class="el">
				   <span>{{details.companyname}}</span>
				   <p><span>{{details.jobtype}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{{details.companytype}}</span></p>
				</div>
			</div>
			<div class="bot"><span>{{details.address}}</span><span class="location">定位</span></div>
		    <div class="posdetail">
		    	<h2>职位详情:</h2>
		    	<div class="poscontent">
		    		<h3><span>{{details.posname}}</span>&nbsp;&nbsp;<span>职位详情</span></h3>
		    		<p>描述内容描述内容描述内容描述内容描述内容描述内容描述内容
		    		描述内容描述内容描述内容描述内容描述内容描述内容</p>
		    	</div>
		    </div>
		     <div class="skilldetail">
		    	<h2>技能要求:</h2>
		    	<div class="poscontent">
		    		<h3><span>技能名称</span>&nbsp;&nbsp;<span>技能详情</span></h3>
		    		<p>技能要求</p>
		    	</div>
		    </div>
		    <div class="tochating">
		    	立即沟通
		    </div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"PositionDetail",
		data(){
			return {details:''}
		},
		mounted(){
			this.details= this.$route.params.id;
			console.log(this.details);
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
  @import '../../style/usage/modules/position/positiondetails'
</style>