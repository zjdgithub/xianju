<template>
	<div class="appinvitation">
		
		<TopNav>
			<span slot='info'>面试邀请</span>
		     <span slot="img"></span>
		</TopNav>
		<div class="box-invitations">
		    <div class="invitation" v-for="n in 8">
		    	<div class="info">
		    		<img src="" alt="" />
		    		<div class="cont">
		    			<p class="companyname">公司名称</p>
		    			<p class="in">诚邀你面试</p>
		    		</div>
		    	</div>
		    	<div class="left">
		    		<p class="date">
		    			4月25
		    		</p>
		    		<p>
		    			<router-link :to="{name:'AppInvitationDetails'}">
		    				<span>未看</span>
		    			   <i class="fa fa-chevron-right" aria-hidden="true"></i>
		    				
		    			</router-link>
		    			
		    		</p>
		    	</div>
		    </div>
		</div>
	</div>
</template>

<script>
	import TopNav from '../pubcomponents/TopNav3'
	export default {
		name:"AppInvitation",
		components:{
			TopNav
		}
	}
</script>

<style lang='scss' scoped>
	
@import "../../style/usage/modules/mine/AppInvitation.scss";
</style>