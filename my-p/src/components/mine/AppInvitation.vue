<template>
	<div class="appinvitation">
		
		<h2 class="title">
			<router-link tag="i" :to="{name:'AppMine'}"><i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
			<span>
				面试邀请
			</span>
		
		</h2>
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
	export default {
		name:"AppInvitation"
	}
</script>

<style lang='scss' scoped>
	
@import "../../style/usage/modules/mine/AppInvitation.scss";
</style>