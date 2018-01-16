<template>
	<div class="appmine">
		   <div class="top">
				<h1>我的</h1>
				<div class="show-info">
					<div class="pic">
						<img src="../../../static/img/mine/_11.png" title="per" alt="nothing" />
						<p><span>Amos</span><b>路漫漫，任重而道远</b></p>
					</div>
					<div class="edit-mine">
						<img src="../../../static/img/mine/_14.png"/>
					</div>
					
				</div>
			</div>
			<div class="nav_mine">
				<ul>
					<router-link :to="{name:'AppInvitation'}" tag="li">
						<img src="../../../static/img/mine/_19.png" alt="pic" title="juxian"/>
						<span>面试邀请</span>
					</router-link>
					<router-link :to="{name:'AppProgress'}" tag="li"><img src="../../../static/img/mine/_22.png" title="jianli"><span>投递进展</span></router-link>
					<li><img src="../../../static/img/mine/_25.png" alt="" title='jianzhi' /><span>关注公司</span></li>
				</ul>
			</div>
			<div class="mine_top">
				<ul>
					<li>
					<div>
					<img src="../../../static/img/mine/_32.png" title="jianzhi"/>
					<span>谁看了我</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
					<li>
					<div>
					<img src="../../../static/img/mine/_39.png"/>
					
					<span>消息通知</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
					<li class="noborder">
					<div>
					<img src="../../../static/img/mine/_36.png"/>
					<span>职位珍藏</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
				</ul>
			</div>
			<div class="mine_bottom">
				<ul>
					<li>
					<div>
					<img src="../../../static/img/mine/_43.png" alt="" title='xianju'/>
					<span>帮助与反馈</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
					
					<li class="noborder">
					<div>
					<img src="../../../static/img/mine/_45.png" alt="pic" title="jianzhi"/>
					<span>设置</span>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
					
					</li>
				</ul>
			</div>
		
	</div>
</template>

<script>
	export default{
		name:"AppMine",
	}
</script>

<style lang="scss">
	@import "../../style/usage/modules/mine/AppMine.scss";
</style>