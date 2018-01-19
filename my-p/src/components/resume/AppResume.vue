<template>
	<div class="AppJob">
		<div class="bgimg">
			<div class="head">
				<div></div>
				<div class="resume">简历</div>
				<div class="moreSet">
					<img @click="remove()" class="move" src="../../../static/resume/03.png"/>
					<img src="../../../static/resume/05.png" />
				</div>
			</div>
			
			<div class="headPortrait_out">
				<div><img src="../../../static/resume/61x.png" /></div>
				<div>Linda</div>
			</div>
			<div class="edit_out">
				<div class="edit" @click="changeType('yulan')" :class="{ native: type == 'yulan'}">预览简历</div>
				<div class="edit" @click="changeType('bianji')" :class="{ native: type == 'bianji'}">编辑简历</div>
				<div class="edit" @click="changeType('shuaxin'),update()" :class="{ native: type == 'shuaxin'}">刷新简历</div>
			</div>
		</div>
		
		<p class="speed">简历完整度：100%</p>
		
		<div class="editItem" v-for="text in text" @click="show(text)">
			<p>{{text}}</p>
			<p class="options">完整<img src="../../../static/resume/1x.png"/></p>
		</div>
		
	
	</div>
	
	
</template>

<script>
	
	import { MessageBox } from 'mint-ui';
	import { Toast } from 'mint-ui';
	
	export default {
		name:'AppJob',
		data(){
			return {
				text: ['简历名称','基本信息','工作经历','教育经历','期望工作','项目经验','自我评价'],
				type:'bianji'
			}
		},
		methods:{
			changeType:function(type){
				this.type = type;
			},
			show:function(message){
				MessageBox.prompt(message).then(({ value, action }) => {
					
					console.log(value);
					
				})
			},
			update:function(){
				Toast({
				  message: '更新成功',
				  iconClass: 'icon icon-success'
				});
				
			},
			remove:function(){
				MessageBox.confirm("确定全部删除吗？", "提示");
			}
		}
		
		
		
	}
</script>

<style lang="scss" scoped>
@import '../../style/usage/core/reset.scss';
.AppJob{width:100%;height:100%;background: #f0fbfb;}
.bgimg{
	width:100%;
	height:1.8rem;
	background-image: url(../../../static/resume/41x.png);
}
.head{
	width:100%;
	height:0.5rem;
	/*background: palegoldenrod;*/
	display:flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	.resume{
		font-size: 0.2rem;
		color:#FFFFFF;
		position:absolute;
		left:45%;
	}
	.moreSet{
		padding-right:0.1rem;
		img{
			width:0.2rem;
			height:0.2rem;
		}
		.move{
			margin-right: 0.05rem;
		}
		
	}
}
.headPortrait_out{
	width:100%;
	height:0.8rem;
	/*background: palegreen;*/
	@include flexbox();
	@include flex-direction(column);
	justify-content: center;
	text-align: center;
	color:#fff;
	font-size: 0.14rem;
}
.edit_out{
	height:0.36rem;
	@include flexbox();
	@include justify-content(space-around);
	/*background: red;*/
	line-height: 0.36rem;
	color: #fff;
	.edit{
		margin-top: 0.08rem;
		width:0.8rem;
		height:0.3rem;
		/*background: palevioletred;*/
		text-align: center;
		line-height: 0.3rem;
		border-radius: 15px;
		border: 0.01rem solid #fff;
	}
}
.speed{
	margin: 0.1rem 0 0.1rem 0.1rem;
	font-size: 0.12rem;;
	color:#afb2b2;
}
.editItem{
	width:3.55rem;
	height:0.44rem;
	background:#fff;
	margin-left: 0.1rem;
	padding-left: 0.1rem;
	padding-right: 0.1rem;
	@include flexbox();
	@include justify-content(space-between);
	line-height: 0.44rem;
	font-size: 0.16rem;
	color:#000;
	margin-bottom:0.1rem;
	.options{
		color:#b3b3b3;
		img{
			padding-left: 0.05rem;
			margin-top:-0.01rem;
		}
	}
}
.native{
	background: #fff;
	color:#12c4b8;
}
</style>