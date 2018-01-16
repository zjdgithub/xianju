<template>
	<div class="sign">
		<div class="signbg">
	         <img src="../../../static/img/mine/sign.png" title="xianju"/>
		</div>
		<div class="body">
			<router-link :to="{name:'AppSignIn'}" tag="button">登录</router-link>
			<router-link :to="{name:'AppSignUp'}" tag="button">注册</router-link>
			<router-link :to="{name:'AppMain'}" tag="p">随便看看</router-link>
		</div>
		<div class="foot">
			<div class="other">
				<img src="../../../static/img/mine/foot_12.png"/>
				
			</div>
			<div class="footer">
				<div><span><i class="fa fa-weixin" aria-hidden="true"></i></span><p>微信</p></div>
				<div><span><i class="fa fa-qq" aria-hidden="true"></i></span><p>QQ</p></div>
				<div><span><i class="fa fa-weibo" aria-hidden="true"></i></span><p>微博</p></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'AppSign',
	}
</script>

<style lang="scss" scoped>
   .sign{
   	width:100%;
   	height:100%;
   	background:#fff;
   	.signbg{
   		width:100%;
   		height:3rem;
   	   img{
   	   	width:100%;
   	   	height:100%;
   	   }
       
        
   	}
   .body{
   	width:100%;
   	display:flex;
   	flex-direction: column;
    margin-top:-0.37rem;
   	button{
   		width:2.95rem;
   		color:#12c4b8;
   		height:0.37rem;
   		font-size:0.18rem;
   		text-align:center;
   		border:1px solid #12c4b8;
   		border-radius: 0.2rem;
   		background:rgba(255,255,255,0);
   		margin:0 auto 0.21rem;
   	}
   	p{
   		width:100%;
   		line-height:0.2rem;
   		text-align:center;
   		text-decoration: underline;
   		color:#333333;
   		font-size: 0.1414rem;
   	}
   }
   .foot{
   	width:100%;
   	height:1.3rem;
   	position: fixed;
   	background:#fff;
   	z-index:9999;
   	bottom:0;
   	.other{
   		width:100%;
   		height:0.4rem;
   		img{
   			width:100%;
   			height:100%;
   		}
   		
   	}
   	.footer{
   		width:100%;
   		display:flex;
   		justify-content: space-around;
   		div{
   			display:flex;
   			flex-direction:column;
   			align-items: center;
   			color:#777777;
   			span{
   			width:0.37rem;
   			height:0.37rem;
   			border:1px solid #999999;
   			border-radius: 100%;
   			text-align: center;
   			line-height: 0.37rem;
   			color:#666666;
   			}
   			span:hover{color:#12C4B8;} 
   			p{
   				margin-top:0.12rem;
   				font-size:0.12rem;
   			}
   		
          }
     	}
    }
}
   
</style>