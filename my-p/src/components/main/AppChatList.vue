<template>
	<div>
	<div class="appChatList" v-for="props in pros" :key="props.friend_id">
		
			<div class="chatList-left">
				<div class="headportrait"><img :src="props.head_portrait" /></div>
			</div>
			<div class="chatList-middle">
				<p class="nickName">{{props.friendnick}}</p>
				<p class="chatContent"><span class="hot">[热文]</span>
					{{props.content}}
				</p>
				
			</div>
			<div class="chatList-right">
				<div>{{props.chat_date}}</div>
			
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		name:'appChatList',
		props:['pros'],
		data:function(){
			return {
				
			}
		}
		
	}
</script>

<style lang="scss" scoped>

@import '../../style/usage/core/reset.scss';

.appChatList{
	background:#fff;
	 @include flexbox();
	
	.headportrait{
	width:0.5rem;
	height:65px;
	/*background: #42B983;*/
	margin-left:0.1rem;
	line-height: 65px;
	text-align: center;
	}


	.chatList-middle{
		width:2.74rem;
		height:65px;
		padding-left:0.11rem;
		/*background: red;*/
		font-size: 0.13rem;
		@include flexbox();
		@include flex-direction(column);
		@include justify-content(center);
		.nickName{
			padding-bottom: 0.01rem;
			font-weight: 600;
			color:#333333;
			
		}
		.chatContent{
			font-size: 0.12rem;
			color:#666;
			width:100%;
			overflow: hidden;
			white-space:nowrap;
			text-overflow: ellipsis;
			.hot{
				color:#ee8701;
			}
		}
	}
	.chatList-right{
		width:0.31rem;
		height:38px;
		/*background: yellow;*/
		div{
			margin-top: 0.17rem;
		}
	}
}

</style>