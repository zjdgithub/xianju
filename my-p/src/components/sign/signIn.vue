<template lang="html">
	<!--注册页的组件-->
	<div class="signIn">
		<div class="signbg">
			 <router-link class="re" :to="{name:'AppSign'}" tag="img" src="../../../static/img/mine/sign_02.png">
			 	
			 </router-link>
	         <img src="../../../static/img/mine/sign.png" title="xianju"/>
		</div>
		<div class="mainbody">
			<form action="">
				<div class="sign_info">
					<img src="../../../static/img/mine/signIn_03.png" alt="pic "  title="xianju"/>
					<p> <input type="text" placeholder="请输入手机号" v-model="useTel"/></p>
				</div>
				
				
				<div class="sign_info">
					<img src="../../../static/img/mine/sign_08.png" alt="pic "  title="xianju"/>
					<p> <input type="password" placeholder="请输入密码" v-model="usepassword"/></p>
				</div>
				<router-link :to="{name:'AppFindPass'}" tag="h4">忘记密码？</router-link>
				<button type="button"  @click="goHome">登录</button>
			</form>
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
	export default {
		name: 'signIn',
		data(){
			return {
				useTel:'',
				usepassword:''
			}
		},
		methods:{
			goHome:function(){
				var user=JSON.parse(localStorage.User);
				if(user.usetel!=this.useTel||user.usepassword!=this.usepassword){
					alert("账号或密码有误")
				}
				else{
					this.$router.push({path:'./AppMine'})
				}
			}
		}
	}
</script>
	
<style lang="scss" scoped>
.signIn{
		width:100%;
		height:100%;
		background:#fff;
		overflow:scroll;
		position: relative;
		z-index: 9999;
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
      	margin-top:-0.60rem;
      	z-index:999;
      	form{
      		height:100%;
      		width:2.95rem;
      		margin:0 auto;
      		h4{
      			width:100%;
      			
      			color:#696969;
      			font-size:0.14rem;
      			text-align:right;
      		}
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
    .foot{
   	width:100%;
   	height:1.3rem;
  /* 	position: fixed;*/
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