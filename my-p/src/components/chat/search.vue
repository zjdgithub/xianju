<template>
	<div class="searchfriends">
		<div class="title">
			<div class="se">
				<img src="../../../static/img/chat/sousu.png" title="xianju" />
				<input type="text" placeholder="请输入好友的昵称，手机号" />
			</div>
			<img @click="goTo" src="../../../static/img/chat/close.png" title='xianju'/>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'AppSearch',
		methods:{
			goTo(){
				window.history.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
   *{
   	box-sizing: border-box;
   	margin:0;
   	padding:0;
   	
   }
   .searchfriends{
   	width:100%;
   	height:1000%;
   	background:#fff;
   	
   	.title{
   		width:100%;
   		height:0.44rem;
   		background:#12c4b8;
   		padding:0.07rem 0.1rem;
   		display:flex;
   		align-items:center;
   		justify-content:space-between;
   		.se{
   			width:3.27rem;
   			height:100%;
   			background:#fff;
   			border-radius: 0.3rem;
   			padding:0.05rem 0.1rem;
   			input{
   				border:0;
   				width:80%;
   			}
   		}
   		
   	}
   }
</style>