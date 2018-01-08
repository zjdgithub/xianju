<template lang="html">
	<!--注册页的组件-->
	<div class="signUp">
		
		<div class="logo-out">
			<div class="logo">logo</div>
		</div>
		<div class="message">
			<div class="put-div"><i>请输入手机号:</i>
				<input  type="text"/>
			</div>
			<div class="put-div"><i>验证码：</i>
				<input  type="text"/><i class="send">发送验证码</i>
			</div>
			<div class="put-div"><i>设置登录密码：</i>
				<input  type="password"/>
			</div>
			<div class="btn">注册</div>
		</div>
		<div class="agreement"></div>
	</div>
</template>
	
<script>
	export default {
		name: 'signUp'
	}
</script>
	
<style lang="scss">
	
</style>