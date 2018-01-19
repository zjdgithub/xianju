<template>
	<div class="AppJob">
		<!--<div class="head">
			<h1>
				<i @click="goTo()"><img src="../../../static/joblist/fanhui.png" title="xianju"/></i>
				<span>职位详情</span>
				<i @click="collect"><img src="../../../static/joblist/shoucang.png" alt="" title="xianju"/></i>
			</h1>
		</div>-->
		
		<TopNav3>
			<span slot="info">职位详情</span>
			<img slot="img" src="../../../static/joblist/shoucang.png" alt="" title="xianju"/>
		</TopNav3>
		<div class="outline">
			<div class="menu">
				<p class="jobName">UI界面设计师</p>
				<p class="money">8千-1.2万</p>
				<P class="more"><img src="../../../static/joblist/city1.png" class="first"/>北京
					<img src="../../../static/joblist/jingyan.png"/>经验不限<img src="../../../static/joblist/xueli.png"/>本科</P>
				<P class="welfare"><img src="../../../static/joblist/fuli.png"/><span>五险一金</span><span>带薪年假</span><span>绩效奖金</span></p>
			</div>
			<div class="companyOut">
				
				
				<div class="xiangzu" >
					<img class="xiangzu" src="../../../static/joblist/xiangzu.png"/>
				</div>
				<div class="middle">
					<p>北京享租设备科技有限公司</p>
					<p class="people">100-200人 | 移动互联网，金融</p>
				</div>
				
				<div class="right"><img src="../../../static/joblist/jinru.png"/></div>
			</div>
		</div>
		
		<div class="details">
			<p class="jobHead"><img src="../../../static/joblist/miaoshu.png" />职位描述</p>
			<p class="postDuties">岗位职责</p>
			<p class="content">1.负责公司移动产品UI设计以及用户体验设计；</p>
			<p class="content">2.参与产品前期风格界面UI研究、设计流行趋势分析并并制定视觉规范</p>
			<p class="content">3.运用合适的设计语言完善产品，给用户更好的视觉感受和产品体验的提升</p>
			<p class="content">4.跟进研发部门实现产品设计目标</p>
			<p class="postDuties">任职要求</p>
			<p class="content">1.有互联网产品UI设计经验者优先考虑</p>
			<p class="content">2.具有出色的设计表达能力，丰富的互联网产品设计理论知识对先进的设计理论和互联网技</p>
			<p class="content">3.具备出色的分析能力，问题解决能力以及批判性思维；</p>
			<p class="content">4.宽阔的设计视野与深厚的设计见识，特别对互联网产品有浓厚的兴趣和强烈的敏感性；</p>
			
		</div>
		
		<div class="workPoint">
			<p class="botline"><img src="../../../static/joblist/dizhi1.png"/>工作地址</p>
			<p>北京-海淀区 苏州街大恒科技大厦</p>
		</div>
		
		<div class="workPoint">
			<p class="botline"><img src="../../../static/joblist/jingzhen.png"/>竞争力分析</p>
			<p>目前共有88人已沟通过</p>
		</div>
		
		<div class="workLoader">
			<p class="addjob"><img src="../../../static/joblist/fabu.png"/>职位发布者</p>
			<div class="workPeople">
				
					<div><img  src="../../../static/joblist/touxiang.png"/></div>
					<div class="personName">
						<div>
							<p>陈志强</p>
							<p>总经理</p>
						</div>
						
						<div class="hot">刚刚活跃</div>
					</div>
			</div>
			 <div class="foot">
                   <span @click="sendTo" class="resume">投递简历</span>
                   <router-link tag='span' :to="{name:'AppChatDetails',params:{id:param}}" class="chat">沟通一下</router-link>
                </div>
		</div>
      
     
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import TopNav3 from '../pubcomponents/TopNav3'
	export default {
		name:'PositionDetails',
		data(){
			return {
				
				param:{'head_portrait':'../../../static/joblist/touxiang.png','content':"can i help you!",'friendnick':'HR','chat_date':this.getcurtime()}
				
			}
		},
		components:{TopNav3},
		methods:{
			getcurtime(){
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				var day = date.getDate();
				var hour = date.getHours();
				var minute = date.getMinutes();
				var second = date.getSeconds();
				return (year+'年'+month+'月'+day+'日 '+hour+':'+minute+':'+second)
			},
			sendTo(){
				//alert(new Date());
				
				Toast({
					message:'简历已经成功投递',
					position:'middle',
					duration:1000,
					iconClass: 'icon icon-success'
				})
			},
			goTo(){
				window.history.go(-1);
			},
			fn(){
				Toast({
					message:'收藏成功',
					position:'middle',
					duration:1000,
					iconClass: 'icon icon-success'
				})	
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../style/usage/core/reset.scss';

.AppJob{height:100%;width:100%;background: #f0fbfb;box-sizing: border-box;overflow:scroll;
  padding-bottom:0.2rem;
 margin-bottom:0.5rem;
  
}
.head{
	width:100%;
	height:0.44rem;
	background:#12c4b8;
	box-sizing: border-box;
	h1{
	 width:100%;
	 @include flexbox();
	  @include align-items(center);
	  @include justify-content(space-between);
	  line-height:0.44rem;
	  padding:0 0.1rem;
	  
	  span{
	  	font-size:0.17rem;
	  	color:#ffffff;
	  	
	  }
	}
	
}
.outline{
	width:100%;
	height:1.73rem;
	background:#fff;
	padding-left:0.1rem;
	
		.jobName{
		font-size: 0.16rem;
		font-weight:600;
		color:#000;
		padding-top: 0.1rem;
		
		}
		.money{
			font-size: 0.15rem;
			color:#12c4b8;
			font-weight:600;
		}
		.more{
			color:#999999;
			
			
			font-size:0.15rem;
			padding-top:0.01rem;
			
			
			img{
				margin-right:0.07rem;
				margin-left:0.09rem;
				
				margin-top:-0.02rem;
			}
			.first{
				margin-left:0.01rem;
			}
		}
		.welfare{
			width:3.55rem;
			border-bottom:1px solid #e4e4e4;
			padding-bottom: 0.07rem;
			margin-bottom:0.09rem;
			span{
				display:inline-block;
				width:0.58rem;
				height:0.22rem;
				background:#ecfffe;
				color:#8a8f8f;
				margin-left:0.1rem;
				line-height: 0.22rem;
				margin-top:0.04rem;
				margin-bottom:0.04rem;
				
			}
		}
	.companyOut{
		width:3.55rem;
		
		border:1px,solid,#e4e4e4;
		font-size:0.12rem;
		
		display: flex;
		p{
			width:3rem;
			
		}
		.xiangzu{
			
			width:0.36rem;
			height:0.36rem;
			
		}
		.middle{
			
			height:0.36rem;
			margin-left:0.06rem;
			/*background: yellowgreen;*/
		}
		.people{
			color:#a7a7a7;
		}
		.right{
			width:0.2rem;
			height:0.36rem;
			
			line-height: 0.36rem;
			text-align: center;
		}
	}
}

.details{
	height:auto;
	width:100%;
	padding-left:0.1rem;
	background:#fff;
	margin-top:0.1rem;
	box-sizing: border-box;
	padding:0 0.1rem;
	.jobHead{
		height:0.35rem;
		width:3.55rem;
		line-height: 0.35rem;;
		border-bottom:1px solid #e4e4e4;
		font-size: 0.16rem;
		font-weight:600;
		
		img{
			line-height: 0.37rem;
			margin-right: 0.06rem;
			margin-top: -0.03rem;
		}
	}
	.postDuties{
		margin-top: 0.1rem;;
		margin-bottom: 0.1rem;
		font-size:0.13rem;
		font-weight:600;
		
	}
	.content{
		line-height: 0.26rem;;
	}
}
.workPoint{
	height:0.68rem;
	width:100%;
	padding-left:0.1rem;
	background:#fff;
	margin-top:0.1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	.botline{
		width:3.55rem;
		padding-bottom:0.07rem;
		border-bottom:1px solid #e5e5e5;
		font-size:0.13rem;
		font-weight:600;
		img{
			margin-right:0.06rem;
			margin-top:-0.03rem;
		}
	}
}
.workLoader{
	height:0.87rem;
	width:100%;
	padding-left:0.1rem;
	background:#fff;
	margin-top:0.1rem;
	margin-bottom:0.6rem;
	.addjob{
		padding-top:0.1rem;
		width:3.55rem;
	
		border-bottom:1px solid #e5e5e5;
		font-size:0.13rem;
		font-weight:600;
		img{
			margin-right:0.06rem;
			margin-top:-0.03rem;
		}
	}
	.workPeople{
		display: flex;
		padding-top:0.07rem;
		
		.personName{
			margin-left:0.09rem;
			/*background: palegreen;*/
			width:3.05rem;
			display: flex;
			justify-content:space-between;
			
		}
	}
	.hot{
		color:#999999;
		
	}
	
}
.foot{
	width:100%;
	height:0.6rem;
	@include flexbox();
	@include justify-content(space-around);
	@include align-items(center);
	margin-top:0.15rem;
	span{
		height:0.4rem;
		border-radius: 0.05rem;
		 border:0.7px #12c4b8 solid;
		text-align:center;
		line-height:0.4rem;
		font-size:0.15rem;
	}
	.resume{
		width:1.2rem;
		color:#12c4b8;
	}
	.chat{
		width:2.25rem;
		background:#12c4b8;
		color:#ffffff;
	}
}
</style>