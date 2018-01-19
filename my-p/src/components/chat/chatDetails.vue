<template>
	<div class="chatdetails">
		 <TopNav3 class="title">
		 	<span slot='info'>{{$route.params.id?$route.params.id.friendnick:''}}</span>
		 <!--	<img slot='img' src="../../../static/img/chat/shezhi.png"/>-->
		 </TopNav3>
		 
		<div class="chatbody">
		
		
			<div class="chatinfos">
				
			<h2><span>{{$route.params.id?$route.params.id.chat_date:''}}</span></h2>
			<div  class="chatinfo">
				<img :src="$route.params.id?$route.params.id.head_portrait:''" title="xianju"/>
				<p>{{$route.params.id?$route.params.id.content:''}}</p>
			</div>
			</div>
			
		</div>
		<div class="foot">
			<div>
				<img src="../../../static/img/chat/voice.png"/>
				<input type=""/>
				<img src="../../../static/img/chat/face.png"/>
				<img src="../../../static/img/chat/add.png" alt="" />
			</div>
		</div>
	</div>
	
</template>

<script>
	import TopNav3 from '../pubcomponents/TopNav3'
	export default{
		name:'AppChatDetail',
		data(){
			return{
				
			}
		},
		components:{
			TopNav3
		}
		
	}
</script>

<style lang='scss' scoped>
   *{
   	 box-sizing: border-box;
    }
 .chatdetails{
   	width:100%;
   	height:100%;
    background:#fff;
    overflow:scroll;
    .title{
    	position: fixed;
    	top:0;
    }
   	 .chatbody{
   		display:flex;
   		flex-direction: column;
   		height:auto;
   		margin-top:0.44rem;
   		.chatinfos{
   			width: 100%;
   			margin-top:0.15rem;
   			h2{
   				width:100%;
   				text-align:center;
   				height:auto;
   				span{
   					padding:0.05rem 0.08rem;
   					border-radius: 0.05rem;
   					background:#dcdde2;
   					color:#fffefe;
   					font-size:0.12rem;
   					
   				}
   			}
   			.chatinfo{
   			width:100%;
   			height:auto;
   			display:flex;
   			align-items: center;
   			padding:0 0.15rem;
   			margin-top:0.18rem;
   			img{
   				
   			}
   			p{
   				color:red;
   				padding:0.13rem;
   				color:#333333;
   				font-size:0.15rem;
   				width:60%;
   				background:#f0fbfb;
   				border-radius: 0.05rem;
   				margin-left:0.1rem;
   			}
   		}
   		}
   		
   	}
   	.foot{
   		width:100%;
   		height:0.5rem;
   		background:#f0fbfb;
   		position:fixed;
   		bottom: 0;
   		z-index:9999;
	   		div{
	   			width:100%;
	   		    height:100%;
	   			display:flex;
	   			justify-content: space-around;
	   			align-items: center;
	   			input{
	   				width:2.44rem;
	   				height:0.35rem;
	   				border-radius: 0.05rem;
	   				border:0.7px #999999 solid;
	   			}
	   			img{
	   				width:0.26rem;
	   				
	   			}
	   		}
    	}
   }
   
</style>