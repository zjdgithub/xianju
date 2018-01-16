<template lang="html">
	<!--注册页的组件-->
	<div class="signUp">
		<div class="signbg">
			 <router-link class="re" :to="{name:'AppSign'}" tag="img" src="../../../static/img/mine/sign_02.png">
			 	
			 </router-link>
	         <img src="../../../static/img/mine/sign.png" title="xianju"/>
		</div>
		<div class="mainbody">
			<form action="">
				<div class="sign_info">
					<img src="../../../static/img/mine/sign_03.png" alt="pic "  title="xianju"/>
					<p> <input type="text" placeholder="请输入手机号" /></p>
				</div>
				
				<div class="sign_info">
					<img src="../../../static/img/mine/sign_08.png" alt="pic "  title="xianju"/>
					<p> <input type="password" placeholder="请设置密码" /></p>
				</div>
				<div class="sign_info">
					<img src="../../../static/img/mine/sign_08.png" alt="pic "  title="xianju"/>
					<p> <input type="password" placeholder="请确认密码" /></p>
				</div>
				<button type="submit" >注册</button>
			</form>
		</div>
		<div class="agreement">
			<h1>注册即表示同意本<span>软件协议</span></h1>
		</div>
	</div>
</template>
	
<script>
	export default {
		name: 'signUp'
	}
</script>
	
<style lang="scss" scoped>
.signUp{
		width:100%;
		height:100%;
		background:#fff;
	   	.signbg{
	   		width:100%;
	   		height:3rem;
	   		
	   	   .re{
	   			width:0.4rem;
	   			height:0.4rem;
	   			position:absolute;
	   			top:0;
	   			left:0;
	   		  }
	   	     img{
			   	   	width:100%;
			   	   	height:100%;
			    }
     
      }
      .mainbody{
      	width:100%;
      	height:2.3rem;
      	background:rgba(255,255,255,0);
      	margin-top:-0.40rem;
      	z-index:999;
      	form{
      		height:100%;
      		width:2.95rem;
      		margin:0 auto;
      		button{
      			width:100%;
      			height:0.37rem;
      			color:#12c4b8;
      			font-size:0.17rem;
      			text-align:center;
      			line-height:0.37rem;
      			border-radius:0.2rem;
      			background:#fff;
      			border:1px solid #12c4b8;
      			margin-top:0.52rem;
      		}
      		div{
      			width:90%;
      			display:flex;
      			height:0.45rem;
      			margin:0 auto 0.05rem;
      			img{
      				margin-top:0.03rem;
      				width:0.17rem;
      				height:0.20rem;
      			}
      			p{
      				width:100%;
      				margin-left:0.06rem;
      				height:0.26rem;
      				border-bottom:0.07px solid #999999;
      				input{
      					border:0 solid #fff;
      					line-height:0.24rem;
      					color:#999999;
      					font-size:0.15rem;
      					background:rgba(255,255,255,0);
      					
      				}
      			}
      			
      		}
      	}
      	
      }
      .agreement{
      	width:100%;
      	height:0.88rem;
      	background:#fff;
     
      	position:fixed;
      	bottom:0;
      	left:0;
      	z-index:9999;
      	h1{
      		width:100%;
      		line-height:0.88rem;
      		text-align:center;
      		color:#858585;
      		font-size:0.12rem;
      		span{
      			color:#12c4b8;
      			text-decoration: underline;
      		}
      	}
      }
	}
</style>