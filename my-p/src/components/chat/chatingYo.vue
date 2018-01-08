<template>
	<div class="chat">
		<p><span @click="setname()">输入姓名：</span><span class="username">{{username}}</span></p>
	    <div class="contents" v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-immediate-check='false'
             infinite-scroll-distance="10">
	    	<div class="chatcontent" v-for="n in contents">
	     		<p class="content"><i class="fa fa-video-camera" aria-hidden="true">:</i>  hello !</p>
	     	</div>
	    </div>
	    <div class="chatiframe">
	     	
	     	<div class="send">
	     		<input type="text" name="" id="" value="" />
	     	    <span>发送</span>
	     	</div>
	     	<div class="item">
	     		<i class="fa fa-microphone" aria-hidden="true"></i>
	     		<i class="fa fa-picture-o" aria-hidden="true"></i>
	     		<i class="fa fa-video-camera" aria-hidden="true"></i>
	     		<i class="fa fa-microphone" aria-hidden="true"></i>
	     		<i class="fa fa-picture-o" aria-hidden="true"></i>
	     		<i class="fa fa-video-camera" aria-hidden="true"></i>
	     		<i class="fa fa-plus-circle" aria-hidden="true"></i>
	     	</div>
	     	
	     </div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	import Vue from 'vue'
     Vue.use(InfiniteScroll);
	export default{
		name:'AppChat',
		data(){
			return {
				username:'',
				loading:false,
				contents:5
			}
		},
		methods:{
			setname:function(){
				MessageBox.prompt('请输入您的姓名').then(({ value, action }) => {
                     this.username=value;
                  });
			},
			getItems:function(){
				if(this.contents>=28){
					this.loading=false;
					alert("数据已经全部加载！")
					return false;
				}
				else{
					this.contents+=10;
					this.loading=false;
				}
				
				
			},
			loadMore:function() {
				setTimeout(()=>{
					 this.loading = true
			         this.getItems();
				},2000)
			 
         }
		},
		mounted(){
		   this.loadMore()
		}
	}
</script>

<style lang="scss" scoped="scoped">
	*{
		margin:0;
		padding:0;
	}
	.chat{
		width:98%;
		color:red;
		height:100%;
		display:flex;
		flex-direction: column;
		margin:0.2rem auto 0.8rem;
		background:#fff;
		border:1px solid #8AA2BF;
		border-radius: 0.1rem;
		position: relative;
		p{
			width:100%;
			height:0.3rem;
			border:1px solid #00FFFF;
			border-radius:0.05rem;
			line-height:0,3rem;
			display:flex;
			box-sizing: border-box;
			padding:0 0.2rem;
		}
		.contents{
			width:100%;
			flex:1;
			
			box-sizing: border-box;
			overflow: scroll;
			padding: 0.1rem;
			margin:0 auto 1.03rem;
			border:1px solid #333333;
			background:rgba(0,0,0,0.5);
			.chatcontent{
				width:100%;
				height:0.3rem;
				margin-bottom: 0.15rem;
				color:black;
				display:flex;
				p{
					border:none;
					width:100%;
					height:0.3rem;
					line-height:0.3rem;
					border-radius: 0.05rem;
				   background:#F5A27D;
					i{
						line-height: 0.3rem;
						font-size:0.2rem;
						margin-right:0.2rem;
					}
				}
			}
		}
		.chatiframe{
			width:100%;
			height:0.8rem;
			
			display:flex;
			align-items: center;
			position:absolute;
			flex-direction: column;
			bottom:0.02rem;
			
			.send{
				width:95%;
				height:0.35rem;
				margin:0 auto;
				display:flex;
				input{
					width:80%;
					line-height:0.35rem;
					border-radius: 0.05rem;
					background:#fff;
					border:1px solid #2C3E50;
				}
				span{
					text-align:center;
					margin-left:0.08rem;
					width:15%;
					height:100%;
					line-height:0.35rem;
					font-size:0.18rem;
					background: #42B983;
					color:#fff;
					border-radius: 0.05rem;
				}
			}
			.item{
				width:100%;
				flex:1;
				display: flex;
				box-sizing: border-box;
				padding:0.06rem;
				align-items: center;
				justify-content:space-around;
				i{
					width:12%;
					color:#6A6A6A;
					height:100%;
					font-size:0.25rem;
					line-height:100%;
					
				}
			}
		}
	}
	
</style>