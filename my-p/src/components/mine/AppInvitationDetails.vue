<template>
	<div class="details">
		<h2 class="title">
			<router-link tag="i" :to="{name:'AppInvitation'}"><i class="fa fa-chevron-left" aria-hidden="true"></i></router-link>
			<span>
				邀请详情
			</span>
		
		</h2>
		<div class="contents">
			<div class="header">
				<img src="" alt="" />
				<p><span>公司名称</span></p>
			</div>
			<div class='content'>
				<p>
					你好：</br>
					<pre>
	本公司在已经预览了你的建立之后
对你展开面试淮本公司在已经预览了你
的建立之后决对你展开面试淮街 本公司
在已经预览了你的建立之后决对你展开
面试淮街本公司在已经预览了你的建之
后决对你展开面试淮街本公司在已经预
览了你的建立之后决对你展开面试淮街
				     </pre>
				     </br>
				     面试地点：<br/>
				     <span>4月25</span>
				     
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"AppInvitationDetails"
	}
</script>

<style lang="scss" >
  @import '../../style/usage/modules/mine/InvitationDetails';
	
</style>