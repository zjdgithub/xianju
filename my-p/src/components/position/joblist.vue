<template>
	<div class="AppJob">
		<div class="head"></div>
		<div class="outline">
			<div class="menu">
				<p class="jobName">UI界面设计师</p>
				<p class="money">8千-1.2万</p>
				<P class="more"><img src="../../../static/joblist/城市@1x.png" class="first"/>北京
					<img src="../../../static/joblist/经验@1x.png"/>经验不限<img src="../../../static/joblist/学历@1x.png"/>本科</P>
				<P class="welfare"><img src="../../../static/joblist/福利@1x.png"/><span>五险一金</span><span>带薪年假</span><span>绩效奖金</span></p>
			</div>
			<div class="companyOut">
				
				
				<div class="xiangzu" >
					<img class="xiangzu" src="../../../static/joblist/享租logo@1x.png"/>
				</div>
				<div class="middle">
					<p>北京享租设备科技有限公司</p>
					<p class="people">100-200人 | 移动互联网，金融</p>
				</div>
				
				<div class="right"><img src="../../../static/joblist/进入@1x.png"/></div>
			</div>
		</div>
		
		<div class="details">
			<p class="jobHead"><img src="../../../static/joblist/职位描述@1x.png" />职位描述</p>
			<p class="postDuties">岗位职责</p>
			<p class="content">11111111111</p>
			<p class="content">22222222222</p>
			<p class="content">33333333333</p>
			<p class="content">44444444444</p>
			<p class="postDuties">任职要求</p>
			<p class="content">11111111111</p>
			<p class="content">22222222222</p>
			<p class="content">33333333333</p>
			<p class="content">44444444444</p>
			
		</div>
		
		<div class="workPoint">
			<p class="botline"><img src="../../../static/joblist/地址@1x.png"/>工作地址</p>
			<p>北京-海淀区 苏州街大恒科技大厦</p>
		</div>
		
		<div class="workPoint">
			<p class="botline"><img src="../../../static/joblist/竞争力@1x.png"/>竞争力分析</p>
			<p>目前共有88人已沟通过</p>
		</div>
		
		<div class="workLoader">
			<p class="addjob"><img src="../../../static/joblist/职位发布者@1x.png"/>职位发布者</p>
			<div class="workPeople">
				
					<div><img  src="../../../static/joblist/头像@1x.png"/></div>
					<div class="personName">
						<div>
							<p>陈志强</p>
							<p>总经理</p>
						</div>
						
						<div class="hot">刚刚活跃</div>
					</div>
					
						
					
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'AppJob'
	}
</script>

<style lang="scss" scoped>
@import '../../style/usage/core/reset.scss';
.AppJob{width:100%;background: #f0fbfb;}
.head{
	width:100%;
	height:0.44rem;
	background:#12c4b8;
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
		padding-bottom:0.06rem;
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
</style>